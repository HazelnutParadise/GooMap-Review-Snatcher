import { describe, expect, test } from 'bun:test'
import { filterReviews, getReviewPage, formatReviewDate } from '../src/utils/reviewTable'

const makeReview = (id, overrides = {}) => ({
    reviewer: '測試評論者', reviewer_id: '123', reviewer_state: '', reviewer_level: 0,
    reviewer_review_count: 7, reviewer_photo_count: 4, review_id: id,
    review_time: '一天前', review_date: '2026-10-25', language: 'zh-Hant',
    content: '測試評論內容', rating: 5, ...overrides,
})

describe('review table view', () => {
    const reviews = [
        makeReview('a', { reviewer: 'Alice', content: '咖啡很香', rating: 5 }),
        makeReview('b', { reviewer: '陳先生', content: 'Coffee 太苦', rating: 2 }),
        makeReview('c', { reviewer: '林小姐', content: '', rating: 5 }),
    ]

    test('searches names and content without changing the source order or data', () => {
        expect(filterReviews(reviews, ' alice ', null)).toEqual([reviews[0]])
        expect(filterReviews(reviews, 'COFFEE', null)).toEqual([reviews[1]])
        expect(filterReviews(reviews, '咖啡', 5)).toEqual([reviews[0]])
        expect(filterReviews(reviews, '咖啡', 2)).toEqual([])
        expect(reviews.map(r => r.review_id)).toEqual(['a', 'b', 'c'])
    })

    test('keeps rating-only reviews and handles no matches', () => {
        expect(filterReviews(reviews, '', 5)).toEqual([reviews[0], reviews[2]])
        expect(filterReviews(reviews, '不存在的文字', null)).toEqual([])
        expect(filterReviews([], '', null)).toEqual([])
    })

    test('paginates twenty rows and clamps stale or invalid page numbers', () => {
        const rows = Array.from({ length: 41 }, (_, i) => makeReview(String(i)))
        const first = getReviewPage(rows, 1)
        expect(first).toEqual({ reviews: rows.slice(0, 20), page: 1, totalPages: 3, start: 1, end: 20 })
        expect(getReviewPage(rows, 2).reviews).toEqual(rows.slice(20, 40))
        expect(getReviewPage(rows, 99)).toEqual({ reviews: rows.slice(40), page: 3, totalPages: 3, start: 41, end: 41 })
        expect(getReviewPage(rows, -1).page).toBe(1)
        expect(getReviewPage(rows, Number.NaN).page).toBe(1)
        expect(getReviewPage([], 2)).toEqual({ reviews: [], page: 1, totalPages: 1, start: 0, end: 0 })
    })

    test('formats source dates without timezone shifts and falls back honestly', () => {
        expect(formatReviewDate(reviews[0])).toBe('2026/10/25')
        expect(formatReviewDate(makeReview('x', { review_date: '' }))).toBe('一天前')
        expect(formatReviewDate(makeReview('x', { review_date: '', review_time: '' }))).toBe('未提供日期')
    })
})

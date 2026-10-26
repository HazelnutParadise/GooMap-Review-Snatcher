import type { Review } from '../services/api'

const pageSize = 20

export function filterReviews(reviews: Review[], query: string, rating: number | null): Review[] {
    const term = query.trim().toLocaleLowerCase()
    return reviews.filter(review =>
        (rating === null || review.rating === rating) &&
        (!term || review.reviewer.toLocaleLowerCase().includes(term) || review.content.toLocaleLowerCase().includes(term))
    )
}

export function getReviewPage(reviews: Review[], requestedPage: number) {
    const totalPages = Math.max(1, Math.ceil(reviews.length / pageSize))
    const page = Math.min(totalPages, Math.max(1, Number.isFinite(requestedPage) ? Math.trunc(requestedPage) : 1))
    const offset = (page - 1) * pageSize
    return {
        reviews: reviews.slice(offset, offset + pageSize),
        page,
        totalPages,
        start: reviews.length ? offset + 1 : 0,
        end: Math.min(offset + pageSize, reviews.length),
    }
}

export function formatReviewDate(review: Review): string {
    return /^\d{4}-\d{2}-\d{2}$/.test(review.review_date)
        ? review.review_date.replaceAll('-', '/')
        : review.review_time || '未提供日期'
}

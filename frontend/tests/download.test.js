import { afterEach, beforeEach, describe, expect, test } from 'bun:test'
import { DownloadService } from '../src/services/download'

const review = {
    reviewer: '測試評論者',
    reviewer_id: '123',
    reviewer_state: '',
    reviewer_level: 0,
    reviewer_review_count: 7,
    reviewer_photo_count: 4,
    review_id: 'review-1',
    review_time: '一天前',
    review_date: '2026-10-25',
    language: 'zh-Hant',
    content: '好吃,"親切"\n值得再訪',
    rating: 5,
}

describe('Insyra review downloads', () => {
    const service = new DownloadService()
    let originalDocument
    let originalWindow
    let originalCreate
    let originalRevoke
    let blob
    let download
    let clicked
    let revoked

    beforeEach(() => {
        originalDocument = Object.getOwnPropertyDescriptor(globalThis, 'document')
        originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window')
        originalCreate = URL.createObjectURL
        originalRevoke = URL.revokeObjectURL
        blob = undefined
        clicked = false
        revoked = undefined
        URL.createObjectURL = value => {
            blob = value
            return 'blob:reviews'
        }
        URL.revokeObjectURL = value => { revoked = value }
        globalThis.window = { URL }
        globalThis.document = {
            createElement: name => {
                expect(name).toBe('a')
                const anchor = { click: () => { clicked = true; download = anchor.download } }
                return anchor
            },
        }
    })

    afterEach(() => {
        URL.createObjectURL = originalCreate
        URL.revokeObjectURL = originalRevoke
        if (originalDocument) Object.defineProperty(globalThis, 'document', originalDocument)
        else delete globalThis.document
        if (originalWindow) Object.defineProperty(globalThis, 'window', originalWindow)
        else delete globalThis.window
    })

    test('JSON preserves all twelve fields, including empty metadata', async () => {
        service.downloadJSON([review], '測試商店')
        expect(JSON.parse(await blob.text())).toEqual([review])
        expect(Object.keys(JSON.parse(await blob.text())[0])).toHaveLength(12)
        expect(download).toBe('測試商店.json')
        expect(clicked).toBe(true)
        expect(revoked).toBe('blob:reviews')
    })

    test('CSV preserves new fields, BOM, zeroes and quoted multiline content', async () => {
        service.downloadCSV([review], '測試商店')
        expect([...new Uint8Array(await blob.arrayBuffer()).slice(0, 3)]).toEqual([239, 187, 191])
        expect(await blob.text()).toBe(
            Object.keys(review).join(',') + '\n' +
            '測試評論者,123,,0,7,4,review-1,一天前,2026-10-25,zh-Hant,"好吃,""親切""\n值得再訪",5',
        )
        expect(download).toBe('測試商店.csv')
        expect(clicked).toBe(true)
        expect(revoked).toBe('blob:reviews')
    })

    test('empty reviews do not create a download', () => {
        expect(() => service.downloadJSON([], '商店')).toThrow('沒有評論資料可下載')
        expect(() => service.downloadCSV([], '商店')).toThrow('沒有評論資料可下載')
        expect(blob).toBeUndefined()
        expect(clicked).toBe(false)
    })
})

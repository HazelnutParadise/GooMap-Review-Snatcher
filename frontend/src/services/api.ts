// API 服務層 - 集中管理所有 API 呼叫
export interface Store {
    ID: string
    Name: string
    Address?: string
    Rating?: number
    [key: string]: any
}

export interface Review {
    content: string
    rating: number
    author?: string
    date?: string
    [key: string]: any
}

class ApiService {
    private readonly searchStoreUrl = "/api/search"
    private readonly getReviewsUrl = "/api/reviews"
    private readonly reviewMiningUrl = "/api/review-mining"

    // 生成 UUID
    generateUUID(): string {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (c) {
                const r = (Math.random() * 16) | 0
                const v = c == "x" ? r : (r & 0x3) | 0x8
                return v.toString(16)
            }
        )
    }

    // 搜尋店家
    async searchStores(storeName: string): Promise<Store[]> {
        const uuid = this.generateUUID()

        const pollForResults = async (): Promise<Store[]> => {
            try {
                const res = await fetch(
                    `${this.searchStoreUrl}?storeName=${encodeURIComponent(storeName)}&uuid=${uuid}`
                )

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }

                const data = await res.json()

                // 如果收到空陣列，表示正在查詢中，需要輪詢
                if (Array.isArray(data) && data.length === 0) {
                    await new Promise(resolve => setTimeout(resolve, 1000))
                    return pollForResults()
                }

                // 如果收到資料，表示查詢完成
                if (Array.isArray(data) && data.length > 0) {
                    return data
                }

                // 如果收到 null 或其他錯誤，表示查詢失敗
                throw new Error('搜尋失敗')
            } catch (error) {
                console.error('Search error:', error)
                throw error
            }
        }

        return pollForResults()
    }

    // 取得評論
    async getReviews(storeID: string, pages: number): Promise<Review[]> {
        const uuid = this.generateUUID()

        const pollForResults = async (): Promise<Review[]> => {
            try {
                const res = await fetch(
                    `${this.getReviewsUrl}?storeID=${storeID}&pages=${pages}&uuid=${uuid}`
                )

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }

                const data = await res.json()

                // 如果收到 null，表示正在查詢中，需要輪詢
                if (data === null) {
                    await new Promise(resolve => setTimeout(resolve, 1000))
                    return pollForResults()
                }

                // 如果收到資料，表示查詢完成
                if (data && typeof data === "object") {
                    return data
                }

                throw new Error('取得評論失敗')
            } catch (error) {
                console.error('Reviews error:', error)
                throw error
            }
        }

        return pollForResults()
    }

    // 評論探勘
    async mineReviews(storeName: string, reviews: string[], ratings: number[]): Promise<string> {
        try {
            const res = await fetch(this.reviewMiningUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    storeName,
                    reviews,
                    ratings,
                }),
            })

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`)
            }

            const data = await res.json()
            return data.dataUUID
        } catch (error) {
            console.error('Mining error:', error)
            throw error
        }
    }
}

export const apiService = new ApiService()

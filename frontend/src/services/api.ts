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

                // 如果狀態碼是 202，表示還在處理中，繼續輪詢
                if (res.status === 202) {
                    await new Promise(resolve => setTimeout(resolve, 10000)) // 增加到10秒間隔
                    return pollForResults()
                }

                const data = await res.json()

                // 如果狀態碼是 200，表示完成，回傳結果
                if (res.status === 200) {
                    return data
                }

                // 其他狀態碼表示錯誤
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
        // 第一次請求：啟動任務
        const startRes = await fetch(
            `${this.getReviewsUrl}?storeID=${storeID}&pages=${pages}`
        )

        if (!startRes.ok) {
            throw new Error(`HTTP error! status: ${startRes.status}`)
        }

        const startData = await startRes.json()

        // 如果立即得到結果（狀態碼 200），直接回傳
        if (startRes.status === 200) {
            return startData
        }

        // 如果狀態碼是 202，表示任務已啟動，需要輪詢
        if (startRes.status === 202 && startData.uuid) {
            const uuid = startData.uuid

            const pollForResults = async (): Promise<Review[]> => {
                try {
                    const res = await fetch(
                        `${this.getReviewsUrl}?storeID=${storeID}&pages=${pages}&uuid=${uuid}`
                    )

                    // 如果狀態碼是 202，表示還在處理中，繼續輪詢
                    if (res.status === 202) {
                        await new Promise(resolve => setTimeout(resolve, 2000)) // 增加到2秒間隔
                        return pollForResults()
                    }

                    if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`)
                    }

                    // 如果狀態碼是 200，表示完成，回傳結果
                    if (res.status === 200) {
                        const data = await res.json()
                        return data
                    }

                    throw new Error('取得評論失敗')
                } catch (error) {
                    console.error('Reviews polling error:', error)
                    throw error
                }
            }

            return pollForResults()
        }

        throw new Error('取得評論失敗')
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

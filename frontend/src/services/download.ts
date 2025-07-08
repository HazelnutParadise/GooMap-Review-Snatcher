// 下載服務 - 處理檔案下載功能
import type { Review } from './api'

export class DownloadService {
    // 下載 CSV 檔案
    downloadCSV(reviews: Review[], storeName: string): void {
        if (!reviews || reviews.length === 0) {
            throw new Error('沒有評論資料可下載')
        }

        // 添加 BOM 標記
        const BOM = new Uint8Array([0xef, 0xbb, 0xbf])

        // 建立 CSV 內容，加入標題列
        const headers = Object.keys(reviews[0]).join(",")
        const rows = reviews.map((row: any) =>
            Object.values(row)
                .map((value: any) => {
                    // 處理數值、字串中的特殊字元
                    if (typeof value === "string") {
                        // 如果內容包含逗號、換行或雙引號，就用雙引號包起來
                        if (
                            value.includes(",") ||
                            value.includes("\n") ||
                            value.includes('"')
                        ) {
                            return `"${value.replace(/"/g, '""')}"`
                        }
                    }
                    return value
                })
                .join(",")
        )
        const csvContent = headers + "\n" + rows.join("\n")

        // 合併 BOM 和 CSV 內容
        const csvBlob = new Blob([BOM, csvContent], {
            type: "text/csv;charset=utf-8",
        })

        this.downloadBlob(csvBlob, `${storeName}.csv`)
    }

    // 下載 JSON 檔案
    downloadJSON(reviews: Review[], storeName: string): void {
        if (!reviews || reviews.length === 0) {
            throw new Error('沒有評論資料可下載')
        }

        const json = JSON.stringify(reviews, null, 2)
        const jsonBlob = new Blob([json], {
            type: "application/json;charset=utf-8",
        })

        this.downloadBlob(jsonBlob, `${storeName}.json`)
    }

    // 通用的 Blob 下載方法
    private downloadBlob(blob: Blob, filename: string): void {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")

        a.href = url
        a.download = filename
        a.click()

        window.URL.revokeObjectURL(url)
    }
}

export const downloadService = new DownloadService()

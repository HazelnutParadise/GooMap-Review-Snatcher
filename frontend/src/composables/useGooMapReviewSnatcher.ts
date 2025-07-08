// Composable - 簡化的應用程式狀態管理
import { ref, computed } from 'vue'
import { apiService, type Store, type Review } from '../services/api'
import { downloadService } from '../services/download'

export function useGooMapReviewSnatcher() {
    // 核心狀態
    const searchInput = ref('')
    const selectedStore = ref<Store | null>(null)
    const pagesToFetch = ref(1)
    const storeData = ref<Store[]>([])
    const reviews = ref<Review[]>([])
    const isLoading = ref(false)

    // 計算屬性
    const hasStoreData = computed(() => storeData.value.length > 0)
    const hasReviews = computed(() => reviews.value.length > 0)

    // 重置狀態
    const reset = () => {
        searchInput.value = ''
        selectedStore.value = null
        pagesToFetch.value = 1
        storeData.value = []
        reviews.value = []
        isLoading.value = false
    }

    // 搜尋店家
    const searchStores = async () => {
        if (!searchInput.value.trim()) {
            throw new Error('請輸入搜尋關鍵字')
        }

        isLoading.value = true

        try {
            const stores = await apiService.searchStores(searchInput.value)
            storeData.value = stores

            // 自動選擇第一家店
            if (stores.length > 0) {
                selectedStore.value = stores[0]
            }
        } catch (error) {
            console.error('Search failed:', error)
            throw error
        } finally {
            isLoading.value = false
        }
    }

    // 取得評論
    const fetchReviews = async () => {
        if (!selectedStore.value) {
            throw new Error('請選擇店家')
        }

        isLoading.value = true

        try {
            const reviewData = await apiService.getReviews(
                selectedStore.value.ID,
                pagesToFetch.value
            )
            reviews.value = reviewData
        } catch (error) {
            console.error('Fetch reviews failed:', error)
            throw error
        } finally {
            isLoading.value = false
        }
    }

    // 下載檔案
    const downloadReviews = (type: 'csv' | 'json') => {
        if (!selectedStore.value || !reviews.value.length) {
            throw new Error('沒有可下載的資料')
        }

        try {
            if (type === 'csv') {
                downloadService.downloadCSV(reviews.value, selectedStore.value.Name)
            } else if (type === 'json') {
                downloadService.downloadJSON(reviews.value, selectedStore.value.Name)
            }
        } catch (error) {
            console.error('Download failed:', error)
            throw error
        }
    }

    // 評論探勘
    const mineReviews = async (openNewPage: boolean = true) => {
        if (!selectedStore.value || !reviews.value.length) {
            throw new Error('沒有可探勘的資料')
        }

        try {
            const reviewContent = reviews.value.map((review: Review) => review.content)
            const reviewRating = reviews.value.map((review: Review) => review.rating)

            const dataUUID = await apiService.mineReviews(
                selectedStore.value.Name,
                reviewContent,
                reviewRating
            )

            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
            const url = `https://storecoach.hazelnut-paradise.com/review-mining/${dataUUID}`

            if (openNewPage && !isSafari) {
                window.open(url, "_blank")
            } else {
                window.open(url, "_self")
            }
        } catch (error) {
            console.error('Mining failed:', error)
            throw error
        }
    }

    return {
        // 狀態
        searchInput,
        selectedStore,
        pagesToFetch,
        storeData,
        reviews,
        isLoading,

        // 計算屬性
        hasStoreData,
        hasReviews,

        // 方法
        reset,
        searchStores,
        fetchReviews,
        downloadReviews,
        mineReviews
    }
}

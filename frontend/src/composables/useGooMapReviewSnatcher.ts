// Composable - 集中管理應用程式狀態和邏輯
import { ref, computed } from 'vue'
import { apiService, type Store, type Review } from '../services/api'
import { downloadService } from '../services/download'

export interface AppState {
    searchInput: string
    selectedStore: Store | null
    pagesToFetch: number
    storeData: Store[]
    reviews: Review[]
    isLoading: boolean
    searchUUID: string
    reviewUUID: string
}

export function useGooMapReviewSnatcher() {
    // 響應式狀態
    const state = ref<AppState>({
        searchInput: '',
        selectedStore: null,
        pagesToFetch: 1,
        storeData: [],
        reviews: [],
        isLoading: false,
        searchUUID: '',
        reviewUUID: ''
    })

    // 計算屬性
    const hasStoreData = computed(() => state.value.storeData.length > 0)
    const hasReviews = computed(() => state.value.reviews.length > 0)
    const isSearching = computed(() => state.value.isLoading && !hasStoreData.value)
    const isFetchingReviews = computed(() => state.value.isLoading && hasStoreData.value)

    // 重置狀態
    const reset = () => {
        state.value = {
            searchInput: '',
            selectedStore: null,
            pagesToFetch: 1,
            storeData: [],
            reviews: [],
            isLoading: false,
            searchUUID: '',
            reviewUUID: ''
        }
    }

    // 搜尋店家
    const searchStores = async () => {
        if (!state.value.searchInput.trim()) {
            throw new Error('請輸入搜尋關鍵字')
        }

        state.value.isLoading = true
        state.value.searchUUID = apiService.generateUUID()

        try {
            const stores = await apiService.searchStores(state.value.searchInput)
            state.value.storeData = stores

            // 自動選擇第一家店
            if (stores.length > 0) {
                state.value.selectedStore = stores[0]
            }
        } catch (error) {
            console.error('Search failed:', error)
            throw error
        } finally {
            state.value.isLoading = false
        }
    }

    // 取得評論
    const fetchReviews = async () => {
        if (!state.value.selectedStore) {
            throw new Error('請選擇店家')
        }

        state.value.isLoading = true
        state.value.reviewUUID = apiService.generateUUID()

        try {
            const reviews = await apiService.getReviews(
                state.value.selectedStore.ID,
                state.value.pagesToFetch
            )
            state.value.reviews = reviews
        } catch (error) {
            console.error('Fetch reviews failed:', error)
            throw error
        } finally {
            state.value.isLoading = false
        }
    }

    // 下載檔案
    const downloadReviews = (type: 'csv' | 'json') => {
        if (!state.value.selectedStore || !state.value.reviews.length) {
            throw new Error('沒有可下載的資料')
        }

        try {
            if (type === 'csv') {
                downloadService.downloadCSV(state.value.reviews, state.value.selectedStore.Name)
            } else if (type === 'json') {
                downloadService.downloadJSON(state.value.reviews, state.value.selectedStore.Name)
            }
        } catch (error) {
            console.error('Download failed:', error)
            throw error
        }
    }

    // 評論探勘
    const mineReviews = async (openNewPage: boolean = true) => {
        if (!state.value.selectedStore || !state.value.reviews.length) {
            throw new Error('沒有可探勘的資料')
        }

        try {
            const reviewContent = state.value.reviews.map(review => review.content)
            const reviewRating = state.value.reviews.map(review => review.rating)

            const dataUUID = await apiService.mineReviews(
                state.value.selectedStore.Name,
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

    // 更新搜尋輸入
    const updateSearchInput = (value: string) => {
        state.value.searchInput = value
    }

    // 更新選擇的店家
    const updateSelectedStore = (store: Store) => {
        state.value.selectedStore = store
    }

    // 更新頁數
    const updatePagesToFetch = (pages: number) => {
        state.value.pagesToFetch = Math.max(0, pages)
    }

    return {
        // 狀態
        state,

        // 計算屬性
        hasStoreData,
        hasReviews,
        isSearching,
        isFetchingReviews,

        // 方法
        reset,
        searchStores,
        fetchReviews,
        downloadReviews,
        mineReviews,
        updateSearchInput,
        updateSelectedStore,
        updatePagesToFetch
    }
}

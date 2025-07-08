<template>
    <div v-if="goMining">
        <Redirecting />
    </div>
    <div v-else class="result-container">
        <button @click="$emit('reset')" class="reset-button button">
            查詢其他商家
        </button>
        <div class="review-box">
            <h3 class="store-name">{{ appState.selectedStore.value?.Name }}</h3>
            <div class="button-group">
                <button @click="$emit('download', 'csv')" class="download-button button">
                    下載 CSV
                </button>
                <button @click="$emit('download', 'json')" class="download-button button">
                    下載 JSON
                </button>
                <button @click="handleMineReviews" class="mining-button button">
                    使用 <strong>StoreCoach</strong> 探勘
                </button>
            </div>
            <div class="review-table-box">
                <table class="review-table" v-if="appState.reviews.value.length > 0">
                    <thead>
                        <tr>
                            <th v-for="key in Object.keys(appState.reviews.value[0])" :key="key"
                                :style="getColumnStyle(key)">
                                {{ key }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(review, index) in appState.reviews.value" :key="index">
                            <td v-for="value in Object.values(review)" :key="value">
                                {{ value }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Redirecting from './Redirecting.vue'
import type { useGooMapReviewSnatcher } from '../composables/useGooMapReviewSnatcher'

interface Props {
    appState: ReturnType<typeof useGooMapReviewSnatcher>
}

const props = defineProps<Props>()

defineEmits<{
    'download': [type: 'csv' | 'json']
    'mine': []
    'reset': []
}>()

// 探勘狀態
const goMining = ref(false)

// 處理探勘評論 - 使用 composable 中的方法
const handleMineReviews = async () => {
    goMining.value = true
    try {
        await props.appState.mineReviews(true)
        // 如果不是 Safari 且開新頁，則重置狀態
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        if (!isSafari) {
            goMining.value = false
        }
    } catch (error) {
        console.error("Mining error:", error)
        alert("無法使用 StoreCoach 探勘")
        goMining.value = false
    }
}

// 根據欄位名稱取得樣式
const getColumnStyle = (key: string) => {
    if (key === 'content') {
        return { minWidth: '500px' }
    } else if (key === 'reviewer_id') {
        return { minWidth: '400px' }
    }
    return {}
}

// 檢查 URL 參數，如果有 mode=storecoach 則自動執行探勘
onMounted(async () => {
    const params = new URLSearchParams(window.location.search)
    const queryParams = Object.fromEntries(params.entries())
    console.log(queryParams)

    if (queryParams.mode && queryParams.mode === "storecoach") {
        await handleMineReviews()
    }
})
</script>

<style scoped>
.result-container {
    width: 100%;
    max-width: none;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.review-box {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.button-group {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.store-name {
    font-size: 1.5rem;
    color: #2c3e50;
    margin-bottom: 20px;
}

.review-table {
    border-collapse: collapse;
    width: 100%;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
}

.review-table th {
    background-color: #2c3e50;
    color: white;
    padding: 12px 15px;
    text-align: left;
    font-weight: 600;
}

.review-table td {
    padding: 12px 15px;
    border-bottom: 1px solid #ddd;
    color: #333;
}

.review-table tbody tr:hover {
    background-color: #f5f5f5;
    transition: background-color 0.2s ease;
}

.review-table tbody tr:last-child td {
    border-bottom: none;
}

.review-table-box {
    width: 100%;
    height: 500px;
    overflow: auto;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin: 0 auto;
}

/* 美化捲軸 */
.review-table-box::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

.review-table-box::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
}

.review-table-box::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
}

.review-table-box::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.button {
    min-width: 200px;
    padding: 2px 20px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.3s ease;
    margin: 0;
}

.button:hover {
    opacity: 0.8;
}

.reset-button {
    height: 50px;
    width: auto;
    min-width: 200px;
    border: 2px solid #0a0903;
    background-color: #0a0903;
    color: white;
    margin-bottom: 20px;
}

.reset-button:hover {
    background-color: #333;
}

.download-button {
    height: 40px;
    width: auto;
    min-width: 150px;
    border: 1px solid #0a0903;
    background-color: #0a0903;
    color: white;
}

.download-button:hover {
    background-color: #333;
}

.mining-button {
    height: 40px;
    width: auto;
    min-width: 200px;
    border: 1px solid #ffa400;
    background-color: #ffa400;
    color: black;
}

.mining-button:hover {
    background-color: rgb(255, 128, 0);
}
</style>

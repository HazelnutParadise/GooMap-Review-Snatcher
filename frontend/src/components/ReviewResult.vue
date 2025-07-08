<template>
    <div class="result-container">
        <div class="result-header">
            <h3>{{ state.selectedStore?.Name }} 的評論</h3>
            <p>共找到 {{ state.reviews.length }} 筆評論</p>
        </div>

        <div class="action-buttons">
            <button @click="$emit('download', 'csv')" class="button download-btn">
                下載 CSV
            </button>
            <button @click="$emit('download', 'json')" class="button download-btn">
                下載 JSON
            </button>
            <button @click="handleMineReviews" class="button mine-btn" :disabled="isMining">
                使用 StoreCoach 探勘
            </button>
            <button @click="$emit('reset')" class="button reset-btn">
                重新開始
            </button>
        </div>

        <!-- 跳轉中的提示 -->
        <Redirecting v-if="isMining" />

        <!-- 評論列表 -->
        <div class="reviews-list">
            <div v-for="(review, index) in displayReviews" :key="index" class="review-item">
                <div class="review-header">
                    <span class="review-rating">{{ '★'.repeat(review.rating) }}</span>
                    <span class="review-author">{{ review.author || '匿名用戶' }}</span>
                    <span class="review-date">{{ formatDate(review.date) }}</span>
                </div>
                <div class="review-content">{{ review.content }}</div>
            </div>
        </div>

        <!-- 分頁控制 -->
        <div v-if="state.reviews.length > pageSize" class="pagination">
            <button @click="currentPage--" :disabled="currentPage <= 1" class="button page-btn">
                上一頁
            </button>
            <span class="page-info">
                第 {{ currentPage }} 頁，共 {{ totalPages }} 頁
            </span>
            <button @click="currentPage++" :disabled="currentPage >= totalPages" class="button page-btn">
                下一頁
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Redirecting from './Redirecting.vue'
import type { AppState } from '../composables/useGooMapReviewSnatcher'

interface Props {
    state: AppState
}

const props = defineProps<Props>()

const emit = defineEmits<{
    'download': [type: 'csv' | 'json']
    'mine': [openNewPage: boolean]
    'reset': []
}>()

// 分頁相關
const currentPage = ref(1)
const pageSize = 10

const totalPages = computed(() => Math.ceil(props.state.reviews.length / pageSize))

const displayReviews = computed(() => {
    const start = (currentPage.value - 1) * pageSize
    const end = start + pageSize
    return props.state.reviews.slice(start, end)
})

// 探勘狀態
const isMining = ref(false)

// 處理探勘評論
const handleMineReviews = async () => {
    isMining.value = true
    try {
        await new Promise(resolve => setTimeout(resolve, 1000)) // 模擬延遲
        emit('mine', true)
    } finally {
        isMining.value = false
    }
}

// 格式化日期
const formatDate = (dateString?: string) => {
    if (!dateString) return ''
    try {
        return new Date(dateString).toLocaleDateString('zh-TW')
    } catch {
        return dateString
    }
}
</script>

<style scoped>
.result-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
}

.result-header {
    text-align: center;
    margin-bottom: 20px;
}

.result-header h3 {
    color: #2c3e50;
    margin-bottom: 5px;
}

.result-header p {
    color: #666;
    margin: 0;
}

.action-buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
}

.button {
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: all 0.3s ease;
}

.download-btn {
    background-color: #3498db;
    color: white;
}

.download-btn:hover {
    background-color: #2980b9;
}

.mine-btn {
    background-color: #e74c3c;
    color: white;
}

.mine-btn:hover:not(:disabled) {
    background-color: #c0392b;
}

.mine-btn:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
}

.reset-btn {
    background-color: #95a5a6;
    color: white;
}

.reset-btn:hover {
    background-color: #7f8c8d;
}

.reviews-list {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.review-item {
    border-bottom: 1px solid #eee;
    padding: 15px 0;
}

.review-item:last-child {
    border-bottom: none;
}

.review-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 8px;
    flex-wrap: wrap;
}

.review-rating {
    color: #f39c12;
    font-size: 16px;
}

.review-author {
    font-weight: bold;
    color: #2c3e50;
}

.review-date {
    color: #7f8c8d;
    font-size: 14px;
}

.review-content {
    color: #444;
    line-height: 1.6;
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
}

.page-btn {
    background-color: #34495e;
    color: white;
    padding: 8px 16px;
    font-size: 14px;
}

.page-btn:hover:not(:disabled) {
    background-color: #2c3e50;
}

.page-btn:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
}

.page-info {
    color: #666;
    font-weight: bold;
}
</style>

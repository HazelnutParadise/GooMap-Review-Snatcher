<template>
    <!-- 已有店家資料時顯示選擇表單 -->
    <form v-if="state.storeData.length > 0" class="input-form chose-store" @submit.prevent="$emit('fetch-reviews')">
        <div class="store-select-box">
            <label for="store">選擇店家</label>
            <select v-model="selectedStoreIndex" class="store-select">
                <option v-for="(store, index) in state.storeData" :key="store.ID" :value="index">
                    {{ store.Name }}
                </option>
            </select>
        </div>
        <div class="pages-box">
            <label for="pages">輸入頁數，0代表全部（一頁10筆）</label>
            <input type="number" inputmode="numeric" min="0" name="pages" placeholder="輸入頁數" :value="state.pagesToFetch"
                @input="handlePagesInput" />
        </div>
        <button type="submit" class="button">確定</button>
    </form>

    <!-- 初始搜尋表單 -->
    <template v-else>
        <InfoCard />
        <form class="input-form" @submit.prevent="$emit('search')">
            <input type="text" placeholder="輸入關鍵字" :value="state.searchInput" @input="handleSearchInput" />
            <button type="submit" class="button">搜尋</button>
        </form>
    </template>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import InfoCard from './InfoCard.vue'
import type { AppState } from '../composables/useGooMapReviewSnatcher'

interface Props {
    state: AppState
}

const props = defineProps<Props>()

const emit = defineEmits<{
    'search': []
    'fetch-reviews': []
    'update:search-input': [value: string]
    'update:selected-store': [store: any]
    'update:pages-to-fetch': [pages: number]
}>()

// 計算選中店家的索引
const selectedStoreIndex = computed({
    get: () => {
        if (!props.state.storeData || props.state.storeData.length === 0) return 0
        if (!props.state.selectedStore) return 0
        const index = props.state.storeData.findIndex(store =>
            store && store.ID === props.state.selectedStore?.ID
        )
        return index >= 0 ? index : 0
    },
    set: (index: number) => {
        if (index >= 0 && index < props.state.storeData.length) {
            emit('update:selected-store', props.state.storeData[index])
        }
    }
})

// 處理搜尋輸入
const handleSearchInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit('update:search-input', target.value)
}

// 處理頁數輸入
const handlePagesInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    const pages = parseInt(target.value) || 0
    emit('update:pages-to-fetch', pages)
}
</script>

<style scoped>
.input-form {
    min-height: 100px;
    width: 500px;
    max-width: 90vw;
    padding: 20px;
    background-color: #70798c;
    border-radius: 20px;
    display: flex;
    justify-items: center;
    align-items: center;
}

.chose-store {
    flex-direction: column;
    align-items: start;
}

.store-select-box {
    width: 100%;
    margin-bottom: 15px;
}

.store-select-box label {
    display: block;
    margin-bottom: 5px;
    color: white;
    font-weight: bold;
}

.store-select {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
}

.pages-box {
    width: 100%;
    margin-bottom: 15px;
}

.pages-box label {
    display: block;
    margin-bottom: 5px;
    color: white;
    font-weight: bold;
    font-size: 14px;
}

.pages-box input {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
}

.input-form input[type="text"] {
    flex: 1;
    padding: 12px;
    border: none;
    border-radius: 10px;
    margin-right: 10px;
    font-size: 16px;
}

.button {
    padding: 12px 24px;
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #34495e;
}

.button:active {
    transform: translateY(1px);
}
</style>

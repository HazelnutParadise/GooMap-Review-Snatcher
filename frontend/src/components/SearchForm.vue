<template>
    <!-- 已有店家資料時顯示選擇表單 -->
    <form v-if="appState.storeData.value.length > 0" class="input-form chose-store"
        @submit.prevent="$emit('fetch-reviews')">
        <div class="store-select-box">
            <label for="store">選擇店家</label>
            <select v-model="selectedStoreIndex" class="store-select">
                <option v-for="(store, index) in appState.storeData.value" :key="store.ID" :value="index">
                    {{ store.Name }}
                </option>
            </select>
        </div>
        <div class="pages-box">
            <label for="pages">輸入頁數，0代表全部（一頁10筆）</label>
            <input type="number" inputmode="numeric" min="0" name="pages" placeholder="輸入頁數" v-model="pagesToFetch" />
        </div>
        <button type="submit" class="button">確定</button>
    </form>

    <!-- 初始搜尋表單 -->
    <template v-else>
        <InfoCard />
        <form class="input-form" @submit.prevent="$emit('search')">
            <input type="text" placeholder="輸入關鍵字" v-model="searchInput" />
            <button type="submit" class="button">搜尋</button>
        </form>
    </template>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import InfoCard from './InfoCard.vue'
import type { useGooMapReviewSnatcher } from '../composables/useGooMapReviewSnatcher'

interface Props {
    appState: ReturnType<typeof useGooMapReviewSnatcher>
}

const props = defineProps<Props>()

defineEmits<{
    'search': []
    'fetch-reviews': []
}>()

// 計算選中店家的索引
const selectedStoreIndex = computed({
    get: () => {
        if (!props.appState.storeData.value || props.appState.storeData.value.length === 0) return 0
        if (!props.appState.selectedStore.value) return 0
        const index = props.appState.storeData.value.findIndex(store =>
            store && store.ID === props.appState.selectedStore.value?.ID
        )
        return index >= 0 ? index : 0
    },
    set: (index: number) => {
        if (index >= 0 && index < props.appState.storeData.value.length) {
            props.appState.selectedStore.value = props.appState.storeData.value[index]
        }
    }
})

// 搜尋輸入的雙向綁定
const searchInput = computed({
    get: () => props.appState.searchInput.value,
    set: (value: string) => props.appState.searchInput.value = value
})

// 頁數輸入的雙向綁定
const pagesToFetch = computed({
    get: () => props.appState.pagesToFetch.value,
    set: (value: string | number) => {
        const pages = typeof value === 'string' ? parseInt(value) || 0 : value
        props.appState.pagesToFetch.value = pages
    }
})
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

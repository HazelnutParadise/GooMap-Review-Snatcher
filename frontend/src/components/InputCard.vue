<template>
    <form v-if="props.storeData && props.storeData.length > 0" ref="form" class="input-form chose-store"
        @submit.prevent="props.handleGetReview">
        <div class="store-select-box">
            <label for="store">選擇店家</label>
            <select v-model="selectedStoreIndex" class="store-select">
                <option v-for="(store, index) in props.storeData" :key="store.ID" :value="index">
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

    <template v-else>
        <InfoCard />
        <form ref="form2" class="input-form" @submit.prevent="props.handleSearch">
            <input type="text" placeholder="輸入關鍵字" v-model="searchInputStr" />
            <button type="submit" class="button">搜尋</button>
        </form>
    </template>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import InfoCard from './InfoCard.vue'

interface Props {
    searchInputStr: string
    selectedStore: any
    pagesToFetch: number
    handleSearch: () => void
    handleGetReview: () => void
    storeData?: any[]
}

const props = withDefaults(defineProps<Props>(), {
    storeData: () => []
})

const emit = defineEmits<{
    'update:searchInputStr': [value: string]
    'update:selectedStore': [value: any]
    'update:storeData': [value: any[]]
    'update:pagesToFetch': [value: number]
}>()

const form = ref<HTMLFormElement>()
const form2 = ref<HTMLFormElement>()

const selectedStoreIndex = computed({
    get: () => {
        if (!props.storeData || props.storeData.length === 0) return 0
        if (!props.selectedStore) return 0
        const index = props.storeData.findIndex(store => store && store.ID === props.selectedStore?.ID)
        return index >= 0 ? index : 0
    },
    set: (index: number) => {
        if (index >= 0 && index < props.storeData.length) {
            emit('update:selectedStore', props.storeData[index])
        }
    }
})

// 搜尋輸入的雙向綁定
const searchInputStr = computed({
    get: () => props.searchInputStr,
    set: (value: string) => emit('update:searchInputStr', value)
})

// 頁數輸入的雙向綁定
const pagesToFetch = computed({
    get: () => props.pagesToFetch,
    set: (value: string | number) => {
        const pages = typeof value === 'string' ? parseInt(value) || 0 : value
        emit('update:pagesToFetch', pages)
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

input[type="text"] {
    height: 40px;
    width: 80%;
    border-radius: 15px;
    border: none;
    padding: 5px;
    margin-right: 10px;
}

input[type="text"]:focus {
    border: 3px solid #0a0903;
}

input[type="number"] {
    height: 40px;
    width: 100%;
    border-radius: 15px;
    border: none;
    padding: 5px;
    margin-right: 10px;
}

button {
    height: 40px;
    width: 20%;
    border-radius: 15px;
    border: none;
    background-color: #0a0903;
    color: white;
    font-size: 1rem;
    cursor: pointer;
}

.button:hover {
    background-color: #f1f1f1;
    color: #0a0903;
}

.store-select {
    height: 40px;
    width: 100%;
    border-radius: 15px;
    border: none;
    padding: 5px;
    margin-right: 10px;
}

.store-select-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}

.pages-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}

label {
    font-weight: 500;
    font-size: large;
    color: white;
    margin-bottom: 5px;
}
</style>

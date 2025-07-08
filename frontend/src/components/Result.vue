<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Redirecting from './Redirecting.vue'

interface Props {
    selectedStore: any
    reviews: any[]
    download: (type: string) => void
    handleReset: () => void
}

const props = defineProps<Props>()

const emit = defineEmits<{
    'update:reviews': [value: any[]]
}>()

const goMining = ref(false)

const mining = async (openNewPage: boolean) => {
    goMining.value = true
    const reviewContent = props.reviews.map((review) => review.content)
    const reviewRating = props.reviews.map((review) => review.rating)
    let dataUUID = ""

    const res = await fetch("/api/review-mining", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            storeName: props.selectedStore.Name,
            reviews: reviewContent,
            ratings: reviewRating,
        }),
    })
    if (res.ok) {
        const data = await res.json()
        dataUUID = data.dataUUID
    } else {
        console.error("Error:", res.statusText)
        alert("無法使用 StoreCoach 探勘")
        goMining.value = false
        return
    }
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    const url = `https://storecoach.hazelnut-paradise.com/review-mining/${dataUUID}`
    openNewPage && !isSafari
        ? window.open(url, "_blank")
        : window.open(url, "_self")

    if (openNewPage && !isSafari) goMining.value = false
}

let queryParams: Record<string, string> = {}

onMounted(async () => {
    const params = new URLSearchParams(window.location.search)
    queryParams = {}
    params.forEach((value, key) => {
        queryParams[key] = value
    })
    console.log(queryParams)
    if (queryParams.mode && queryParams.mode === "storecoach") {
        await mining(false)
    }
})
</script>

<template>
    <Redirecting v-if="goMining" />
    <template v-else>
        <button class="reset-button button" @click="props.handleReset">
            查詢其他商家
        </button>
        <div class="review-box">
            <h3 class="store-name">{{ props.selectedStore.Name }}</h3>
            <button class="download-button button" @click="() => props.download('csv')">
                下載 CSV
            </button>
            <button class="download-button button" @click="() => props.download('json')">
                下載 JSON
            </button>
            <button class="mining-button button" @click="() => mining(true)">
                使用 <strong>StoreCoach</strong> 探勘
            </button>
            <div class="review-table-box">
                <table class="review-table" v-if="props.reviews && props.reviews.length > 0">
                    <thead>
                        <tr>
                            <th v-for="key in Object.keys(props.reviews[0] || {})" :key="key"
                                :style="key === 'content' ? 'min-width: 500px;' : key === 'reviewer_id' ? 'min-width: 400px;' : ''">
                                {{ key }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(review, index) in props.reviews" :key="review.id || index">
                            <td v-for="(value, valueIndex) in Object.values(review || {})" :key="valueIndex">
                                {{ value }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </template>
</template>

<style scoped>
.review-box {
    width: 80%;
}

.store-name {
    font-size: 1.5rem;
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
    min-width: 250px;
}

.button:hover {
    background-color: #f1f1f1;
    color: #0a0903;
}

.reset-button {
    height: 50px;
    width: 20%;
    border-radius: 15px;
    border: 2px solid #0a0903;
    background-color: #0a0903;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 1rem;
}

.download-button {
    height: 40px;
    width: 20%;
    border-radius: 15px;
    border: 1px solid #0a0903;
    background-color: #0a0903;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 1rem;
    margin-right: 10px;
}

.mining-button {
    height: 40px;
    width: 20%;
    border-radius: 15px;
    border: 1px solid #ffa400;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 1rem;
    background-color: #ffa400;
    color: black;
}

.mining-button:hover {
    background-color: rgb(255, 128, 0);
}
</style>

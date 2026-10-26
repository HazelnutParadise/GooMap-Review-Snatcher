<template>
    <div v-if="goMining"><Redirecting /></div>
    <section v-else class="result-container" aria-labelledby="store-title">
        <div class="result-heading">
            <div><p class="eyebrow">評論查詢結果</p><h2 id="store-title">{{ appState.selectedStore.value?.Name }}</h2>
                <p class="result-count">已取得 {{ number.format(appState.reviews.value.length) }} 則評論</p></div>
            <button class="reset-button" @click="$emit('reset')">查詢其他商家 <span aria-hidden="true">↗</span></button>
        </div>
        <div class="review-surface">
            <div class="export-toolbar">
                <div class="download-group"><button class="export-button" @click="$emit('download', 'csv')">下載 CSV</button>
                    <button class="export-button" @click="$emit('download', 'json')">下載 JSON</button>
                    <span class="download-note">下載包含全部評論</span></div>
                <button class="mining-button" @click="handleMineReviews(true)">使用 <strong>StoreCoach</strong> 探勘 <span aria-hidden="true">↗</span></button>
            </div>
            <div class="filter-toolbar">
                <label class="search-field">搜尋評論<input v-model="query" type="search" placeholder="評論內容或評論者" /></label>
                <label class="rating-field">評分<select v-model="rating"><option :value="null">全部評分</option><option v-for="score in [5, 4, 3, 2, 1]" :key="score" :value="score">{{ score }} 星</option></select></label>
                <p class="match-count" role="status">{{ number.format(filtered.length) }} 則符合條件</p>
            </div>
            <div v-if="!filtered.length" class="empty-state"><h3>沒有符合條件的評論</h3><p>試試其他關鍵字或評分。</p><button class="export-button" @click="clearFilters">清除篩選條件</button></div>
            <div v-else ref="tableScroll" class="table-scroll" tabindex="0" aria-label="評論列表，可捲動閱讀">
                <table class="review-table" role="table" aria-label="商家評論">
                    <colgroup><col class="reviewer-col" /><col class="rating-col" /><col /><col class="date-col" /></colgroup>
                    <thead role="rowgroup"><tr role="row"><th scope="col" role="columnheader">評論者</th><th scope="col" role="columnheader">評分</th><th scope="col" role="columnheader">評論內容</th><th scope="col" role="columnheader">日期</th></tr></thead>
                    <tbody role="rowgroup"><tr v-for="review in view.reviews" :key="review.review_id" role="row">
                        <td class="reviewer-cell" role="cell"><span class="reviewer-name">{{ review.reviewer || '未提供姓名' }}</span><span class="reviewer-meta"><span>{{ number.format(review.reviewer_review_count) }} 則評論</span><span>{{ number.format(review.reviewer_photo_count) }} 張相片</span></span></td>
                        <td class="rating-cell" role="cell"><span class="rating-value" :aria-label="`${review.rating} 分，滿分 5 分`"><span class="star" aria-hidden="true">★</span> {{ review.rating }}<span class="rating-max" aria-hidden="true"> / 5</span></span></td>
                        <td class="content-cell" role="cell"><p v-if="review.content.trim()" :id="`content-${review.review_id}`" class="review-content" :class="{ clamped: isLong(review.content) && !expanded.has(review.review_id) }">{{ review.content }}</p><p v-else class="no-content">這則評論沒有文字內容</p>
                            <button v-if="isLong(review.content)" class="text-button" :aria-expanded="expanded.has(review.review_id)" :aria-controls="`content-${review.review_id}`" @click="toggleContent(review.review_id)">{{ expanded.has(review.review_id) ? '收合全文' : '閱讀全文' }}</button>
                            <details class="review-details"><summary>詳細資料</summary><dl><dt>評論識別碼</dt><dd>{{ review.review_id || '未提供' }}</dd><dt>評論者識別碼</dt><dd>{{ review.reviewer_id || '未提供' }}</dd><dt>語言</dt><dd>{{ review.language || '未提供' }}</dd><dt>原始時間</dt><dd>{{ review.review_time || '未提供' }}</dd></dl></details>
                        </td>
                        <td class="date-cell" role="cell"><span class="mobile-label">評論日期</span><time :datetime="review.review_date || undefined">{{ formatReviewDate(review) }}</time></td>
                    </tr></tbody>
                </table>
            </div>
            <nav class="pagination" aria-label="評論分頁"><p role="status">第 {{ number.format(view.start) }}–{{ number.format(view.end) }} 則，共 {{ number.format(filtered.length) }} 則</p>
                <div><button :disabled="view.page === 1" @click="page = view.page - 1">上一頁</button><span class="page-number">{{ view.page }} / {{ view.totalPages }}</span><button :disabled="view.page === view.totalPages" @click="page = view.page + 1">下一頁</button></div>
            </nav>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { filterReviews, getReviewPage, formatReviewDate } from '../utils/reviewTable'
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

// 儲存事件監聽器的引用，用於清理
let focusHandler: (() => void) | null = null
let timeoutId: number | null = null

// 處理探勘評論 - 使用 composable 中的方法
const handleMineReviews = async (openNewPage: boolean) => {
    goMining.value = true
    try {
        await props.appState.mineReviews(openNewPage)

        if (openNewPage) {
            // 如果開新頁，監聽窗口焦點變化來檢測重定向完成
            focusHandler = () => {
                // 延遲一小段時間再關閉，確保重定向已完成
                setTimeout(() => {
                    goMining.value = false
                }, 500)
                if (focusHandler) {
                    window.removeEventListener('focus', focusHandler)
                    focusHandler = null
                }
            }

            // 監聽窗口重新獲得焦點
            window.addEventListener('focus', focusHandler)

            // 備案：3秒後自動關閉 redirecting 畫面
            timeoutId = window.setTimeout(() => {
                goMining.value = false
                if (focusHandler) {
                    window.removeEventListener('focus', focusHandler)
                    focusHandler = null
                }
            }, 3000)
        }
    } catch (error) {
        console.error("Mining error:", error)
        alert("無法使用 StoreCoach 探勘")
        goMining.value = false
    }
}

// 檢查 URL 參數，如果有 mode=storecoach 則自動執行探勘
onMounted(async () => {
    window.scrollTo(0, 0)
    const params = new URLSearchParams(window.location.search)
    const queryParams = Object.fromEntries(params.entries())
    console.log(queryParams)

    if (queryParams.mode && queryParams.mode === "storecoach") {
        await handleMineReviews(false)
    }
})

// 組件卸載時清理事件監聽器
onUnmounted(() => {
    if (focusHandler) {
        window.removeEventListener('focus', focusHandler)
        focusHandler = null
    }
    if (timeoutId) {
        window.clearTimeout(timeoutId)
        timeoutId = null
    }
})

const query = ref('')
const rating = ref<number | null>(null)
const page = ref(1)
const tableScroll = ref<HTMLDivElement | null>(null)
const expanded = ref(new Set<string>())
const number = new Intl.NumberFormat('zh-TW')
const filtered = computed(() => filterReviews(props.appState.reviews.value, query.value, rating.value))
const view = computed(() => getReviewPage(filtered.value, page.value))
watch([query, rating, () => props.appState.reviews.value], () => { page.value = 1; expanded.value = new Set() })
watch([page, query, rating], () => tableScroll.value?.scrollTo(0, 0))
const clearFilters = () => { query.value = ''; rating.value = null }
const isLong = (content: string) => content.length > 160 || content.split('\n').length > 4
const toggleContent = (id: string) => {
    if (expanded.value.has(id)) expanded.value.delete(id)
    else expanded.value.add(id)
}
</script>

<style scoped>
.result-container {
    width:100%;
    max-width:1152px;
    padding:0 16px;
    margin:24px auto 48px;
    text-align:left;
    color:#2c3e50;
    color-scheme:light;
}

.result-heading {
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:24px;
    margin-bottom:24px;
}

.eyebrow {
    font-size:12px;
    font-weight:600;
    letter-spacing:.06em;
    margin:0 0 6px;
    color:#59687a;
}

h2 {
    font-size:26px;
    line-height:1.4;
    margin:0 0 6px;
    overflow-wrap:anywhere;
}

.result-count {
    margin:0;
    font-size:14px;
    color:#59687a;
}

button {
    font-size:14px;
    font-weight:600;
    border-radius:8px;
    min-height:40px;
    padding:9px 14px;
    white-space:nowrap;
    transition:background-color .15s;
}

button:focus-visible,input:focus-visible,select:focus-visible,summary:focus-visible {
    outline:3px solid #285c96;
    outline-offset:3px;
}

.reset-button {
    color:#2c3e50;
    background:transparent;
    border:1px solid #a9bbd2;
}

.reset-button:hover {
    background:#e7effb;
}

.review-surface {
    background:#fff;
    border:1px solid #dce4ed;
    border-radius:12px;
    box-shadow:0 6px 24px #2c3e5008;
    overflow:hidden;
}

.export-toolbar {
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:16px;
    padding:20px 24px;
    border-bottom:1px solid #dce4ed;
}

.download-group {
    display:flex;
    gap:8px;
    align-items:center;
    flex-wrap:wrap;
}

.export-button {
    background:#fff;
    color:#2c3e50;
    border:1px solid #b5c2d1;
}

.export-button:hover {
    background:#f4f7fb;
    border-color:#59687a;
}

.download-note {
    color:#59687a;
    font-size:12px;
    margin-left:8px;
}

.mining-button {
    background:#ffa400;
    color:#302100;
    border:1px solid #e59500;
}

.mining-button:hover {
    background:#f29c00;
    border-color:#b97a00;
}

.filter-toolbar {
    display:flex;
    gap:16px;
    align-items:flex-end;
    padding:20px 24px;
    background:#fff;
}

label {
    display:flex;
    flex-direction:column;
    gap:7px;
    font-size:12px;
    font-weight:600;
}

.search-field {
    flex:1;
    max-width:440px;
}

.rating-field {
    width:148px;
}

input,select {
    width:100%;
    min-height:42px;
    border:1px solid #b5c2d1;
    border-radius:8px;
    background:#fff;
    color:#2c3e50;
    font-size:14px;
    padding:10px 12px;
}

input::placeholder {
    color:#637286;
    font-weight:400;
}

.match-count {
    font-size:12px;
    color:#59687a;
    margin:0 0 12px auto;
    white-space:nowrap;
}

.table-scroll {
    max-height:680px;
    overflow:auto;
}

.review-table {
    border-collapse:separate;
    border-spacing:0;
    width:100%;
    table-layout:fixed;
    font-size:14px;
}

.reviewer-col {
    width:21%;
}

.rating-col {
    width:11%;
}

.date-col {
    width:15%;
}

th {
    text-align:left;
    padding:13px 24px;
    background:#f4f7fb;
    border-block:1px solid #dce4ed;
    font-size:12px;
    font-weight:600;
    position:sticky;
    top:0;
    z-index:1;
}

td {
    padding:24px;
    vertical-align:top;
    border-bottom:1px solid #e7ecf2;
    overflow-wrap:anywhere;
}

.review-table tbody tr:last-child td {
    border-bottom:0;
}

.review-table tbody tr:hover {
    background:#fafcfe;
}

.reviewer-name {
    display:block;
    font-weight:600;
    margin-bottom:7px;
    line-height:1.5;
}

.reviewer-meta {
    display:flex;
    flex-direction:column;
    font-size:12px;
    color:#59687a;
    line-height:1.8;
}

.rating-value {
    white-space:nowrap;
    font-weight:700;
}

.star {
    color:#986000;
}

.rating-max {
    color:#637286;
    font-size:11px;
    font-weight:400;
}

.review-content {
    margin:0;
    white-space:pre-wrap;
    line-height:1.8;
    overflow-wrap:anywhere;
}

.clamped {
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:4;
    overflow:hidden;
}

.no-content {
    color:#637286;
    margin:0;
    font-size:13px;
}

.text-button {
    display:block;
    background:transparent;
    border:0;
    color:#285c96;
    padding:6px 0;
    min-height:36px;
    font-size:12px;
}

.text-button:hover {
    text-decoration:underline;
}

.review-details {
    margin-top:12px;
    color:#59687a;
    font-size:12px;
}

summary {
    cursor:pointer;
    width:fit-content;
    padding:4px 0;
}

summary:hover {
    color:#285c96;
}

dl {
    margin:10px 0 0;
    padding:12px;
    background:#f4f7fb;
    border-radius:6px;
}

dt {
    font-weight:600;
}

dd {
    margin:2px 0 10px;
    overflow-wrap:anywhere;
}

dd:last-child {
    margin-bottom:0;
}

.date-cell {
    font-size:12px;
    color:#59687a;
    white-space:nowrap;
}

.mobile-label {
    display:none;
}

.pagination {
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:16px;
    padding:16px 24px;
    border-top:1px solid #dce4ed;
    font-size:12px;
    color:#59687a;
}

.pagination p {
    margin:0;
}

.pagination>div {
    display:flex;
    gap:12px;
    align-items:center;
}

.pagination button {
    font-size:12px;
    min-height:36px;
    padding:7px 12px;
    background:#fff;
    color:#2c3e50;
    border:1px solid #b5c2d1;
}

.pagination button:disabled {
    color:#798696;
    background:#f4f7fb;
    border-color:#e7ecf2;
    cursor:default;
}

.page-number {
    min-width:36px;
    text-align:center;
}

.empty-state {
    padding:56px 24px;
    text-align:center;
    border-top:1px solid #dce4ed;
}

.empty-state h3 {
    font-size:18px;
    margin:0 0 8px;
}

.empty-state p {
    font-size:14px;
    color:#59687a;
    margin:0 0 20px;
}

@media(max-width:900px) {
    th,td {
        padding-left:16px;
        padding-right:16px;
    }

    .rating-col {
        width:13%;
    }

    .date-col {
        width:17%;
    }

    .download-note {
        width:100%;
        margin:3px 0 0;
    }

}

@media(max-width:767px) {
    .result-container {
        margin-top:20px;
    }

    .result-heading {
        align-items:flex-start;
        flex-direction:column;
        gap:12px;
        margin-bottom:20px;
    }

    h2 {
        font-size:24px;
    }

    .reset-button {
        font-size:12px;
        min-height:36px;
        padding:6px 10px;
    }

    .export-toolbar {
        flex-direction:column;
        align-items:stretch;
        padding:16px;
    }

    .download-group {
        display:grid;
        grid-template-columns:1fr 1fr;
    }

    .download-note {
        grid-column:1/-1;
        text-align:center;
        margin-top:4px;
    }

    .mining-button {
        width:100%;
    }

    .filter-toolbar {
        flex-wrap:wrap;
        padding:16px;
        gap:12px;
    }

    .search-field {
        flex-basis:100%;
        max-width:none;
    }

    .rating-field {
        width:148px;
    }

    .match-count {
        margin:0 0 12px auto;
    }

    .table-scroll {
        max-height:none;
        overflow:visible;
    }

    .review-table,.review-table tbody {
        display:block;
    }

    .review-table colgroup {
        display:none;
    }

    .review-table thead {
        position:absolute;
        width:1px;
        height:1px;
        padding:0;
        overflow:hidden;
        clip-path:inset(50%);
        white-space:nowrap;
    }

    .review-table tr {
        display:grid;
        grid-template-columns:minmax(0,1fr) auto;
        padding:20px 16px;
        border-top:1px solid #dce4ed;
        gap:14px 12px;
    }

    .review-table td {
        display:block;
        border:0;
        padding:0;
    }

    .reviewer-cell {
        grid-column:1;
        grid-row:1;
    }

    .reviewer-name {
        margin-bottom:4px;
    }

    .reviewer-meta {
        flex-direction:row;
        gap:8px;
        flex-wrap:wrap;
    }

    .rating-cell {
        grid-column:2;
        grid-row:1;
    }

    .content-cell {
        grid-column:1/-1;
        grid-row:2;
    }

    .date-cell {
        grid-column:1/-1;
        grid-row:3;
    }

    .mobile-label {
        display:inline;
        margin-right:8px;
    }

    .pagination {
        flex-direction:column;
        padding:16px;
        gap:12px;
    }

    .pagination>div {
        width:100%;
        justify-content:space-between;
    }

}

@media(prefers-reduced-motion:reduce) {
    button {
        transition:none;
    }

}
</style>

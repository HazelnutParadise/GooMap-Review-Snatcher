<script setup lang="ts">
import { onMounted } from 'vue'
import Layout from './layouts/Layout.vue'
import Loader from './components/Loader.vue'
import SearchForm from './components/SearchForm.vue'
import ReviewResult from './components/ReviewResult.vue'
import { useGooMapReviewSnatcher } from './composables/useGooMapReviewSnatcher'

// 應用程式配置
const title: string = '估咩評論小扒手🫳'
const subtitle: string = 'GooMap Review Snatcher'

// 使用集中的狀態管理
const appState = useGooMapReviewSnatcher()

// 事件處理器
const handleSearch = async () => {
  try {
    await appState.searchStores()
  } catch (error) {
    alert(error instanceof Error ? error.message : '搜尋失敗')
  }
}

const handleFetchReviews = async () => {
  try {
    await appState.fetchReviews()
  } catch (error) {
    alert(error instanceof Error ? error.message : '取得評論失敗')
  }
}

const handleDownload = (type: 'csv' | 'json') => {
  try {
    appState.downloadReviews(type)
  } catch (error) {
    alert(error instanceof Error ? error.message : '下載失敗')
  }
}

const handleMine = async (openNewPage: boolean = true) => {
  try {
    await appState.mineReviews(openNewPage)
  } catch (error) {
    alert(error instanceof Error ? error.message : '無法使用 StoreCoach 探勘')
  }
}

const handleReset = () => {
  appState.reset()
}

// 組件載入時設定頁面標題
onMounted(() => {
  document.title = `${title} - 榛果繽紛樂`
})
</script>

<template>
  <Layout>
    <div class="container">
      <img src="https://src.hazelnut-paradise.com/GooMapReviewSnatcher.png" alt="GooMapReviewSnatcher"
        style="width: 100%; max-width: 150px;" />
      <div class="title-box">
        <h1 class="title">{{ title }}</h1>
        <h2 class="subtitle">{{ subtitle }}</h2>
      </div>

      <!-- 載入狀態 -->
      <Loader v-if="appState.state.value.isLoading" />

      <!-- 搜尋和選擇店家階段 -->
      <SearchForm v-else-if="!appState.hasReviews.value" :state="appState.state.value" @search="handleSearch"
        @fetch-reviews="handleFetchReviews" @update:search-input="appState.updateSearchInput"
        @update:selected-store="appState.updateSelectedStore" @update:pages-to-fetch="appState.updatePagesToFetch" />

      <!-- 顯示結果階段 -->
      <ReviewResult v-else :state="appState.state.value" @download="handleDownload" @mine="handleMine"
        @reset="handleReset" />
    </div>
  </Layout>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 20px;
  padding-bottom: 20px;
}

.title-box {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.title-box:hover {
  transform: scale(1.05);
}

.subtitle {
  font-size: 1.5rem;
  color: #0a0903;
  margin: 0;
}

@keyframes pop {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
</style>
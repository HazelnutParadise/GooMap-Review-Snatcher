<script setup lang="ts">
import { ref, onMounted } from 'vue'
import InputCard from './components/InputCard.vue'
import Loader from './components/Loader.vue'
import Result from './components/Result.vue'
import Layout from './layouts/Layout.vue'

// Props equivalent
interface Props {
  title?: string
  subtitle?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '估咩評論小扒手🫳',
  subtitle: 'GooMap Review Snatcher'
})

const searchStoreUrl = "/api/search"
const getReviewsUrl = "/api/reviews"

// Reactive state
const searchInputStr = ref("")
const selectedStore = ref<any>(null)
const pagesToFetch = ref(1)
const storeData = ref<any[]>([])
const reviews = ref<any[]>([])
const isLoading = ref(false)
const searchUUID = ref("")
const reviewUUID = ref("")

// 生成 UUID
const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      const r = (Math.random() * 16) | 0
      const v = c == "x" ? r : (r & 0x3) | 0x8
      return v.toString(16)
    }
  )
}

const handleReset = () => {
  searchInputStr.value = ""
  selectedStore.value = null
  pagesToFetch.value = 1
  storeData.value = []
  reviews.value = []
  searchUUID.value = ""
  reviewUUID.value = ""
}

const handleSearch = async () => {
  isLoading.value = true
  console.log(searchInputStr.value)
  if (searchInputStr.value === "") {
    alert("請輸入搜尋關鍵字")
    isLoading.value = false
    return
  }

  // 生成新的 UUID
  searchUUID.value = generateUUID()

  try {
    await pollForSearchResults()
  } catch (e) {
    console.error(e)
    alert("無法取得搜尋結果")
    isLoading.value = false
  }
}

const pollForSearchResults = async () => {
  try {
    const res = await fetch(
      searchStoreUrl + `?storeName=${searchInputStr.value}&uuid=${searchUUID.value}`
    )
    if (!res.ok) {
      console.error("Error:", res.statusText)
      alert("無法取得搜尋結果")
      isLoading.value = false
      return
    }

    const data = await res.json()
    console.log("Search response:", data)

    // 如果收到空陣列，表示正在查詢中，需要輪詢
    if (Array.isArray(data) && data.length === 0) {
      setTimeout(pollForSearchResults, 1000) // 1秒後重新查詢
      return
    }

    // 如果收到資料，表示查詢完成
    if (Array.isArray(data) && data.length > 0) {
      storeData.value = data
      if (storeData.value.length > 0) {
        selectedStore.value = storeData.value[0]
      }
      isLoading.value = false
      return
    }

    // 如果收到 null 或其他錯誤，表示查詢失敗
    alert("搜尋失敗")
    isLoading.value = false
  } catch (e) {
    console.error(e)
    alert("無法取得搜尋結果")
    isLoading.value = false
  }
}

const handleGetReview = async () => {
  isLoading.value = true
  console.log(selectedStore.value)
  if (!selectedStore.value || selectedStore.value === "") {
    alert("請選擇店家")
    isLoading.value = false
    return
  }

  // 生成新的 UUID
  reviewUUID.value = generateUUID()

  try {
    await pollForReviewResults()
  } catch (e) {
    console.error(e)
    alert("無法取得評論")
    isLoading.value = false
  }
}

const pollForReviewResults = async () => {
  try {
    const res = await fetch(
      getReviewsUrl +
      `?storeID=${selectedStore.value.ID}&pages=${pagesToFetch.value}&uuid=${reviewUUID.value}`
    )
    if (!res.ok) {
      console.error("Error:", res.statusText)
      alert("無法取得評論")
      isLoading.value = false
      return
    }

    const data = await res.json()
    console.log("Review response:", data)

    // 如果收到 null，表示正在查詢中，需要輪詢
    if (data === null) {
      setTimeout(pollForReviewResults, 1000) // 1秒後重新查詢
      return
    }

    // 如果收到資料，表示查詢完成
    if (data && typeof data === "object") {
      reviews.value = data
      isLoading.value = false
      return
    }

    // 其他情況表示查詢失敗
    alert("取得評論失敗")
    isLoading.value = false
  } catch (e) {
    console.error(e)
    alert("無法取得評論")
    isLoading.value = false
  }
}

const download = (type: string) => {
  const a = document.createElement("a")
  let url = ""
  switch (type) {
    case "csv":
      // 添加 BOM 標記
      const BOM = new Uint8Array([0xef, 0xbb, 0xbf])
      // 建立 CSV 內容，加入標題列
      const headers = Object.keys(reviews.value[0]).join(",")
      const rows = reviews.value.map((row: any) =>
        Object.values(row)
          .map((value: any) => {
            // 處理數值、字串中的特殊字元
            if (typeof value === "string") {
              // 如果內容包含逗號、換行或雙引號，就用雙引號包起來
              if (
                value.includes(",") ||
                value.includes("\n") ||
                value.includes('"')
              ) {
                return `"${value.replace(/"/g, '""')}"`
              }
            }
            return value
          })
          .join(",")
      )
      const csvContent = headers + "\n" + rows.join("\n")

      // 合併 BOM 和 CSV 內容
      const csvBlob = new Blob([BOM, csvContent], {
        type: "text/csv;charset=utf-8",
      })
      url = window.URL.createObjectURL(csvBlob)

      a.href = url
      a.download = `${selectedStore.value.Name}.csv`
      a.click()
      break
    case "json":
      const json = JSON.stringify(reviews.value, null, 2)
      const jsonBlob = new Blob([json], {
        type: "application/json;charset=utf-8",
      })
      url = window.URL.createObjectURL(jsonBlob)
      a.href = url
      a.download = `${selectedStore.value.Name}.json`
      a.click()
      break
    default:
      break
  }
  window.URL.revokeObjectURL(url)
}

onMounted(async () => {
  // Set document title
  document.title = `${props.title} - 榛果繽紛樂`
  // getNavbar() - 原本的 Svelte 代碼中有這個函數，但在提供的代碼中沒有定義
})
</script>

<template>
  <Layout>
    <div class="container">
      <img src="https://src.hazelnut-paradise.com/GooMapReviewSnatcher.png" alt="GooMapReviewSnatcher"
        style="width: 100%; max-width: 150px;" />
      <div class="title-box">
        <h1 class="title">{{ props.title }}</h1>
        <h2 class="subtitle">{{ props.subtitle }}</h2>
      </div>
      <Loader v-if="isLoading" />
      <InputCard v-else-if="reviews.length === 0" :search-input-str="searchInputStr" :selected-store="selectedStore"
        :store-data="storeData" :pages-to-fetch="pagesToFetch" :handle-search="handleSearch"
        :handle-get-review="handleGetReview" @update:search-input-str="searchInputStr = $event"
        @update:selected-store="selectedStore = $event" @update:store-data="storeData = $event"
        @update:pages-to-fetch="pagesToFetch = $event" />
      <Result v-else :reviews="reviews" :selected-store="selectedStore" :download="download" :handle-reset="handleReset"
        @update:reviews="reviews = $event" />
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
  /* background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); */
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

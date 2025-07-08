<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import OneAd from '../components/OneAd.vue'

let bannerContainer: HTMLElement | null = null
let observer: MutationObserver | null = null

onMounted(() => {
    // 確保 #Pistachio-Announcement 存在，並防止 Vue 移除它
    bannerContainer = document.getElementById("Pistachio-Announcement")

    if (bannerContainer) {
        bannerContainer.setAttribute("data-preserve", "true") // 標記這個元素不應該被修改
    }

    // 監聽 #Pistachio-Announcement 是否有變更（Workers 插入的內容）
    observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            if (mutation.type === "childList") {
                console.log("Workers 插入的橫幅變更偵測到:", mutation)
            }
        }
    })

    if (bannerContainer) {
        observer.observe(bannerContainer, { childList: true, subtree: true })
    }
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})
</script>

<template>
    <!-- 確保 Vue 不會優化掉 #Pistachio-Announcement -->
    <div id="Pistachio-Announcement" ref="bannerContainer" style="z-index: 100;">
        <span style="display: none;">&nbsp;</span> <!-- 避免 Vue 移除這個 div -->
    </div>

    <div id="navbar-placeholder" style="min-height: 50px; z-index: 100;"></div>
    <slot></slot>
    <!-- <OneAd /> -->
    <footer>
        2025 - 榛果繽紛樂
    </footer>
</template>

<style scoped>
footer {
    width: 100vw;
    height: 50px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

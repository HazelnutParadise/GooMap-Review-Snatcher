<script setup lang="ts">
import { onMounted, nextTick, ref } from 'vue'

const adContainer = ref<HTMLDivElement>()

onMounted(async () => {
    // 等待 DOM 完全渲染
    await nextTick()

    const custom_call = (params: any) => {
        if (params.hasAd) {
            console.log("TD has AD")
        } else {
            console.log("TD AD Empty")
        }
    }

    const ONEAD_TEXT = {
        pub: {
            uid: "2000181",
            slotobj: adContainer.value,
            player_mode: "text-drive",
            queryAdCallback: custom_call,
        },
    }

        // 確保全域變數存在
        ; (window as any).ONEAD_text_pubs = (window as any).ONEAD_text_pubs || []
        ; (window as any).ONEAD_text_pubs.push(ONEAD_TEXT)

    // 動態載入廣告腳本
    const script = document.createElement("script")
    script.src = "https://ad-specs.guoshipartners.com/static/js/ad-serv.min.js"
    script.async = true
    document.body.appendChild(script)
})
</script>

<template>
    <div id="div-onead-draft" ref="adContainer"></div>
</template>

<style scoped>
/* No additional styles needed */
</style>

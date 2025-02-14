<script>
    import { onMount, onDestroy } from "svelte";
    import OneAd from "../components/OneAd.svelte";

    let bannerContainer;

    onMount(() => {
        // 確保 #Pistachio-Announcement 存在，並防止 Svelte 移除它
        bannerContainer = document.getElementById("Pistachio-Announcement");

        if (bannerContainer) {
            bannerContainer.setAttribute("data-preserve", "true"); // 標記這個元素不應該被修改
        }

        // 監聽 #Pistachio-Announcement 是否有變更（Workers 插入的內容）
        const observer = new MutationObserver((mutations) => {
            for (let mutation of mutations) {
                if (mutation.type === "childList") {
                    console.log("Workers 插入的橫幅變更偵測到:", mutation);
                }
            }
        });

        if (bannerContainer) {
            observer.observe(bannerContainer, { childList: true, subtree: true });
        }

        return () => observer.disconnect(); // 確保組件卸載時停止監聽
    });
</script>

<!-- 確保 Svelte 不會優化掉 #Pistachio-Announcement -->
<div id="Pistachio-Announcement" bind:this={bannerContainer} style="z-index: 100;">
    <span style="display: none;">&nbsp;</span> <!-- 避免 Svelte 移除這個 div -->
</div>

<div id="navbar-placeholder" style="min-height: 50px; z-index: 100;"></div>
<slot></slot>
<OneAd />
<footer>
    2025 - 榛果繽紛樂
</footer>

<style>
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

<div id="Pistachio-Announcement" style="z-index: 100;"></div>
<div id="navbar-placeholder" style="min-height: 50px; z-index: 100;"></div>
<slot></slot>
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

<script>
    import { onMount, onDestroy } from "svelte";

    let bannerContainer;

    onMount(() => {
        // 監聽 `#Pistachio-Announcement` 是否有變化
        const observer = new MutationObserver((mutations) => {
            for (let mutation of mutations) {
                if (mutation.type === "childList") {
                    console.log("Workers 插入的橫幅變更偵測到:", mutation);
                }
            }
        });

        // 監聽 `#Pistachio-Announcement`
        bannerContainer = document.getElementById("Pistachio-Announcement");
        if (bannerContainer) {
            observer.observe(bannerContainer, { childList: true, subtree: true });
        }

        return () => observer.disconnect(); // 確保組件卸載時停止監聽
    });
</script>

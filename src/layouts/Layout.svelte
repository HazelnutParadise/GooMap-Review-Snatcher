<div id="Pistachio-Announcement" bind:innerHTML={bannerHTML} bind:this={bannerContainer} contenteditable="true" style="z-index: 100;"></div>
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
    import { onMount, afterUpdate } from "svelte";
    let bannerContainer;
    let bannerHTML = "";
    let bannerContent = "";
    onMount(() => {
        const interval = setInterval(() => {
            if (bannerHTML !== "") {
                bannerContent = bannerHTML;
                console.log("got banner" + bannerHTML);
            }
        }, 1);
        return () => clearInterval(interval);
    });
    afterUpdate(() => {
        if (bannerHTML === "") {
            bannerHTML = bannerContent;
            console.log("set banner" + bannerContent);
        }

        if (bannerContent === "") {
            bannerContainer.style.display = "none";
        } else {
            bannerContainer.style.display = "block";
        }
    });
</script>

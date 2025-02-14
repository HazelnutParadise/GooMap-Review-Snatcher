<div id="Pistachio-Announcement" bind:this={bannerContainer}></div>
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
    import { onMount } from "svelte";
    let bannerContainer;
    let bannerContent = ""
    onMount(() => {
        if (bannerContainer.innerHTML === "") {
            bannerContainer.innerHTML = bannerContent;
        } else {
            bannerContent = bannerContainer.innerHTML;
        }
    });
</script>

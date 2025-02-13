<div id="navbar-placeholder" style="min-height: 50px; z-index: 100;"></div>
<div id="Pistachio-Announcement" bind:this={bannerBox}>公告橫幅</div>
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
    import { onMount } from 'svelte';
    let bannerBox;
    let announcement;
    onMount(()=>{
        bannerBox = document.getElementById('Pistachio-Announcement');
        if (bannerBox.innerHTML.trim() === '公告橫幅') {
            bannerBox.style.display = 'none';
        } else {
            bannerBox.style.display = 'block';
            announcement = bannerBox.innerHTML;
        }
    });

    $: {
        if (announcement) {
            bannerBox.innerHTML = announcement;
        }
    }
</script>
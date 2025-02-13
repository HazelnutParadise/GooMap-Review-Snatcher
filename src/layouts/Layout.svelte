<div id="navbar-placeholder" style="min-height: 50px; z-index: 100;"></div>
<div id="Pistachio-Announcement" bind:this={bannerBox}></div>
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
    onMount(() => {
        bannerBox = document.getElementById('Pistachio-Announcement');
        if (bannerBox.innerHTML.trim() === '') {
            bannerBox.style.display = 'none';
        } else {
            bannerBox.style.display = 'block';
            announcement = bannerBox.innerHTML;
        }

        // 使用 MutationObserver 監聽 bannerBox 內容變化
        const observer = new MutationObserver(() => {
            const closeButton = bannerBox.querySelector('#close-banner');
            if (closeButton) {
                closeButton.addEventListener('click', () => {
                    bannerBox.style.display = 'none';
                    announcement = '';
                });
            }
        });

        observer.observe(bannerBox, { childList: true, subtree: true });
    });

    $: { 
        if (announcement) {
            bannerBox.innerHTML = announcement;
        }
    }
</script>
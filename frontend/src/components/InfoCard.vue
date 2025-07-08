<script setup lang="ts">
// No script needed for this component
</script>

<template>
    <div class="info-card">
        <p>
            <strong>估咩評論小扒手</strong> 幫你輕鬆爬取 Google Maps 商家評論，<br />
            輸入店名立即開始吧！
        </p>
        <a href="https://github.com/HazelnutParadise/GooMap-Review-Snatcher" target="_blank">
            查看 GitHub
        </a>
    </div>
</template>

<style scoped>
p {
    margin: 0;
    margin-bottom: 10px;
}

.info-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 90vw;
    background-color: #70798c;
    border-radius: 20px;
    padding: 20px;
    color: white;
    margin-bottom: 20px;
    font-size: medium;
}

a {
    color: #d8dcff;
    text-decoration: underline;
    font-weight: bold;
}

a:hover {
    color: #ffa400;
}
</style>

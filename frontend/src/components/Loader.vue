<template>
    <div class="loader-container">
        <p>{{ loadingWord }}</p>
        <div class="loader"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const loadingWords = ['loading', 'loading.', 'loading..', 'loading...']
const loadingWord = ref(loadingWords[0])
let index = 1
let interval: number | null = null

onMounted(() => {
    interval = setInterval(() => {
        loadingWord.value = loadingWords[index]
        index = (index + 1) % loadingWords.length
    }, 500)
})

onUnmounted(() => {
    if (interval) {
        clearInterval(interval)
    }
})
</script>

<style scoped>
.loader-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100px;
}

.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

p {
    color: #333;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>

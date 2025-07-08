<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
</script>

<template>
    <Navbar />
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

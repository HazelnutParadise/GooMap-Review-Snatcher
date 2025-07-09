<template>
    <div
        style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: #D6E3F8; z-index: 9999;">
        <h1>正在轉移陣地</h1>
        <p>請稍等片刻...</p>
        <Loader />
    </div>
</template>

<script setup lang="ts">
import Loader from './Loader.vue'
</script>


<style scoped>
/* No additional styles needed */

h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 0.5rem;
}

p {
    font-size: 1.2rem;
    color: #666;
}
</style>

<template>
    <div ref="navbarPlaceholder" id="navbar-placeholder"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const navbarPlaceholder = ref<HTMLElement>()

const loadNavbar = () => {
    fetch('https://src.hazelnut-paradise.com/navbar.html?content-type=text/html', {
        method: "GET"
    })
        .then(response => response.text())
        .then(html => {
            if (navbarPlaceholder.value) {
                navbarPlaceholder.value.innerHTML = html;
            }
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
}

onMounted(() => {
    loadNavbar();
})
</script>
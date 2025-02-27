<template>
    <div>
        HomeView
    </div>
</template>

<script setup>
import { computed } from 'vue';

const newsState = computed(() => store.state.news);
const dataState = computed(() => store.state.data);


</script>

<style  scoped>

</style>
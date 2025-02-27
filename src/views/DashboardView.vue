<template>
    <div>
        DashboardView

        <button @click="sendAPI">sendAPi </button>
    </div>
</template>

<script setup>
import { inject } from 'vue'
const axios = inject('axios');
const ApiUrl = inject('apiUrl');

console.log(ApiUrl.Board.GET_NOTICE_LIST);
axios.get(`https://codingapple1.github.io/vue/more0.json`).then((res) => {
    console.log(res.data); 
});
</script>

<style  scoped>

</style>
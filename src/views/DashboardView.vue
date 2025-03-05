<template>
    <div>
        DashboardView

        <button @click="sendAPI">sendAPi </button>
        <InputText type="text" v-model="value" />
    </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import { inject, ref } from 'vue'
const axios = inject('$axios');
const ApiUrl = inject('apiUrl');
const value = ref('asdf');

console.log(ApiUrl.Board.GET_NOTICE_LIST);
axios.get(`https://codingapple1.github.io/vue/more0.json`).then((res) => {
    console.log(res.data); 
});
</script>

<style  scoped>

</style>
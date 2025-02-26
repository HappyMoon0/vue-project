<template>
  <header>

    <div></div>
    <div></div>
    <div class="card flex justify-center">
        <HeaderIcon :model="items"></HeaderIcon>
    </div>

  </header>
</template>

<script setup>
import HeaderIcon from '@/components/HeaderIcon.vue';
import { PrimeIcons } from '@primevue/core/api';

const items = [
    {
        label: 'File',
        items: [
            { label: 'New', icon: PrimeIcons.PLUS },
            { label: 'Open', icon: PrimeIcons.DOWNLOAD }
        ]
    }
]; 

</script>
<style scoped>

  header{
    width : 100vw;
    height: 60px;
    box-sizing: border-box;
    background-color: #999;
    border-bottom: 1px solid #999;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  header #right_btn_wrapper{

  }
</style>
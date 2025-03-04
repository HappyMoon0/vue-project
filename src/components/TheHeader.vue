<template>
  <header>
    <div id="btn_menu" @click="$emit('toggleMenu', isOpen = !isOpen)">
      <i class="pi pi-bars"style="font-size: 1.5rem"></i> 
    </div>  
    <div>
      <h1>title</h1>
    </div>
    <div id="btn_wrapper"> 
        <HeaderIcon :items="items"></HeaderIcon> 
    </div> 
  </header>
</template>

<script setup>
import HeaderIcon from '@/components/HeaderIcon.vue';
import { PrimeIcons } from '@primevue/core/api'; 
import { ref } from 'vue';
 
const items = [
     
    { label: 'Message', icon: PrimeIcons.ENVELOPE, path : '/message' },
    { label: 'Schedule', icon: PrimeIcons.CALENDAR, path : '/schedule' },
    { label: 'Homepage', icon: PrimeIcons.DESKTOP, path : '/homepage' },
    { label: 'Login', icon: PrimeIcons.SIGN_IN, path : '/login' },
    { label: 'Logout', icon: PrimeIcons.SIGN_OUT, path : '/logout' }
       
];
const isOpen = ref(true);  


</script>
<style scoped>

  header{
    width : 100vw;
    height: 60px;
    box-sizing: border-box;
    background-color: #ffffff;
    border-bottom: 1px solid #d6d5d5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    box-shadow: 0px -4px 8px;
  } 
  header #btn_menu{ 
    width: 80px;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  header #btn_wrapper{
    float: right;
    display: flex;
    flex-direction: row;
    height: inherit;
  }

</style>
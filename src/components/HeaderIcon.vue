<template>   
  <div class="header_icon" v-for="(item, index) in items" :key="index">
    <i class="pi" :class="item.icon" style="font-size: 1.6rem"></i>
    <label>{{ item.label }}</label>
  </div>
</template>

<script setup>  
import { defineProps } from 'vue'; 
const props = defineProps({
  items: {
    label: String,
    path : String,
    icon : String
  }
});
 

</script>

<style scoped>
  .header_icon{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-left : 1px solid #d6d5d5;
    padding: 0 20px;
    cursor: pointer;
    width: 80px;
    overflow: hidden;
    box-sizing: border-box; 
  }
  .header_icon:hover{
    background: #f1f1f1;
    transition: 0.2s all ease-in-out; 
  }
  .header_icon:last-child{
    border-right : 1px solid #d6d5d5;
  }
  .header_icon label{
    font-size: 12px;
  }
</style>
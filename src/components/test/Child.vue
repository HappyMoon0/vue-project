<template>
    <div class='child'>
      <p>ChildComponent</p>
      <p>prop1 : </p>
      {{prop1}}
      <p>prop2 : </p>
      {{prop2}}
    </div>
    <InjectComponent :prop1='prop1' />

    
  </template>
  
  <script setup>
  import InjectComponent from "@/components/test/Inject.vue"
  
  const props = defineProps({
    prop1:String,
    prop2: Number
  })
  
  
  
  </script>
  
  <style scoped>
  .child{
    background-color: bisque;
  }
  </style>
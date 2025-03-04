<template>
    <div class='inject'>
      <p>InjectComponent</p>
      <div>
        <p>prop1 : </p>
        <p>{{ prop1 }}</p>
        <p>prop2 : </p>
        <p>{{ prop2 }}</p>
      </div>
      <div>
        <p>inject1 : </p>
        <p>{{inject1}}</p>
        <p>inject2 : </p>
        <component :is="inject2"/>
        <p>inject3</p>
        <p>{{inject3}}</p>
      </div>
    </div>
  </template>
  <script setup lang='ts'>
import { inject } from 'vue';

  
  const props = defineProps({
    prop1:String,
    prop2:String
  })
  
  const inject1 = inject("provide1")
  const inject2 = inject("provide2")
  const inject3 = inject("provide3")
  
  </script>
  <style scoped>
  .inject{
    background-color: darkolivegreen;
  }
  </style>
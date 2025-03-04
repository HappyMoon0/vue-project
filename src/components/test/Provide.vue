<template>
    <div>
      <p>ProvideComponent</p>
      <button @click="prov3 += 1">click</button>
      <ChildComponent :prop1='prop1'/>
    </div>
  </template>
  
  <script setup>
import TestComponent from "@/components/test/TestComponent.vue";
import ChildComponent from "@/components/test/Child.vue";
import { provide, ref } from "vue";
  
  const prov1 = ref();
  const prov2 = ref();
  const prov3 = ref(1);
  const prop1 = "gun";
  
  provide("provide1", prov1)
  provide("provide2", prov2)
  provide("provide3", prov3)
  
  prov1.value = "gun3" 
  </script>
  
  <style scoped>
  
  </style>
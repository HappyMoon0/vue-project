<script setup>
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
import TheNav from '@/components/TheNav.vue';
</script>

<template> 
  <TheHeader></TheHeader>
  <div> 
    
    <TheNav></TheNav> 
    <RouterView></RouterView>
  </div> 
</template>

<style scoped>
 
.logo {
  display: block;
  margin: 0 auto 2rem;
}
 
</style>

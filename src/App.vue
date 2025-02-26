<template> 
  <TheHeader></TheHeader>
  <main>
    <aside >  
      <TheNav ></TheNav> 
    </aside> 
  
    <div id="container">
      <TheNavigation></TheNavigation>
      <RouterView></RouterView>
    </div>
  </main>
  
</template>
<script setup>
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
import TheNav from '@/components/TheNav.vue';
import TheNavigation from '@/components/TheNavigation.vue';
import { defineProps } from 'vue'; 
const props = defineProps({
  isOpen: Boolean
});
</script>


<style scoped>
 
.logo {
  display: block;
  margin: 0 auto 2rem;
}
main{
  display: flex;
  flex-direction: row;
}
main aside{
  width: 240px;
  background: #fff;
  border: 1px solid #d6d5d5;
  margin-top: 30px; 
  border-radius: 0 7px 7px 0;
  border-left: 0;
  
}
main #container{
  width: 100vw;
  margin: 30px;
  padding: 15px;
  border : 1px solid #d6d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  
  background-color: #fff;
}

 
</style>

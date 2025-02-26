<template> 
  <TheHeader></TheHeader>
  <main>
    <aside >  
      <Transition name="slide" mode="out-in">
        <TheNav></TheNav> 
      </Transition>
      
    </aside> 
  
    <div id="container">
      <TheNavigation></TheNavigation>
      <RouterView id="routerview"></RouterView>
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
 
  margin-top: 20px; 
  
  
}
main #container{
  width: 100vw;
  min-height: 500px;
  margin: 20px;
  padding: 15px;
  border : 1px solid #d6d5d5;
  box-sizing: border-box;
  border-radius: 5px; 
  background-color: #fff;
}
main #container #routerview{
  padding: 15px;
}

 
</style>

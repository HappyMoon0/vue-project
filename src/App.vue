<template> 
  <TheHeader @toggle-menu="toggleMenu"></TheHeader>
  <main> 
    <Transition :name="transitionName" mode="out-in" >
      <aside v-if="isToggle">     
          <TheNav></TheNav> 
      </aside> 
    </Transition>
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
import { ref } from 'vue';

const transitionName = ref('none');
const isToggle = ref(true);
const toggleMenu = (isOpen) =>{ 

  isToggle.value = isOpen;
 
  if(isOpen){
    transitionName.value = 'slide-left';
  }else{
    transitionName.value = 'slide-right'; 
  }
}
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
  border-radius: 8px; 
  background-color: #fff;
}
main #container #routerview{
  padding: 15px;
}
.slide-right-enter-active,
.slide-right-leave-active {
    transition: transform 0.5s ease;
}
.slide-right-enter-from {
    transform: translateX(100%);
}
.slide-right-leave-to {
    transform: translateX(-100%);
}
/* slide left */
.slide-left-enter-active,
.slide-left-leave-active {
    transition: transform 0.5s ease;
}
.slide-left-enter-from {
    transform: translateX(-100%);
}
.slide-left-leave-to {
    transform: translateX(100%);
}
 
</style>

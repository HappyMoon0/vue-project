<template> 
  <TheHeader @toggle-menu="toggleMenu"></TheHeader> 
  <main> 
    <Transition name="slide" mode="out-in">
      <aside v-show="isToggle">     
          <TheNav>
            
          </TheNav> 
      </aside> 
    </Transition>
    <div id="container">
      <!-- <TheNavigation></TheNavigation> -->
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
 
const isToggle = ref(true);
const toggleMenu = (isOpen) =>{ 
  isToggle.value = isOpen;
}
</script>


<style scoped>
 
.logo {
  display: block;
  margin: 0 auto 2rem;
}
main{
  position: relative;
  display: flex;
  flex-direction: row;
}
main aside{
  width: 250px; 
  margin-top: 20px;  
}
main #container{
  width: 100vw; 
  height: calc(100vh - 100px);
  max-height: calc(100vh - 100px);
  margin: 20px 0 20px 20px; 
  border : 1px solid #d6d5d5;
  border-right: 0px;
  box-sizing: border-box;
  border-radius: 8px 0px 0px 8px; 
  background-color: #fff;
}
main #container #routerview{
  /* padding: 15px; */
}
.toggle-enter-active, .toggle-leave-active{
    transition: all 1s
} 

.slide-enter-to,
.slide-leave-from {
  transform:translateX(0);
  transition-duration: 0.5s; 
  width:250px;
}

.slide-enter-from,
.slide-leave-to {
  transform:translateX(-100%);
  transition-duration: 0.5s;  
  width:0px;
}
</style>

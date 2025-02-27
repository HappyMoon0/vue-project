<template> 
  <TheHeader @toggle-menu="toggleMenu"></TheHeader> 
  <main> 
    <Transition name="toggle" >
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
.toggle-enter-active, .toggle-leave-active{
    transition: all 1s
}
.toggle-enter , 
.toggle-leave-to{
  left:-250px;
  width:0px;
}
.toggle-enter-to ,
.toggle-leave {
  left:0px;
  width:250px;
}  
</style>

<template>
  <nav> 
    <TheNavProfile></TheNavProfile>
    <ul> 
      <li v-for="(menu, index) in MenuList" :key="index"> 
        <div>
          <RouterLink :to="menu.path">
          <i class="pi" :class="menu.icon" style="font-size: 1rem"></i>
          {{menu.label}}
          </RouterLink> 
        </div> 
        <ul v-if="menu.childMenuList != null">
          <li v-for="(childMenu, index2) in menu.childMenuList" :key="index2">
            {{ childMenu.label }}
          </li> 
        </ul> 
      </li> 
    </ul> 
  </nav>
</template>
<script setup>
import TheNavProfile from '@/components/TheNavProfile.vue';
import { PrimeIcons } from '@primevue/core/api'; 
  const MenuList = [
      
      { label: 'HOME', icon: PrimeIcons.HOME, path : '/' },
      { label: 'Dashboard', icon: PrimeIcons.DESKTOP, path : '/dashboard' },
      { label: 'User', icon: PrimeIcons.USER, path : '/user' },
      { label: 'Message', icon: PrimeIcons.ENVELOPE, path : '/message' },
      { label: 'Board', icon: PrimeIcons.BOOK, path : '/board' },
      { 
        label: 'Setting', 
        icon: PrimeIcons.COG, 
        path : '/setting',
        childMenuList : [
          { label: 'Setting1', path : '/setting1' },
          { label: 'Setting2', path : '/setting2' },
          { label: 'Setting3', path : '/setting3' },
        ]
      },
      { label: 'Help', icon: PrimeIcons.QUESTION_CIRCLE, path : '/test/' }
        
  ];
</script>
<style scoped>
nav {
  width: inherit;
  padding: 0; 
  display: flex;
  flex-direction: column; 
  background: #fff;
  border: 1px solid #d6d5d5;
  border-radius: 0 8px 8px 0;
  border-left: 0;
  overflow:hidden;
  position: relative;
} 
nav a {
  font-weight: bold;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
nav a i{
  padding-right: 10px;
} 
nav a.router-link-exact-active {
  color: #42b983;
} 
nav ul li div{
  cursor: pointer;
  padding: 15px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #d6d5d5;
}
nav > ul > li:first-child{
  border-top: 1px solid #d6d5d5;
}
nav > ul > li:last-child{
  border-bottom: 0;
} 
nav ul li ul{
  background-color: #fdfdfd;
  padding: 10px 0px 10px 30px; 
  border-bottom: 1px solid #d6d5d5;
}
nav ul li ul li{
  padding: 10px 0;
  cursor: pointer;
} 

</style>
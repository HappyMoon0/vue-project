<template>
  <div id="nav_profile">
      <div id="nav_profile_wrapper"  :style="{ backgroundImage: `url(${$store.state.UserStore.imageUrl})` }">
        <div id="nav_profile_img" v-if="!$store.state.UserStore.imageUrl">
          <i class="pi pi-camera" style="color: gainsboro; font-size: 2rem;"></i>
        </div>
      </div>
      <ul id="nav_profile_info">
        <li>{{ $store.state.UserStore.id }} </li>
        <li>{{ $store.state.UserStore.name }} </li>
        <li>{{ $store.state.UserStore.age }} </li>
      </ul>
    </div>
</template>
<script setup> 
</script>
<style scoped>
 
 #nav_profile{
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column; 
  align-items: center; 
  margin-top:30px;
 }
 #nav_profile_wrapper{
  position: relative;
  background-color: #f1f1f1; 
  border-radius: 100%;
  width: 110px;
  height: 110px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: contain;
 }
 #nav_profile_img{ 
  position: absolute; 
  top: 0; 
  bottom:0; 
  left:0;
  right: 0; 
  margin: auto;
  width: 32px;
  height: 32px;

 }
 ul#nav_profile_info {
  margin: 11px 0;
  list-style: none;
 }
 ul#nav_profile_info li {
  font-size: 14px;
  font-weight: 500;
 }
</style>
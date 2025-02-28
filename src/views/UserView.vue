<script setup>  
import { UserStore } from "@/store/userStore";
import { storeToRefs } from "pinia"; 


const userStore = UserStore();
const userInfo =storeToRefs(userStore); 

const changeUserInfo = () => { 
    userStore.updateUser({
        newId : 'apple',
        newName: 'Hong gil dong', 
        newAge: 25,  
    });
} 


</script>
<template>
    <div> 
  
        <p>ID: {{ userInfo.id }}</p>
        <p>Name: {{ userInfo.name }}</p>
        <p>Age: {{ userInfo.age }}</p>
        <button @click="changeUserInfo">Update User Info</button>
        <!-- {{ $store.state.UserStore.id }} 
        <br>
        {{ $store.state.UserStore.name }} 
        <br>
        {{ $store.state.UserStore.age }} 
        <br>
        <button @click="$store.commit('changeName')">이름 변경</button>
        <button @click="$store.commit('changeAge')">age+</button>

        <br>
        <p>{{ $store.state.UserStore.morePost }}</p>
        <button @click="$store.dispatch('getData')">더보기버튼</button>
        <button @click="sendInfo">sendInfo</button> -->
    </div>
    
</template>


<style  scoped>

</style>
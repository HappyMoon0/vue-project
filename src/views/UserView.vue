<template>
    <div> 
 

        {{ $store.state.UserStore.id }} 
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
        <button @click="sendInfo">sendInfo</button>
    </div>
    
</template>

<script setup> 
import { computed } from "vue";
import { useStore } from "vuex";
{


    const baseUrl = import.meta.env.VITE_BASE_URL;  
    const store = useStore();
    // state는 moduleName으로 쪼개서 들어간다.
    const counter = computed(() => store.state.MainStore.counter);

   

    // getters와 mutation은 전역으로 들어가서 store.getters.Counter.time2가 아니라 store.getters.time2이다
    const test = computed(() => store.getters.time2);
    const doubleGetters = computed(() => store.getters.doubleCount);
    const inc = () => store.commit("setCounter", counter.value + 1);
 
    const sendInfo = () =>{
        // axios({
        // method: "post",
        // url: "https://testServer.com/box/1",
        // data: {shape: "circle",color: "red"},
        // header: {
        //     "Context-Type": "multipart/form-data"
        // },
        // });
    }

    
    
}
 

</script>

<style  scoped>

</style>
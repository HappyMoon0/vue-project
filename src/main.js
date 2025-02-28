import './assets/main.css'

import { createApp } from 'vue' 
import { createPinia } from "pinia"; 
import {createPersistedState } from 'pinia-plugin-persistedstate'

import App from './App.vue' 
import router from './router/index' 
import axios from './plugins/axios'
import { apiUrl } from './apiUrl'
import PrimeVue from 'primevue/config'; 
  

const app = createApp(App); 

//global not working
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$router = router;
app.provide('axios' , axios);
app.provide('apiUrl' , apiUrl); 

const pinia = createPinia();
pinia.use(createPersistedState({
    storage: localStorage,
    auto: true,
}));
app.use(pinia);
app.use(router); 
app.use(PrimeVue); 
app.mount('#app');
 
 


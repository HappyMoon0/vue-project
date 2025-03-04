import './assets/main.css'

import { createApp } from 'vue' 
import { createPinia } from "pinia"; 
import {createPersistedState } from 'pinia-plugin-persistedstate'

import App from './App.vue' 
import router from './router/index' 
import axios from './plugins/axios'
import { apiUrl } from './apiUrl' 
import Requester from './Requester';

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Aura from '@primeuix/themes/aura'; 

const app = createApp(App); 

//global not working
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$router = router;
app.config.globalProperties.$requester = Requester;
app.provide('axios' , axios);
app.provide('apiUrl' , apiUrl); 

app.component('Button', Button);
app.component('InputText', InputText);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
const pinia = createPinia();
pinia.use(createPersistedState({
    storage: localStorage,
    auto: true,
}));



app.use(pinia);
app.use(router); 

app.mount('#app');
 
 


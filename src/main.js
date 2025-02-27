import './assets/main.css'

import { createApp } from 'vue' 
import App from './App.vue' 
import route from './router/index' 
import store from './store'
import axios from './plugins/axios'
import { apiUrl } from './apiUrl'
import PrimeVue from 'primevue/config'; 
  

const app = createApp(App); 

//global not working
app.config.globalProperties.axios = axios;
app.provide('axios' , axios)
app.provide('apiUrl' , apiUrl)
app.use(store);  
app.use(route); 
app.use(PrimeVue); 
app.mount('#app');
 
 


import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import route from './router'
import axios from 'axios'
import store from './store'
import PrimeVue from 'primevue/config';

const app = createApp(App);
app.config.globalProperties.axios = axios;
app.use(route);
app.use(store);
app.use(PrimeVue);
app.mount('#app');

console.log(import.meta.env);

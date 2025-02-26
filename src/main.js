import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import route from './router'
import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(route);
app.use(PrimeVue);
app.mount('#app');

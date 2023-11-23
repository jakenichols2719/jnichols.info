import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Home from './pages/Home.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  { path: '/', component: Home },
]
const router = createRouter({routes: routes, history: createWebHistory()})

const app = createApp(App)
app.use(router)
app.mount('#app')

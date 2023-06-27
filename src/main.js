import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Home from './pages/Home.vue';
import BlogHome from './pages/BlogHome.vue';
import BlogPage from './pages/BlogPage.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/blog', component: BlogHome },
  { path: '/blog/:post_id', component: BlogPage }
]
const router = createRouter({routes: routes, history: createWebHistory()})

const app = createApp(App)
app.use(router)
app.mount('#app')

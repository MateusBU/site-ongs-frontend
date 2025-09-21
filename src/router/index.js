import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import OngById from '../views/OngById.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/ong/:id', name: 'OngById', component: OngById }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
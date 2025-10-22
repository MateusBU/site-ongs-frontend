import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import OngById from '../views/OngById.vue'
import User from '../views/User.vue'
import authUser from '../views/auth/authUser.vue'
import { userKey } from '../global'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/ong/:id', name: 'OngById', component: OngById },
    { path: '/user', name: 'User', component: User },
    { path: '/auth', name: 'auth', component: authUser }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) =>{
  const json = localStorage.getItem(userKey);
  const user = JSON.parse(json);

  if(to.path === '/auth' && user){
    next({path: '/'});
    console.log('already logged');
  }
  // else if(to.matched.some(record => record.meta.requiresAdmin)){
  //   user && user.admin ? next() : next({path: '/'});
  // }
  else{
    next();
  }
})

export default router
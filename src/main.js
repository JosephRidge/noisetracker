import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style/index.css'
import Home from './components/HomePage.vue'
import Map from './components/Maps.vue'

import App from './App.vue'

const routes = [
    {
      path:'/',
      name:'Home',
      component:Home, 
    },
    {
      path:'/tracking',
      name:'Tracking',
      component:Map, 
    },
  ]
// create the router instance 
const router = createRouter({
    history:createWebHistory(), 
    routes,
  })
 
createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style/index.css'
import Home from './components/HomePage.vue'
import Map from './components/Maps.vue'
import Analytics from './components/Analytics.vue' 

import App from './App.vue'

const routes = [
    {
      path:'/',
      name:'Home',
      component:Home, 
    },
    {
      path:'/locations',
      name:'Tracking',
      component:Map, 
    },
    {
      path:'/stats',
      name:'Analytics',
      component:Analytics, 
    },
  ]
// create the router instance 
const router = createRouter({
    history:createWebHistory(), 
    routes,
  })
 
createApp(App).use(router).mount('#app')

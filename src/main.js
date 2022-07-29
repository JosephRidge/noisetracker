import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style/index.css'
import Home from './components/HomePage.vue'
import Map from './components/Maps.vue'
import Analytics from './components/Analytics.vue' 

import App from './App.vue' 
import HighchartsVue from 'highcharts-vue'


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
 
// Firebase 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiglHw8MoQGXGU_fuFY3QEGXtRNobTlwA",
  authDomain: "ecouteio.firebaseapp.com",
  databaseURL: "https://ecouteio-default-rtdb.firebaseio.com",
  projectId: "ecouteio",
  storageBucket: "ecouteio.appspot.com",
  messagingSenderId: "999458634943",
  appId: "1:999458634943:web:fedc09d9d66731ced51a0a",
  measurementId: "G-LNX9Q036VS"
};

// Initialize Firebase
initializeApp(firebaseConfig); 

createApp(App)
.use(HighchartsVue)
.use(router)
.mount('#app')

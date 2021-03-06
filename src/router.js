import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

import Home from './components/Home';
import About from './components/About'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/About',
        component: About
    }
]

export default new VueRouter({
    routes,
    mode: 'history'
})
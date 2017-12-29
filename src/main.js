// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index.vue'
Vue.use(VueRouter) //使用VueRouter
let router = new VueRouter({
    mode: 'history', //hash模式(达到前进后退的效果)
    routes: [{
        path: '/',
        component: IndexPage //routerView的插入应该在上一级组件
    }]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<Layout/>',
    components: { Layout }
})
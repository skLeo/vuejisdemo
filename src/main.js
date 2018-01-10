// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index.vue'
import VueResource from 'vue-resource'
import DetailPage from './pages/detail.vue'
import DetailAnaPage from './pages/detail/analysis.vue'
import DetailCouPage from './pages/detail/count.vue'
import DetailForPage from './pages/detail/forecast.vue'
import DetailPubPage from './pages/detail/publish.vue'
import OrderListPage from './pages/orderList.vue'
Vue.use(VueRouter) //使用VueRouter
Vue.use(VueResource) //使用VueSource
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;
let router = new VueRouter({
    mode: 'history', //hash模式(达到前进后退的效果)
    routes: [{
        path: '/',
        component: IndexPage //routerView的插入应该在上一级组件
    }, {
        path: '/orderList',
        component: OrderListPage
    }, {
        path: '/detail',
        component: DetailPage,
        redirect: '/detail/analysis',
        children: [{
            path: 'analysis',
            component: DetailAnaPage
        }, {
            path: 'count',
            component: DetailCouPage
        }, {
            path: 'forecast',
            component: DetailForPage
        }, {
            path: 'publish',
            component: DetailPubPage
        }]
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
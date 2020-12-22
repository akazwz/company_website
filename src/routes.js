import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
}

export default new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: () => import('./components/Home.vue'),
            name: 'home',
            children : [
                {path: '/about', component: () => import('./components/About.vue'), name: '有关我们'},
                {path: '/home', component: () => import('./components/ICE.vue'), name: '冰河导航'},
                {path: '/aboutUS', component: () => import('./components/AboutUs.vue'), name: '关于冰河'},
                {path: '/newsCenter', component: () => import('./components/NewsCenter'), name: '新闻中心'},
                {path: '/showNews', component: () => import('./components/ShowNews'), name: '新闻详情'},
                {path: '/automation', component: () => import('./components/product/Automation'), name: '农业自动化'},

                {path: '/customer', component: () => import('./components/view/Customer'), name: '客户服务'},

                {path: '/joinUs', component: () => import('./components/view/JoinUS'), name: '加入我们'},

                {path: '/contactUS', component: () => import('./components/view/ContactUs'), name: '联系我们'},




                {path: '/videoTutorial', component: () => import('./components/VideoTutorial'), name: '视频教程'},
                {path: '/product1', component: () => import('./components/product/product1'), name: '产品1'},
                {path: '/commonProblem', component: () => import('./components/CommonProblem'), name: '常见问题'},
            ]
        },

        {
            path: '/login',
            component: () => import('./components/view/Login'),
            name: '登陆',
        }




    ]
})

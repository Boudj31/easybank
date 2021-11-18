import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue';
import Blog from './views/Blog.vue';



Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: "home", component: Home, alias: '/home'},
        { path: '/blog', name: "blog", component: Blog },
    ],
 
})


export default router;
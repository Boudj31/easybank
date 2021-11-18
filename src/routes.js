import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue';
import Blog from './views/Blog.vue';
import Contact from './views/Contact.vue';
import Carreers from './views/Carreers.vue';
import BlogView from './views/BlogView.vue';



Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: "home", component: Home, alias: '/home'},
        { path: '/blog', name: "Blog", component: Blog },
        { path: '/contact', name: "Contact", component: Contact },
        { path: '/carreers', name: "Carreers", component: Carreers },
        { path: '/blog/:blogid', name: "BlogView", component: BlogView },
    ],
 
})


export default router;
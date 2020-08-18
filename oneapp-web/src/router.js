import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/pages/Home.vue';
import Apply from '@/components/pages/Apply.vue';
import OneApp from '@/components/pages/OneApp.vue';
import Login from '@/components/pages/Login.vue';
import Forgot from '@/components/pages/Forgot.vue';
import Register from '@/components/pages/Register.vue';
import Status from '@/components/pages/Status.vue';
import NotFound from '@/components/pages/NotFound.vue';
import StyleGuide from '@/components/pages/StyleGuide.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'home', component: Home, meta: { header: true, footer: true } },
    { path: '/one-app', name: 'one-app', component: OneApp },
    { path: '/style-guide', name: 'style-guide', component: StyleGuide },
    { path: '/apply', name: 'apply', component: Apply, meta: { header: true, footer: true } },
    { path: '/login', name: 'login', component: Login, meta: { header: true, footer: true } },
    { path: '/register', name: 'register', component: Register, meta: { header: true, footer: true } },
    { path: '/forgot', name: 'forgot', component: Forgot, meta: { header: true, footer: true } },
    { path: '/status', name: 'status', component: Status, meta: { header: true, footer: true } },
    { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '@/components/pages/About.vue') },
    { path: '*', name: 'not-found', component: NotFound } // 404 page
];

const router = new VueRouter({
    routes
});

export default router;

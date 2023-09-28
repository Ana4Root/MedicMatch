import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';

const routes = [
    {
        path: '/', name: 'Home', component: Home
    },
    {
        path: '/Guia', name: 'Guia', component: () => import('../components/Guia.vue')
    },
    {
        path: '/Crud', name: 'Crud', component: () => import('../components/Crud/Principal.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

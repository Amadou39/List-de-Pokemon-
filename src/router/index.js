import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../view/Home.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
];

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory('/'),
    routes,
});

export default router;

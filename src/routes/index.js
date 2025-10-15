import { createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/contato',
        component: () => import('../views/ContatoView.vue')
    },
    {
        path: '/sobre',
        component: () => import('../views/SobreView.vue')
    }
];

const router = createRouter({
        history: createWebHistory(),
        routes,
    });
   



export default router;
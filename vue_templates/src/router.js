
import { createRouter, createWebHistory} from 'vue-router';
import Top from './components/Top.vue'
import Pet from './components/Pet.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Top },
        { path: '/pet', component: Pet }
    ],
    linkActiveClass: 'example-active',
    linkExactActiveClass: 'example-exact-active',
});

export default router;
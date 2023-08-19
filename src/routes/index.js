import { createWebHistory, createRouter } from "vue-router";
import store from '../store/index';
import routes from "./routes";

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters['auth/isAuthenticated'];

    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/')
    } else{
        next();
    }
    
});

export default router;
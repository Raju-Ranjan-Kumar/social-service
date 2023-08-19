import Login from '../components/Login.vue';
import Dashboard from "../components/Dashboard.vue";
import ErrorPage from '../components/ErrorPage.vue'

const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'DashboardPage',
        component: Dashboard,
        meta: { requiresAuth: true }, // Secure the dashboard route
    },
    {
        path: '/about',
        name: 'about',
        component: Dashboard,
        meta: { requiresAuth: true }, // Secure the dashboard route
    },
    {
        path: '/service',
        name: 'service',
        component: Dashboard,
        meta: { requiresAuth: true }, // Secure the dashboard route
    },
    {
        path: '/contact',
        name: 'contact',
        component: Dashboard,
        meta: { requiresAuth: false }, // Secure the dashboard route
    },
    {
        path: '/:catchAll(.*)',
        name: 'Error',
        component: ErrorPage
    }
    
];

export default routes;
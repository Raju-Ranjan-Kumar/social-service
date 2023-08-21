import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import Dashboard from "../components/Dashboard.vue";
import ErrorPage from '../components/ErrorPage.vue'

const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component: Login,
    },
    {
        path: '/signup',
        name: 'SignupPage',
        component: Signup,
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
        path: '/:catchAll(.*)',
        name: 'Error',
        component: ErrorPage
    }
    
];

export default routes;
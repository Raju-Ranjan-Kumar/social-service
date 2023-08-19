import { createStore } from 'vuex';
import auth from './auth';

export default createStore({
    modules: {
        auth, // Register the auth module with the correct namespace
    },
});
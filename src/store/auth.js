import axios from 'axios';

export default {
    namespaced: true, // Make sure this is set to true

    state: {
        isAuthenticated: localStorage.getItem('token') ? true : false,
        user: null,
    },

    mutations: {
        login(state, user) {
            state.isAuthenticated = true;
            state.user = user;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        },
    },

    actions: {
        async login({ commit }, credentials) {
            try {
                const response = await axios.post('https://api2.diasporanigeria.org/api/admin/login', credentials);

                if (response.status === 200) {
                    localStorage.setItem("token",JSON.stringify(response.data?.data.token));

                    const user = response.data.data.email;
                    commit('login', user);
                    return { success: true };
                }
            } catch (error) {
                let errorMsg = "";

                if (error.response.status == 400) {
                    errorMsg = error.response.data.message;
                } else if (error.response.status == 422) {
                    errorMsg = error.response.data.message.message;
                }
                return { success: false, error: errorMsg };
            }
        },

        async logout({ commit }) {console.log("logout")
            try {
                localStorage.removeItem("token");
                localStorage.removeItem("email");
                commit('logout');
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async fetchUserData({ commit }) {
            try {
                const response = await axios.get('/api/user');
                const user = response.data; // Assuming API returns user data
                commit('login', user);
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
    },

    getters: {
        isAuthenticated(state) {
            return state.isAuthenticated;
        },
        currentUser(state) {
            return state.user;
        },
    },
};
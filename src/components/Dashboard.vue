<template>
    <div>
        <h1>Dashboard</h1>
        <p>Welcome, {{ currentUser }}</p>

        <AutoComplete v-model="value" :suggestions="items" @complete="search" />


        <button @click="handleLogout">Logout</button>
    </div>
</template>


<script setup>
import { ref } from "vue";

const value = ref("");
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
</script>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import AutoComplete from 'primevue/autocomplete';

    export default {
        name: 'DashboardPage',
        components: {
            AutoComplete
        },

        computed: {
            ...mapGetters('auth', ['currentUser', 'isAuthenticated']),
        },

        methods: {
            ...mapActions('auth', ['logout']),

            async handleLogout() {
                try {
                    await this.logout();
                    this.$router.push('/');
                } catch (error) {
                    console.log(error);
                }
            },
        },
    }
</script>
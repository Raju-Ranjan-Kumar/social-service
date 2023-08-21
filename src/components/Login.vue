<template>
    <div class="top-container">
        <form @submit.prevent="login">
            <div class="login-container">
                <div class="card custom-card w-4">
                    <h3 class="text-center" style="color:var(--text-secondary-color);">Sign In</h3>
                    <div class="w-full flex flex-column align-items-center justify-content-center gap-3 py-4">
                        <div class="w-full flex align-items-center gap-2">
                            <InputText type="email" class="w-full" placeholder="Email" v-model="email" required />
                        </div>
                        <div class="w-full flex align-items-center gap-2">
                            <InputText type="password" class="w-full" placeholder="Password" v-model="password" required />
                        </div>
                        <ButtonPrime label="Login" class="w-full" type="submit" severity="danger"></ButtonPrime>
                    </div>
                    <p class="create-account">
                        Don't have an account..?
                        <router-link to="/signup">Signup</router-link>
                    </p>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'LoginPage',

        data() {
            return {
                email: '',
                password: '',
            };
        },

        computed: {
            ...mapGetters('auth', ['isAuthenticated']),
        },

        methods: {
            async login() {
                try {
                    const result = await this.$store.dispatch('auth/login', {
                        email: this.email,
                        password: this.password,
                    });

                    if (result.success) {
                        // Redirect to dashboard or perform necessary actions
                        this.$router.push('/dashboard');
                    }
                } catch (error) {
                    console.log(error);
                }
            },
        },
    };
</script>

<style>
    .top-container { background-image:url(../assets//images/bg-photo.avif); width:100%; height:100vh; }
    .login-container { display:flex; align-items:center; justify-content:center; height:100%; }
    :root { --text-secondary-color:#E73838; }
    .custom-card { box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
    .create-account { padding:10px 0px; text-align:center; }
    .create-account a { text-decoration:none; font-weight:600; color:#E73838; }
</style>
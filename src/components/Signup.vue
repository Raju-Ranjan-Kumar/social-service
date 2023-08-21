<template>
    <div class="top-container">
        <form @submit.prevent="onSubmit">
            <div class="login-container">
                <div class="card custom-card w-4">
                    <h3 class="text-center" style="color:var(--text-secondary-color);">Sign Up</h3>
                    <div class="w-full flex flex-column align-items-center justify-content-center py-4">
                        <div class="w-full pb-3">
                            <InputText type="text" class="w-full" placeholder="Name" v-model="username" :class="{ 'p-invalid': usernameError }" aria-describedby="user-name" />
                            <small id="user-name" class="p-error">{{ usernameError }}</small>
                        </div>

                        <div class="w-full pb-3">
                            <InputText type="email" class="w-full" placeholder="Email" v-model="email" :class="{ 'p-invalid': emailError }" aria-describedby="user-email" />
                            <small id="user-email" class="p-error">{{ emailError }}</small>
                        </div>

                        <div class="w-full pb-3">
                            <InputNumber class="w-full" v-model="phone" placeholder="Phone" inputId="integeronly" :class="{ 'p-invalid': phoneError }" aria-describedby="phone" />
                            <small id="phone" class="p-error">{{ phoneError }}</small>
                        </div>

                        <div class="w-full pb-3">
                            <InputText type="password" class="w-full" placeholder="Password" v-model="password" :class="{ 'p-invalid': passwordError  }" aria-describedby="user-password" />
                            <small id="user-password" class="p-error">{{ passwordError }}</small>
                        </div>

                        <div class="w-full pb-3">
                            <InputText type="password" class="w-full" placeholder="Confirm Password" v-model="confirmpassword" :class="{ 'p-invalid': conpasswordError }" aria-describedby="confirm-password" />
                            <small id="confirm-password" class="p-error">{{ conpasswordError }}</small>
                        </div>

                        <ButtonPrime label="Signup" class="w-full mt-2" type="submit" severity="danger"></ButtonPrime>
                    </div>
                    <p class="create-account"> Already have an account..?
                        <router-link to="/">Login</router-link>
                    </p>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { useValidation } from '../validation/signup-validation';

    const {
        username,
        email,
        phone,
        password,
        confirmpassword,
        usernameError,
        emailError,
        phoneError,
        passwordError,
        conpasswordError,
        onSubmit,
    } = useValidation();
</script>

<script>
    export default {
        name: 'SignupForm',

        data() {
            return {
                username: '',
                email: '',
                phone: '',
                password: '',
                confirmpassword: '',
            };
        },
    };
</script>

<template>
    <DefaultLayout>
        <p class="text-neutral text-5xl my-3">Login Page</p>
        <Form @submit="handleLogin" :validation-schema="schema">
            <div class="grid grid-cols-1">
                <div class="form-control w-full max-w-xs">
                    <label class="label text-primary-700" for="username">
                        <span class="label-text">
                            Username
                        </span>
                    </label>
                    <Field name="username" type="text" class="input input-bordered w-full max-w-xs" placeholder="username"/>
                    <label class="label text-primary-700">
                        <span class="label-text-alt">
                            <ErrorMessage name="username" class="text-error" />
                        </span>
                    </label>
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label text-primary-700" for="password">
                        <span class="label-text">
                            Password
                        </span>
                    </label>
                    <Field name="password" type="password" class="input input-bordered w-full max-w-xs" placeholder="password"/>
                    <label class="label text-primary-700">
                        <span class="label-text-alt">
                            <ErrorMessage name="password" class="text-error" />
                        </span>
                    </label>
                </div>
            </div>

            <div class="flex justify-start mt-6">
                <button class="btn btn-primary">Sign in</button>
            </div>
        </Form>
    </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import LoginService from '@/service/authService.js';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { useRouter } from 'vue-router';
import * as yup from 'yup';
import Nprogress from 'nprogress';

const router = useRouter();
const schema = yup.object().shape({
    username:
        yup.string()
            .required('Username is required!')
            .min(3, 'Must be at least 3 characters!')
            .max(20, 'Must be maximum 20 characters'),
    password:
        yup.string()
            .required("password is required")
            .min(4, "Must be at least 4 character")
            .max(40, "no longer than 40 character"),
});

const handleLogin = async (values) => {
    Nprogress.start();
    LoginService.login(values).then(() => {
        Nprogress.done();
        router.push(
            { name: 'Profile' }
        );
    }).catch(() => {
        Nprogress.done();
        alert('Login failed');
    });
}

</script>
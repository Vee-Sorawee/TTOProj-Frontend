<template>
    <DefaultLayout>
        <p class="text-neutral text-5xl my-5">Reigster Page</p>
        <Form @submit="handleRegister" :validation-schema="schema">
            <div class="grid grid-cols-2">
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
                    <label class="label text-primary-700" for="emailAddress">
                        <span class="label-text">
                            Email Address
                        </span>
                    </label>
                    <Field name="emailAddress" type="email" class="input input-bordered w-full max-w-xs" placeholder="email@email.com"/>
                    <label class="label text-primary-700">
                        <span class="label-text-alt">
                            <ErrorMessage name="emailAddress" class="text-error" />
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

                <div class="form-control w-full max-w-xs">
                    <label class="label text-primary-700" for="passwordConfirmation">
                        <span class="label-text">
                            Confirm Password
                        </span>
                    </label>
                    <Field name="passwordConfirmation" type="password" class="input input-bordered w-full max-w-xs" placeholder="confirm password"/>
                    <label class="label text-primary-700">
                        <span class="label-text-alt">
                            <ErrorMessage name="passwordConfirmation" class="text-error" />
                        </span>
                    </label>
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label text-primary-700" for="firstname">
                        <span class="label-text">
                            Firstname
                        </span>
                    </label>
                    <Field name="firstname" type="text" class="input input-bordered w-full max-w-xs" placeholder="firstname"/>
                    <label class="label text-primary-700">
                        <span class="label-text-alt">
                            <ErrorMessage name="firstname" class="text-error" />
                        </span>
                    </label>
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label text-primary-700" for="lastname">
                        <span class="label-text">
                            Lastname
                        </span>
                    </label>
                    <Field name="lastname" type="text" class="input input-bordered w-full max-w-xs" placeholder="lastname"/>
                    <label class="label text-primary-700">
                        <span class="label-text-alt">
                            <ErrorMessage name="lastname" class="text-error" />
                        </span>
                    </label>
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label text-primary-700" for="sex">
                        <span class="label-text">
                            Gender
                        </span>
                    </label>
                    <Field name="sex" as="select" :v-slot="{ sex }" class="input input-bordered w-full max-w-xs" title="sex">
                        <option value="MALE">male</option>
                        <option value="FEMALE">female</option>
                        <option value="NON_BI">non binary</option>
                        <option value="OTHER">other</option>
                    </Field>
                    <label class="label text-primary-700">
                        <span class="label-text-alt">
                            <ErrorMessage name="sex" class="text-error" />
                        </span>
                    </label>
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label text-primary-700" for="hometown">
                        <span class="label-text">
                            Home town
                        </span>
                    </label>
                    <Field name="hometown" type="text" class="input input-bordered w-full max-w-xs" placeholder="home,country"/>
                    <label class="label text-primary-700">
                        <span class="label-text-alt">
                            <ErrorMessage name="hometown" class="text-error" />
                        </span>
                    </label>
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label text-primary-700" for="birthday">
                        <span class="label-text">
                            Birthday
                        </span>
                    </label>
                    <Field name="birthday" type="date" min="1960-01-01" max="2010-01-01" class="input input-bordered w-full max-w-xs" placeholder="birthday"/>
                    <label class="label text-primary-700">
                        <span class="label-text-alt">
                            <ErrorMessage name="birthday" class="text-error" />
                        </span>
                    </label>
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label text-primary-700" for="pic">
                        <span class="label-text">
                            upload your profile pic
                        </span>
                    </label>
                    <Field @change="handleUploadPic" name="pic" type="file" class="input w-full max-w-xs" placeholder="upload your file"/>
                    <label class="label text-primary-700">
                        <span class="label-text-alt">
                            <ErrorMessage name="pic" class="text-error" />
                        </span>
                    </label>
                </div>
            </div>

            <div class="flex justify-end mt-6">
                <button class="btn btn-primary">Sign up</button>
            </div>
        </Form>
    </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import RegisterService from '@/service/authService.js';
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { useRouter, useRoute } from 'vue-router';
import * as yup from 'yup';
import Nprogress from 'nprogress';

const router = useRouter();
const route = useRoute();
const registered = ref({})
const file = ref('')

const schema = yup.object().shape({
    username:
        yup.string()
            .required('Username is required!')
            .min(3, 'Must be at least 3 characters!')
            .max(20, 'Must be maximum 20 characters'),
    emailAddress:
        yup.string()
            .required('Email is required!')
            .email("Email is invalid!")
            .max(50, "no longer than 50 character"),
    password:
        yup.string()
            .required("password is required")
            .min(6, "Must be at least 6 character")
            .max(40, "no longer than 40 character"),
    passwordConfirmation:
        yup.string()
            .required("you need to confirm you password")
            .oneOf([yup.ref("password")], "password is not match"),
    firstname:
        yup.string()
            .required("your firstname is required!")
            .min(2, 'Your name need to be at least 2 character')
            .max(50, 'No one have that much long firstname'),
    lastname:
        yup.string()
            .required("your lastname is required!")
            .min(2, 'Your lastname need to be at least 2 character')
            .max(50, 'No one have that much long lastname'),
    sex: yup.string()
        .required("your sex is required!"),
    hometown:
        yup.string()
            .required("your hometown is required!"),
    birthday:
        yup.string()
            .required("your birthday is required!"),
    // pic:
        // yup.string()
            // .required("your pic is required!")
});

const handleRegister = (values) => {
    Nprogress.start();
    RegisterService.register(values)
        .then((response) => {
            registered.value = response.data
            Nprogress.done();
            router.push({
                name:"Home"
            })
        })
        .catch((error) => {
            console.log(error)
        })

}

const handleUploadPic = (e) => {
    RegisterService.uploadFile(e.target.files[0])
        .then((res) => {
            file.value = res.data
        })
        .catch((err) => {
            console.log(err)
        })
}
</script>
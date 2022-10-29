<template>
    <DefaultLayout>
        <p class="text-neutral text-5xl my-3 mx-3">Doctor Page / Patient Details</p>
        <div class="grid lg:grid-cols-3 gap-4 sm:grid-cols-1">
            <ProfileCard class="my-6" :user="patient.user" />
            <div class="grid grid-cols-1">
                <VaccineCard v-for="v in vaccine" :key="v.id" :vaccine="v"/>
            </div>
            <div>
                <p class="text-neutral text-2xl my-3 mx-3">Doctor in care</p>
                <DoctorCard class="my-6" :doctor="patient.doctor" />
            </div>
        </div>
        <div class="grid lg:grid-cols-1 sm:grid-cols-1">
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">comment</span>
                </label>
                <input v-model="content" type="text" placeholder="comment here" class="input input-bordered w-full max-w-xs" />
                <button @click="addComment" class="btn btn-primary my-3">
                    add 
                </button>
            </div>
        </div>
        <div class="grid lg:grid-cols-1 sm:grid-cols-1">
            <CommentCard v-for="c in comment" :key="c.content" :comment="c"/>
        </div>
    </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import DoctorService from '@/service/doctorService.js';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import ProfileCard from '@/components/profile.card.vue';
import DoctorCard from '@/components/doctor.card.vue';
import CommentCard from '@/components/comment.card.vue';
import VaccineCard from '@/components/vaccine.card.vue';

const props = defineProps({
    id: {
        type: String,
    }
});

const router = useRouter();
const patient = ref({});
const vaccine = ref([]); 
const comment = ref([]);
const content = ref('');
onMounted(async () => {
    const response = await DoctorService.getPatientById(props.id);
    patient.value = response.data;
    vaccine.value = response.data.vaccineHistories;
    comment.value = response.data.comments;
});

const addComment = async () => {
    await DoctorService.postComment(patient.value.id,patient.value.doctor.id,content.value);
    router.go(0);
}
</script>
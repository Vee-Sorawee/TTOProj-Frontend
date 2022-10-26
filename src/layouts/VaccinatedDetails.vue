<script>
export default {
    props:['vaccinatedPerson'],
}
</script>
<template>
    <div class="max-w-4xl flex items-center flex-wrap mx-auto my-0 lg:my-0">

        <div class="w-full lg:w-80">
            <img class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
        </div>

        <!--Main Col-->
        <div id="profile"
            class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">

            <div class="p-4 md:p-12 text-center lg:text-left">
                <img :src="this.vaccinatedPerson.imageUrls[0]" class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" />

                <router-view :vaccinatedPerson="vaccinatedPerson"/>
            </div>
        </div>
    </div>
</template>
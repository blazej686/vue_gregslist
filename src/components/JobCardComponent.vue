<template>
    <router-link :to="{ name: 'JobDetails', params: { jobId: jobProp.id } }">
        <section class="row card p-3 mt-3">
            <div class="col-3-p-3">
                {{ jobProp.jobTitle }}
            </div>
            <div class="col-4 p-4">
                {{ jobProp.company }}
                ${{ jobProp.rate }}
            </div>
        </section>
    </router-link>
</template>




<script>
import { Job } from '../models/Job.js';



export default {

    props: {
        jobProp: {
            type: Job,
            required: true
        }
    },
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped></style>
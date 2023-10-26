<template>
    <div>


    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, onMounted } from 'vue';
import { jobsService } from '../services/JobsService.js';
export default {
    setup() {

        async function getJobDetails() {
            await jobsService.getJobDetails()
        }
        onMounted(() => {
            getJobDetails()

        })
        return {

        }
    }
};
</script>


<style lang="scss" scoped></style>
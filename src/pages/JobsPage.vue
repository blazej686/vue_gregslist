<template>
    <div>
        <div class="container-fluid">
            <section class="row">
                <div class="col-12 p-4">
                    <h1>
                        This is the Jobs page!
                        <button class="btn btn-outline-dark">
                            🚗
                        </button>
                    </h1>
                </div>
            </section>
            <section class="row">
                <div v-for="job in jobs" :key="job.id" class="col-12">
                    <JobCardComponent :jobProp="job" />
                </div>
            </section>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, onMounted } from 'vue';
import { jobsService } from '../services/JobsService.js'
import Pop from '../utils/Pop.js';
import JobCardComponent from '../components/JobCardComponent.vue';

export default {
    setup() {
        async function getJobs() {
            try {
                await jobsService.getJobs();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        onMounted(() => {
            getJobs();
        });
        return {
            jobs: computed(() => AppState.jobs)
        };
    },
    components: { JobCardComponent }
};
</script>


<style lang="scss" scoped></style>
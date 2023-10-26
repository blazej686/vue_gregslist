import { AppState } from "../AppState.js"
import { Job, } from "../models/Job.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class JobsService {

    async getJobs() {
        const res = await api.get('api/jobs')
        logger.log('jobs', res.data)
        const newJobs = res.data.map(pojo => new Job(pojo))
        AppState.jobs = newJobs

    }

}

export const jobsService = new JobsService()
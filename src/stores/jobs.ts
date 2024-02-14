import { defineStore } from 'pinia'
import getJobs from '@/api/getJobs'
import { useUserStore } from './user'
import type { Job } from '@/api/types'
export const FETCH_JOBS = 'FETCH_JOBS'
export const UNIQUE_ORGANIZATIONS = 'UNIQUE_ORGANIZATIONS'
export const UNIQUE_JOB_TYPES = 'UNIQUE_JOB_TYPES'
export const FILTERED_JOBS = 'FILTERED_JOBS'

export interface JobsState {
  jobs: Job[]
}

export const useJobsStore = defineStore('jobs', {
  state: (): JobsState => ({
    jobs: []
  }),
  actions: {
    async [FETCH_JOBS]() {
      const jobs = await getJobs()
      this.jobs = jobs
    }
  },
  getters: {
    [UNIQUE_ORGANIZATIONS](state): Set<string> {
      const uniqueOrganizations = new Set<string>()
      state.jobs.forEach((job) => uniqueOrganizations.add(job.organization))
      return uniqueOrganizations
    },
    [UNIQUE_JOB_TYPES](state): Set<string> {
      const uniqueJobTypes = new Set<string>()
      state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType))
      return uniqueJobTypes
    },
    [FILTERED_JOBS](state): Job[] {
      const userStore = useUserStore()

      const noSelectedOrganizations = userStore.selectedOrganizations.length === 0
      const noSelectedJobTypes = userStore.selectedJobTypes.length === 0
      const noSelectedDegrees = userStore.selectedDegrees.length === 0

      return state.jobs
        .filter((job) => {
          if (noSelectedOrganizations) return true
          return userStore.selectedOrganizations.includes(job.organization)
        })
        .filter((job) => {
          if (noSelectedJobTypes) return true
          return userStore.selectedJobTypes.includes(job.jobType)
        })
        .filter((job) => {
          if (noSelectedDegrees) return true
          return userStore.selectedDegrees.includes(job.degree)
        })
        .filter((job) =>
          job.title.toLocaleLowerCase().includes(userStore.skillsSearchTerm.toLocaleLowerCase())
        )
    }
  }
})

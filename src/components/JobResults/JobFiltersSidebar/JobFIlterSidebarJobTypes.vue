<template>
  <job-filters-side-bar-check-box-group
    :unique-values="UNIQUE_JOB_TYPES"
    :action="ADD_SELECTED_JOB_TYPES"
  />
</template>

<script lang="ts" setup>
import { useJobsStore } from '@/stores/jobs'
import { useUserStore } from '@/stores/user'
import { computed } from 'vue'

import JobFiltersSideBarCheckBoxGroup from './JobFiltersSideBarCheckBoxGroup.vue'

const jobsStore = useJobsStore()
const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES)

const userStore = useUserStore()
const ADD_SELECTED_JOB_TYPES = userStore.ADD_SELECTED_JOB_TYPES
</script>

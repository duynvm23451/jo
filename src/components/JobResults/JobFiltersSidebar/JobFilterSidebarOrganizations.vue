<template>
  <job-filters-side-bar-check-box-group
    :unique-values="UNIQUE_ORGANIZATIONS"
    :action="ADD_SELECTED_ORGANIZATIONS"
  />
</template>

<script lang="ts" setup>
import { useJobsStore } from '@/stores/jobs'
import { useUserStore } from '@/stores/user'
import { computed } from 'vue'

import JobFiltersSideBarCheckBoxGroup from './JobFiltersSideBarCheckBoxGroup.vue'

const jobsStore = useJobsStore()
const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS)

const userStore = useUserStore()
const ADD_SELECTED_ORGANIZATIONS = userStore.ADD_SELECTED_ORGANIZATIONS
</script>

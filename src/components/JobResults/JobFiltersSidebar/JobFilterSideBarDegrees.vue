<template>
  <job-filters-side-bar-check-box-group
    :unique-values="UNIQUE_DEGREES"
    :action="ADD_SELECTED_DEGREES"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import JobFiltersSideBarCheckBoxGroup from './JobFiltersSideBarCheckBoxGroup.vue'

import { useDegreesStore } from '@/stores/degrees'
import { useUserStore } from '@/stores/user'

const degreesStore = useDegreesStore()
const UNIQUE_DEGREES = computed(() => degreesStore.UNIQUE_DEGREES)

const userStore = useUserStore()
const ADD_SELECTED_DEGREES = userStore.ADD_SELECTED_DEGREES
</script>

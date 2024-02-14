<template>
  <div class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4">
    <seaction class="pb-5">
      <job-filter-side-bar-prompt />
      <job-filters-side-bar-skills />
      <collapsible-accordion header="Job Types">
        <job-filter-sidebar-job-types />
      </collapsible-accordion>
      <collapsible-accordion header="Organization Types">
        <job-filter-sidebar-organizations />
      </collapsible-accordion>
      <collapsible-accordion header="Degree Types">
        <job-filter-side-bar-degrees />
      </collapsible-accordion>
      <!-- <job-filter-sidebar-organizations />
      <job-f-ilter-sidebar-job-types /> -->
    </seaction>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

import JobFilterSideBarPrompt from './JobFilterSideBarPrompt.vue'
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'
import JobFilterSidebarJobTypes from './JobFilterSidebarJobTypes.vue'
import JobFilterSidebarOrganizations from './JobFilterSidebarOrganizations.vue'
import JobFilterSideBarDegrees from './JobFilterSideBarDegrees.vue'
import JobFiltersSideBarSkills from './JobFiltersSideBarSkills.vue'

import { useUserStore } from '@/stores/user'

const route = useRoute()
const userStore = useUserStore()

const parseSkillsSearchTerm = () => {
  const role = (route.query.role as string) || ''
  userStore.UPDATE_SKILLS_SEARCH_TERM(role)
}

onMounted(parseSkillsSearchTerm)
</script>

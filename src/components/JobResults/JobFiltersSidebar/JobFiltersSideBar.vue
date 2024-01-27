<template>
  <div class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4">
    <seaction class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>

      <job-filter-sidebar-organizations />
    </seaction>
  </div>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue'
import JobFilterSidebarOrganizations from './JobFilterSidebarOrganizations.vue'
export default {
  name: 'JobFiltersSideBar',
  components: { ActionButton, JobFilterSidebarOrganizations }
}
</script>

import { createRouter, createWebHashHistory } from 'vue-router'

import HomeViewVue from '@/views/HomeView.vue'
import JobResultsViewVue from '@/views/JobResultsView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeViewVue
  },
  {
    path: '/jobs/results',
    name: 'JobResults',
    component: JobResultsViewVue
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

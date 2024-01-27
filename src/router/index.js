import { createRouter, createWebHashHistory } from 'vue-router'

import HomeViewVue from '@/views/HomeView.vue'
import JobResultsViewVue from '@/views/JobResultsView.vue'
import JobViewVue from '@/views/JobView.vue'
import TeamsViewVue from '@/views/TeamsView.vue'
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
  },
  {
    path: '/jobs/results/:id',
    name: 'JobListing',
    component: JobViewVue
  },
  {
    path: '/teams',
    name: 'Teams',
    component: TeamsViewVue
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: 'smooth' }
  }
})

export default router

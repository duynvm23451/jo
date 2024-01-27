import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/index.css'
import router from './router'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAngleDown, faAngleUp, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleDown)
library.add(faAngleUp)
library.add(faSearch)

const pinia = createPinia()

createApp(App).use(pinia).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

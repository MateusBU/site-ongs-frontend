import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // icons Material Design
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//vue-toastification
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'


const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
    .use(vuetify)
    .use(router)
    .use(Toast, {
      timeout: 3000,
      icon: true,
    })
    .mount('#app')

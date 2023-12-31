import { createApp } from 'vue'
import './assets/index.less'
import App from './App.vue'
import i18n from './i18n'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { vuetify } from './plugins/vuetify'

createApp(App)
  .use(vuetify)
  .use(i18n)
  .use(router)
  .mount('#app')


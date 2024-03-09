import '../main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { useTasksStore } from '/src/store/tasks'
// Добавляем экземпляр хранилища в глобальное свойство приложения

import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})
//________________________________________________________________

const app = createApp(App)

app.use(createPinia())
app.config.globalProperties.$tasksStore = useTasksStore()

app.use(vuetify)

app.mount('#app')

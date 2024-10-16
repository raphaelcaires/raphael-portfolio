import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import quasarOptions from './quasar-options'

const app = createApp(App)
app.use(Quasar, quasarOptions)
app.use(createPinia())
app.use(router)

app.mount('#app')

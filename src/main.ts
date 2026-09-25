import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from './composables/useI18n'
import './styles/theme.scss'

const app = createApp(App)

const i18n = createI18n()

app.use(router)
app.use(i18n)

app.mount('#app')

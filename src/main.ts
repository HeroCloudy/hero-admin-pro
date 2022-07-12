import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import HeroAdminUi from 'hero-admin-ui'
import '@/scss/index.scss'

const app = createApp(App)
app.use(ElementPlus)
app.use(HeroAdminUi)

app.use(store).use(router).mount('#app')

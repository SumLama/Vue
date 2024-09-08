import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './Routes/routes'
const pinia = createPinia()
createApp(App)
.use(pinia)
.use(router)
.mount('#app')

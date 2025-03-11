import './input.css'
import '@splidejs/splide/css'
import 'animate.css'

import { inject } from '@vercel/analytics';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
inject()

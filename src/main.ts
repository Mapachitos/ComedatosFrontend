import './index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    
})
app.use(ElementPlus);

app.mount('#app')
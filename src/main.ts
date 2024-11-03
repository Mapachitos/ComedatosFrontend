import './assets/main.css'
import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// PrimeVue
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
//app.use(PrimeVue); -> Sin css
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount('#app')

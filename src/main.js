import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'
import VueSweetalert2 from 'vue-sweetalert2';
import globalComponents from './components/index.js';
import Footer from './footers/Footer.vue'
import 'notyf/notyf.min.css'
import 'sweetalert2/dist/sweetalert2.min.css';

const pinia = createPinia()
const app = createApp(App)

globalComponents(app);
app.component("Footer", Footer);
app.use(router)
app.use(VueSweetalert2)
app.use(pinia);
app.mount('#app')

import {createApp} from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './route/router.js'
import pinia from "./store/pinia.js";


const app = createApp(App);

app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')

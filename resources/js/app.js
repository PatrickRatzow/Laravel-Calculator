import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler.js'
import { createPinia } from "pinia";
import App from './App.vue'

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.mount("#app")

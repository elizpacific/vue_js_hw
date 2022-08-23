import { createApp } from 'vue'
//import App from './App.vue'
import router from './router'
import MyApp from "./MyApp.vue";

createApp(MyApp).use(router).mount('#app')

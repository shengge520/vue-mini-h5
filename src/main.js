import Vue, { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
// 导入vant
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

const app = createApp(App)



app.use(router)
app.mount('#app')

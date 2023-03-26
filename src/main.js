import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
// 导入vant
import Vant from "vant";
import "vant/lib/index.css";

const app = createApp(App)

Vue.use(Vant);

app.use(router)
app.mount('#app')

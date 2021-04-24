import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"

// 1. 定义路由组件， 注意，这里一定要使用 文件的全名（包含文件后缀名）
import Home from "../views/home.vue";

// 2. 定义路由配置
const routes = [
  { 
    path: "/",
    redirect: '/home'
  },
  { path: "/home", component: Home }
];

// 3. 创建路由实例
const router = createRouter({
  // 4. 采用hash 模式
//   history: createWebHashHistory(),
  // 采用 history 模式
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router
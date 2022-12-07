import { createRouter, createWebHashHistory } from 'vue-router'
//引入组件
const Home = () => import('../components/Home.vue')
const Register = () => import('../components/Register.vue')

// 创建并暴露一个路由器
const routes = [
        {
            path: '/',
        redirect:"/Home"
        },

        {   
            path: '/Home',
            component: Home
        },

        {
            path: '/Register',
            component: Register
        }
        
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})


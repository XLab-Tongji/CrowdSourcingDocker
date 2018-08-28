import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Center from '@/views/Center'
import Projects from '@/views/Projects'
import ProjectDetail from '@/views/ProjectDetail'
import Workers from '@/views/Workers'
import store from '../vuex/store'

// 引入样式
import 'vue-easytable/libs/themes-base/index.css'
// 导入 table 和 分页组件
import {VTable,VPagination} from 'vue-easytable'

// 注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/register',
        name: 'Register',
        component: Register
    }, {
        path: '/center',
        name: 'Center',
        meta: {
            requireAuth: true
        },
        component: Center
    }, {
        path: '/projects',
        name: 'Projects',
        component: Projects
    }, {
        path: '/projectDetail',
        name: 'ProjectDetail',
        // meta: {
        //     requireProjectId: true
        // },
        component: ProjectDetail
    },{
        path:'/workers',
        name:"Workers",
        component: Workers
    }]
})

//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
    if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
        if(store.state.user.tokenid){// 判断是否登录
            next()
        }
        else if(sessionStorage.tokenid){
            store.state.user.tokenid = sessionStorage.tokenid;
            store.state.user.username = sessionStorage.username;
            store.state.user.realname = sessionStorage.realname;
            store.state.user.mobile = sessionStorage.mobile;
            store.state.user.email = sessionStorage.email;
            next()
        }
        else {// 没登录则跳转到登录界面
            next({
            path: '/login',
            query: {redirect: to.fullPath}
            })
        }
    }
    else if(to.matched.some(res => res.meta.requireProjectId)) {
        if(store.state.projectId){
            next()
        }
        else {
            next({
                path: '/projects',
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
      next()
    }
  });

export default router

import { createRouter, createWebHashHistory } from "vue-router";

import DashboardView from "@/views/DashboardView.vue";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import UserView from "@/views/UserView.vue";
import MessageView from "@/views/MessageView.vue";
import SettingView from "@/views/SettingView.vue"; 
import DepthMenu from "@/views/depth1/DepthMenu.vue"; 
import Provide from "@/components/test/Provide.vue";

import BoardView from "@/views/BoardView.vue";
import BoardListView from "@/views/BoardListView.vue";
import BoardWrite from "@/views/BoardWrite.vue";

const routes = [
    {
        path : '/',
        name : 'home',
        component : HomeView
    },
    {
        path : '/dashboard',
        name : 'dashboard',
        component : DashboardView
    },
    {
        path : '/login',
        name : 'login',
        component : LoginView
    },
    {
        path : '/user',
        name : 'user',
        component : UserView
    },
    {
        path : '/message',
        name : 'message',
        component : MessageView
    },
    {
        path : '/board',
        name : 'board',
        component : BoardListView
    }, 
    {
        path : '/boardDetail',
        name : 'boardDetail',
        component : BoardView
    }, 
    {
        path: '/boardwrite',
        name: 'BoardWrite',
        component: BoardWrite,
        //meta: { requireLogin: true }
    },
    {
        path : '/setting',
        name : 'setting',
        component : SettingView
    }, 
    {
        path : '/test/Provide',
        name : 'provide',
        component : Provide
    }
];

const router = createRouter({
    history : createWebHashHistory(),
    routes
});
import { UserStore } from "@/store/userStore";
import { storeToRefs } from "pinia"; 


router.beforeEach((to, from, next) => { 
	if (to.meta.requireLogin) { 
        const userStore = UserStore();
        const userInfo =storeToRefs(userStore);  
		const  isLogin = userInfo.isLoggedIn.value; 
		if (!isLogin) {
			next('/login?returnUrl=' + to.fullPath);
		} else {
			next();
		}
	} else {
		next();
	}
});

export default router;
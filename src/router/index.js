import { createRouter, createWebHashHistory } from "vue-router";
import DashboardView from "@/views/DashboardView.vue";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import UserView from "@/views/UserView.vue";
import MessageView from "@/views/MessageView.vue";
import SettingView from "@/views/SettingView.vue";

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
        path : '/setting',
        name : 'setting',
        component : SettingView
    }
];

const route = createRouter({
    history : createWebHashHistory(),
    routes
});


export default route;
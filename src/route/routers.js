export const staticRoutes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        // 首页
        path: "/home",
        component: () => import("../pages/Home/Home.vue"),
        name: "HomeView",
    }, {
        // 首页
        path: "/login",
        component: () => import("../pages/Login/Login.vue"),
        name: "LoginView",
    }, {
        path: "/manage",
        component: () => import("../pages/Manage/Manage.vue"),
        name: "ManageView",
    }, {
        path: "/classification",
        component: () => import("../pages/Classification/Classification.vue"),
        name: "ClassificationView",
    }

];
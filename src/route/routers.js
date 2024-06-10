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
    }, {
        path: "/order",
        component: () => import("../pages/Order/Order.vue"),
        name: "OrderView",
    }, {
        path: "/user",
        component: () => import("../pages/User/User.vue"),
        name: "UserView",
    }, {
        path: "/system",
        component: () => import("../pages/System/System.vue"),
        name: "SystemView",
    },{
        path: "/manageAdd",
        component: () => import("../pages/Manage/ManageAdd.vue"),
        name: "ManageAddView",
    }

];
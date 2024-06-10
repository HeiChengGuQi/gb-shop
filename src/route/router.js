import {createRouter, createWebHistory} from "vue-router";
import {staticRoutes} from "./routers.js";
import {defineUser} from "../store/userInfo.js";
import pinia from "../store/pinia.js";

const router = createRouter({
    history: createWebHistory(),
    routes: staticRoutes,
});
const sysUser = defineUser(pinia);
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next()
    } else {
        if (sysUser.uid != null && sysUser.uid != "") {
            next()
        } else {
            next('/login')
        }
    }
})
export default router;
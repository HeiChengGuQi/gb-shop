import {createRouter, createWebHistory} from "vue-router";
import {staticRoutes} from "./routers.js";

const router = createRouter({
    history: createWebHistory(),
    routes: staticRoutes,
});
router.beforeEach((to,from,next)=>{
    if (to.path==='/login'){
        //判断如果是去登录视图直接放行即可
        next()
    }else{
        //其他任何资源都要登录之后才会放行
        const username = sessionStorage.getItem("username");
        if (null!=username){
            next()
        }else{
            next('/login')
        }
    }
})
export default router;
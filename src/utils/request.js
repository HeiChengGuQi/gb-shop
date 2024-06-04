import axios from 'axios'
import NProgress from "nprogress";
import {useUserInfoStore} from "../store/userInfo.js";
import pinia from "../store/pinia.js";

//  创建instance实例
const instance = axios.create({
    baseURL: 'http://localhost/'

})

//  添加请求拦截
instance.interceptors.request.use(
    // 设置请求头配置信息
    config => {
        //处理指定的请求头
        NProgress.start()//开启进度条
        const userInfoStore = useUserInfoStore(pinia) // 如果不是在组件中调用,必须传入pinia
        const token = userInfoStore.token
        if (token) {
            // config.headers['token'] = token  // 报错: headers对象并没有声明有token, 不能随便添加
            (config.headers)['token'] = token
        }
        return config
    },
    // 设置请求错误处理函数
    error => {

        return Promise.reject(error)
    }
)
// 添加响应拦截器
instance.interceptors.response.use(
    // 设置响应正确时的处理函数
    response => {
        NProgress.done()//关闭进度条
        if (response.data.code !== 200) {

        } else {
            return response.data.data;
        }
        return response
    },
    // 设置响应异常时的处理函数
    error => {
        NProgress.done()//关闭进度条
        return Promise.reject(error)
    }
)
// 默认导出
export default instance
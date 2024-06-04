import {defineStore} from 'pinia';

/*
专门用于存储用户状态信息的pinia

 */
export const defineUser = defineStore(
    "loginUser", {
        state: () => {
            return {
                uid: 0,
                username: ''
            }
        },
        getters: {},
        actions: {}
    }
)
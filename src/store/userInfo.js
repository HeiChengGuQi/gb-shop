import {defineStore} from 'pinia';

/*
专门用于存储用户状态信息的pinia

 */
export const defineUser = defineStore(
    "loginUser", {
        state: () => {
            return {
                uid: '',//用户id
                username: '',//用户账户
                nickName: '',//用户昵称
                avatar: '',//用户头像
                level: '',//用户等级
                start: ''//是否启用
            }
        },
        getters: {
            getNickName() {
                return this.nickName;
            },
        },
        actions: {
            //初始化用户用于用户退出
            initUser(data) {
                this.uid = data.uid;
                this.username = data.username;
                this.nickName = data.nickName;
                this.avatar = data.avatar;
                this.level = data.level;
                this.start = data.start;
            }
        }
    }
)
import {defineStore} from "pinia";

export const defineCommodityInfo = defineStore(
    "commodityInfo", {
        state: () => {
            return {
                commodityInfo: []
                // cid:"",
                // gid:"",
                // uid:"",
                // title:"",
                // img:"",
                // price:"",
                // number:""
            }
        }
    }
)

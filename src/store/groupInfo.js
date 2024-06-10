import {defineStore} from "pinia";

export const defineGroupInfo = defineStore(
    "groupInfo", {
        state: () => {
            return {
                commodityList: [
                    {
                        gid: "",
                        gname: "",
                        icon: "",
                        commodities: []
                    }
                ]
            }
        }
    }
)

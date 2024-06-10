import request from "../utils/request.js";

export const getLogin = (loginUser) => {
    return request.put("user/login", loginUser);
}

export const getCommodityList = (uid) => {
    return request.get('commodity/list/' + uid);
}
export const getGroupInfo = (uid) => {
    return request.get(`/group/list/${uid}`);
}

export const getUsers=()=>{
    return request.get('/user/list');
}
export const getCommodityByCid=(cid)=>{
    return request.get(`/commodity/getCommodityByCid/${cid}`);
}
export const getGroupAll=()=>{
    return request.get('/group/all');
}
export const saveCommodityInfo = (data)=>{
    return request.post(`/commodity/saveCommodityInfo`, data);
}
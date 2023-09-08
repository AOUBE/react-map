import axios from "axios";

// 逆地理编码
export function regeo(params) {
    return axios({
        url: 'https://restapi.amap.com/v3/geocode/regeo',
        method: 'get',
        params: params
    })
}

// 输入提示
export function inputTips(params) {
    return axios({
        url: "https://restapi.amap.com/v3/assistant/inputtips",
        method: 'get',
        params: params
    })
}

//关键字搜索
export function placeText(params) {
    return axios({
        url: "https://restapi.amap.com/v5/place/text",
        method: 'get',
        params: params
    })
}
//周边搜索
export function placeAround() {
    return axios({
        url: "https://restapi.amap.com/v5/place/around",
        method: 'get',
        params: params
    })
}
//ID搜索
export function placeDetail() {
    return axios({
        url: "https://restapi.amap.com/v5/place/detail",
        method: 'get',
        params: params
    })
}

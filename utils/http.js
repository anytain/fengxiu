import {config} from "../config/config";
import {promisic} from "./utils";

class Http {
    static async request({url,data,method='GET'}){
        console.log(url)
       const res= await promisic(wx.request)({
            url:`${config.apiBaseUrl}${url}`,
            data,
            method,
            header:{
                appkey:config.appkey
            }
        })
        return res.data
    }
}


export {
    Http
}
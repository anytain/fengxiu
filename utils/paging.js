import {Http} from "./http";

class Paging {
    count
    start
    req
    locker = false
    url
    moreData = true
    accumulator=[]
    constructor(req, count = 10, start = 0) {
        this.start = start
        this.count = count
        this.req = req
        this.url = req.url
    }

    async getMoreData() {
        if(!this.moreData){
            return
        }
        if(!this._getLocker()){
            return
        }
        const data = await this._actualGetData()
        this._releaseLocker()
        return data
    }

    _accumulator(items){
        this.accumulator = this.accumulator.concat(items)
    }
    async _actualGetData(){
        const req = this._getCurrentReq()
        let paging = await Http.request(req)
        if(!paging){
            return null
        }
        if (paging.total===0){
            return {
                empty:true,
                items:[],
                moreData:false,
                accumulator:[]//计算器
            }
        }
        this.moreData = Paging._moreData(paging.total_page,paging.page)
        if(this.moreData){
            this.start +=this.count
        }
        this._accumulator(paging.items)
        return {
            empty:false,
            items:paging.items,
            moreData:this.moreData,
            accumulator:[]//计算器
        }
    }
    static _moreData(totalPage,pageNum){
        return pageNum < totalPage-1
    }
    _getCurrentReq(){
        let url = this.url
        const params = `start=${this.start}&count=${this.count}`
        if(url.includes('?')){
            url+='&'+params
        }else {
            url+='?'+params
        }
        this.req.url = url
        return this.req
    }
    _getLocker() {
        if (this.locker) {
            return false
        }
        this.locker = true
        return true

    }

    _releaseLocker(){
        this.locker = false
    }
}
export {
    Paging
}
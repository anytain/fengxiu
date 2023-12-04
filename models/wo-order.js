import {Http} from "../utils/http";

class WoOrder {
    wid
    total_price
    select_stock
    phone
    remark
    constructor(wId,totalPrice,stock,phone,remark) {
        this.wid=wId
        this.total_price=totalPrice
        this.remark=remark
        this.select_stock=stock
        this.phone = phone
    }

    static async postWoOrderToServer(orderPost) {
        return await Http.request({
            url: 'woOrder',
            method: 'POST',
            data: orderPost,
            throwError: true
        })
    }
}
export {
    WoOrder
}

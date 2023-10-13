import {OrderException} from "../core/order-exception";
import {OrderExceptionType} from "../core/enum";

class Order {
    orderItems
    localItemCount
    constructor(orderItems,itemCount) {
        this.orderItems = orderItems
        this.itemCount = itemCount
    }
    checkOrderOk(){
        this.orderItems.forEach(item=>{
            item.isOk()
        })
    }
    _orderIsOk(){
        this._emptyOrder()
        this._containNotOnSaleItem()
    }
    _containNotOnSaleItem() {
        if (this.orderItems.length !== this.localItemCount) {
            throw new OrderException('服务器返回订单商品数量与实际不相符，可能是有商品已下架', OrderExceptionType.NOT_ON_SALE)
        }
    }

    _emptyOrder() {
        if (this.orderItems.length === 0) {
            throw new OrderException('订单中没有任何商品', OrderExceptionType.EMPTY)
        }
    }
}
export {
    Order
}
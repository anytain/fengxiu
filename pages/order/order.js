// pages/order/order.js
import {Cart} from "../../models/cart";
import {OrderItem} from "../../models/order-item";
import {Sku} from "../../models/sku";
import {Order} from "../../models/order";

const cart = new Cart()
Page({

    /**
     * 页面的初始数据
     */
    data: {},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let orderItems
        let localItemCount
        const skuIds = cart.getCheckedSkuIds()
        orderItems = this.getCartOrderItems(skuIds)
        localItemCount = skuIds.length
        const order = new Order(orderItems, localItemCount)
        try{
            order.checkOrderOk()
        }catch (e){
            console.error(e)
            return
        }


    },
    async getCartOrderItems(skuIds) {
        const skus = await Sku.getSkusByIds(skuIds)
        const orderItems = this.packageOrderItems(skus);
        return orderItems
    },

    packageOrderItems(skus) {
        return skus.map(sku => {
            const count = cart.getSkuCountBySkuId(sku.id)
            return new OrderItem(sku, count)
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})
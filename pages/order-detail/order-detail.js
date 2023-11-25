// pages/order-detail/order-detail.js
import {Payment} from "../../models/payment";
import {Order} from "../../models/order";
import {OrderDetail} from "../../models/order-detail";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    oid: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
 async onLoad(options) {
    const oid = options.oid
    this.data.oid = oid
    const order = await Order.getDetail(oid)
    const detail = new OrderDetail(order)
    this.setData({
      order: detail
    })
  },
  async onPay(event) {
    const oid = this.data.oid
    if (!oid) {
      // this.enableSubmitBtn()
      return
    }
    wx.lin.showLoading({
      type: "flash",
      fullScreen: true,
      color: "#157658"
    })
    const payParams = await Payment.getPayParams(oid)
    // let payStatus = OrderStatus.UNPAID
    let res
    try {
      res = await wx.requestPayment(payParams)
      wx.lin.hideLoading()
      wx.navigateTo({
        url: `/pages/pay-success/pay-success?oid=${oid}`
      })
    } catch (e) {
      wx.lin.hideLoading()
    }
  },

  onPaySuccess(event) {
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

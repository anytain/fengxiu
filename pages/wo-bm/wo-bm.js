// pages/wo-bm/wo-bm.js
import {showToast} from "../../utils/ui";
import {phoneCheck} from "../../utils/utils";
import {Cart} from "../../models/cart";
import {accMultiply} from "../../utils/number";
import {WoOrder} from "../../models/wo-order";
import {Order} from "../../models/order";
import {Payment} from "../../models/payment";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    wstock:Cart.SKU_MAX_COUNT,
    wcount:1,
    wphone:null,
    wremark:null,
    selectStock:1,
    submitBtnDisable:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      const nc = options.nc;
      const wid = options.wId;
      const wprice = options.price;
      const wstock = options.stock;
      const totalPrice = accMultiply(this.data.wcount,wprice)
      this.setData({
        nc,
        wid,
        wprice,
        wstock,
        totalPrice
      })
  },
  onPhone(event){
    console.log(event.detail)
    const phone = event.detail.value;
    const pLength = phoneCheck(phone)
    if(!pLength){
      showToast('请输入正确的手机号')
    }else {
      this.setData({
        wphone:phone
      })
    }

  },
  onRemark(event){
    console.log(event.detail)
    const remark = event.detail.value;
    this.setData({
      wremark:remark
    })

  },
  onSelectCount(event){
    const wocount = event.detail.count
    const selectStock = wocount;
    const isOutStock =  this.outStock(this.data.wstock,wocount)
    if(isOutStock){
      showToast('蜗的库存量只有'+this.data.wstock+'啦')
    }else {
      const totalPrice = accMultiply(wocount,this.data.wprice)
      this.setData({
        totalPrice,
        selectStock
      })
    }

  },
  outStock(stock,currentCount){
    return stock<currentCount
  },
  async onWoPay(){
    const phone =phoneCheck(this.data.wphone)
    if(phone){
      //提交订单拉起支付
      const wopost = new WoOrder(
          this.data.wid,
          this.data.totalPrice,
          this.data.selectStock,
          this.data.wphone,
          this.data.wremark
      );
      console.log(wopost)
      const oid = await this.postOrder(wopost)
      if (!oid) {
        this.enableSubmitBtn()
        return
      }
      wx.lin.showLoading({
        type: "flash",
        fullScreen: true,
        color: "#157658"
      })
      const payParams = await Payment.getWoPayParams(oid)
      if (!payParams) {
        return
      }
      try {
        const res = await wx.requestPayment(payParams)
        wx.redirectTo({
          url: `/pages/pay-success/pay-success?oid=${oid}`
        })
      } catch (e) {
        wx.redirectTo({
          url: `/pages/my-order/my-order?key=${1}`
        })
      }

    }else {
      showToast('请输入正确的手机号')
    }
  },

  disableSubmitBtn() {
    this.setData({
      submitBtnDisable: true
    })
  },

  enableSubmitBtn() {
    this.setData({
      submitBtnDisable: false
    })
  },

  async postOrder(orderPost) {
    try {
      const serverOrder = await WoOrder.postWoOrderToServer(orderPost)
      if (serverOrder) {
        return serverOrder.id
      }
      // throwError
    } catch (e) {
      // code
      this.setData({
        orderFail: true,
        orderFailMsg: e.message
      })
    }
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

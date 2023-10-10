// pages/detail/detail.js
import {Spu} from "../../models/spu";
import date from "../../miniprogram_npm/lin-ui/common/async-validator/validator/date";
import {ShoppingWay} from "../../core/enum";
import {SaleExplain} from "../../models/sale-explain";
import {getWindowHeightRpx} from "../../utils/system";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showRealm:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    const pid = options.pid;
    const spu =await Spu.getDetail(pid);
    const explain = await SaleExplain.getFixed();
    const windowHeight = await getWindowHeightRpx()
    const h = windowHeight - 100
    this.setData({
      spu,
      explain,
      h
    })
  },
  onShopping(event){
    const chooseSku = event.detail.sku
    const skuCount = event.detail.skuCount
    if (event.detail.orderWay === ShoppingWay.CART){

    }
  },
  onGoToHome(event){
    wx.switchTab({
      url:`/pages/home/home`
    })
  },
  onGoToCart(event){
    wx.switchTab({
      url:`/pages/cart/home`
    })
  },
  onSpecChange(event){
    this.setData({
      specs:event.detail
    })
  },
  onAddToCart(event){
    this.setData({
      showRealm:true,
      orderWay:ShoppingWay.CART
    })
  },
  onBuy(event){
    this.setData({
      showRealm:true,
      orderWay:ShoppingWay.BUY

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
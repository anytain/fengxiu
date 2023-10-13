// pages/detail/detail.js
import {Spu} from "../../models/spu";
import date from "../../miniprogram_npm/lin-ui/common/async-validator/validator/date";
import {ShoppingWay} from "../../core/enum";
import {SaleExplain} from "../../models/sale-explain";
import {getWindowHeightRpx} from "../../utils/system";
import {Cart} from "../../models/cart";
import {CartItem} from "../../models/cart-item";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showRealm:false,
    cartItemCount:0
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
    this.updateCartItemCount()
  },
  onShopping(event){
    const chooseSku = event.detail.sku
    const skuCount = event.detail.skuCount
    if (event.detail.orderWay === ShoppingWay.CART){
      const cart = new Cart()
      const cartItem = new CartItem(chooseSku,skuCount)
      cart.addItem(cartItem)
      this.updateCartItemCount()
    }
  },
  updateCartItemCount(){
    const cart = new Cart()
    this.setData({
      cartItemCount:cart.getCartItemCount(),
      showRealm:false
    })
  },
  onGoToHome(event){
    wx.switchTab({
      url:`/pages/home/home`
    })
  },
  onGoToCart(event){
    wx.switchTab({
      url:`/pages/cart/cart`
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
// pages/cart/cart.js
import {Cart} from "../../models/cart";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartItems:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    const cart = new Cart()
    const cartItems = cart.getAllCartItemFromLocal().items;
    this.setData({
      cartItems:cartItems
    })
  },


})
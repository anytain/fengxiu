// app.js
import {Cart} from "./models/cart";
import {Token} from "./models/token";

App({
 /* onLaunch() {
    const cart = new Cart()
    if(!cart.isEmpty()){
      wx.showTabBarRedDot({
        index:2
      })
    }
    const token = new Token()
    token.verify()
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }*/

  onLaunch() {
    const cart = new Cart()
    if (!cart.isEmpty()) {
      wx.showTabBarRedDot({
        index: 2
      })
    }

    const token = new Token()
    token.verify()
  }
})

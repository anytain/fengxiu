// pages/sleeve/sleeve.js
import {Theme} from "../../models/theme";
import {Banner} from "../../models/banner";
import {Category} from "../../models/category";
import {Activity} from "../../models/activity";
import {Sleeve} from "../../models/sleeve";
import {WoCategories} from "../../models/wo-categories";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    themeS: null,
    loadingType:'loading',
    hd:null,
    categoryQ:null,
    categoryH:null,
    categoryX:null,
    categoryL:null,
    categoryW:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.initSleeveData()
    this.initSleeveHd()
    this.intWoCategoies()
  },

  async initSleeveHd(){
      const sleeve = new Sleeve();
      const hd = await sleeve.getSleeves();
      this.setData({
        hd
      })

  },

  async intWoCategoies(){
    const woCategories = new WoCategories()
    await woCategories.getAll()
    const roots = woCategories.getRoots()
    const subs = woCategories.getWoSubs();
    const categoryQ  =woCategories.getCategoryQ();
    const categoryH  =woCategories.getCategoryH();
    const categoryX  =woCategories.getCategoryX();
    const categoryL  =woCategories.getCategoryL();
    const categoryW  =woCategories.getCategoryW();

    this.setData({
      roots,
      subs,
      categoryQ,
      categoryH,
      categoryX,
      categoryL,
      categoryW
    })
  },
  async initSleeveData() {
    const theme = new Theme()
    await theme.getThemes()
    const themeS =  theme.getHomeLocationS();

    this.setData({
      themeS
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

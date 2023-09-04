// pages/home/home.js

import {config} from "../../config/config";
import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        bannerB: null,
        grid: [],
        activityD: null,
        themeE: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        this.initAllData()
    },
    async initAllData() {
        const theme = new Theme()
        await theme.getThemes()
        const themeA =  theme.getHomeLocationA();
        const themeE =  theme.getHomeLocationE();
        const themeF =  theme.getHomeLocationF();
        const themeH =  theme.getHomeLocationH();
        let themeESpu = []
        if(themeE.online){
            const data = await Theme.getHomeLocationnESpu()
            if(data){
                themeESpu = data.spu_list.slice(0,8)
            }
        }
        const bannerB = await Banner.getHomeLocationB()
        const bannerG = await Banner.getHomeLocationG();
        const grid = await Category.getGridCategory()
        const activityD = await Activity.getHomeLocationD()
        this.setData({
            themeA,
            bannerB,
            bannerG,
            grid,
            activityD,
            themeE,
            themeESpu,
            themeF,
            themeH
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
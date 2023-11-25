// pages/home/home.js

import {config} from "../../config/config";
import {Theme} from "../../models/theme";
import {Banner} from "../../models/banner";
import {Category} from "../../models/category";
import {Activity} from "../../models/activity";
import {SpuPaging} from "../../models/spu-paging";
import {CouponCenterType, CouponType} from "../../core/enum";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        bannerB: null,
        grid: [],
        activityD: null,
        themeE: null,
        spuPaging:null,
        loadingType:'loading'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        this.initAllData()
        this.initBottomSpuList()
    },
    async initBottomSpuList(){
        const paging = await SpuPaging.getLatestPaging()
        this.data.spuPaging = paging;
        const data = await paging.getMoreData()
        if(!data){
            return
        }
        //瀑布流内部累加
        wx.lin.renderWaterFlow(data.items)
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
    onGoToCoupons(event){
      const name = event.currentTarget.dataset.aname;
      wx.navigateTo({
          url:`/pages/coupon/coupon?name=${name}&type=${CouponCenterType.ACTIVITY}`
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
    async onReachBottom() {
        const data = await this.data.spuPaging.getMoreData();
        if(!data){
            return
        }
        wx.lin.renderWaterFlow(data.items)
        if(!data.moreData){
            this.setData({
                loadingType:'end'
            })
        }
        console.log(data.items);
        console.log(this.data.loadingType);

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})

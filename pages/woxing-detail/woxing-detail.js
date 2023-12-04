// pages/woxing-detail/woxing-detail.js
import {Sleeve} from "../../models/sleeve";
import {getWindowHeightRpx} from "../../utils/system";
import {promisic} from "../../utils/utils";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        hdItems: [],
        loadingType: 'loading',

    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        const hid = options.hid;
        const sleeve = new Sleeve();
        const singleHd = await sleeve.getSleeve(hid)
        const hdItems = singleHd.items
        const windowHeight = await getWindowHeightRpx()
        const h = windowHeight - 70
        console.log(singleHd)
        console.log(hdItems)
        let loadingType =  this.data.loadingType
        if(hdItems){
            loadingType='end'
        }
        this.setData({
            singleHd,
            hdItems,
            h,
            loadingType
        })

    },

    onGoToWoPay(event) {
        const nc = event.detail.nickName
        const stock = this.data.singleHd.stock;
        const price = this.data.singleHd.price;
        const wId = this.data.singleHd.id
        wx.navigateTo({
            url: `/pages/wo-bm/wo-bm?wId=${wId}&nc=${nc}&stock=${stock}&price=${price}`
        })

    },
    onGoToWoHome(event) {
        console.log('home')
        wx.switchTab({
            url: `/pages/sleeve/sleeve`
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
        console.log("dddd")
        this.setData({
            loadingType: 'end'
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})

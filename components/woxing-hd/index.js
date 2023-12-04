// components/woxing-hd/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hd:Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    onGoJoinDetail(event){
      const hid =  event.currentTarget.dataset.hid;
      wx.navigateTo({
        url:`/pages/woxing-detail/woxing-detail?hid=${hid}`
      })
    }
  }
})

// components/spu-scroll/index.js
Component({
  /**
   * 组件的属性列表
   */
  //externalClasses:['l-class'],
  properties: {
    theme:Object,
    spuList:Array
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
    onCheckThem:function (event){
      console.log(event)
      const pid = event.currentTarget.dataset.pid;
      wx.navigateTo({
        url:`/pages/detail/detail?pid=${pid}`
      })
    }
  }
})

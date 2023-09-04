
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    banner:Object
  },
  observers:{
    'banner':function (banner) {
      console.log("banner")
      if (!banner){
        return
      }
      if(banner.items.length===0){
        return
      }
      const left = banner.items.find(i=>i.name === 'left')
      const rightTop = banner.items.find(i=>i.name === 'right-top')
      const rightBottom = banner.items.find(i=>i.name === 'right-bottom')
      this.setData({
        left,
        rightTop,
        rightBottom
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   // var btest = this.banner;
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

// components/tab-bar/index.js
import {promisic} from "../../utils/utils";
import {User} from "../../models/user";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cartItemCount:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    nickName:null
  },



  /**
   * 组件的方法列表
   */
  methods: {
    onGoToWoHome(event){
      this.triggerEvent('gotowohome',{
      })
    },
    async onGoToWoPay(event){
      if (event.detail.userInfo) {
        this.data.nickName = event.detail.userInfo.nickName
        const success = await User.updateUserInfo(event.detail.userInfo)
      }
      this.triggerEvent('gotowopay',{
        nickName:this.data.nickName
      })
    },

  }
})

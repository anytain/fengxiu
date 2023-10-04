// components/realm/index.js
import {FenceGroup} from "../models/fence-group";
import {Judger} from "../models/judger";
import {Spu} from "../../models/spu";
import {Cell} from "../models/cell";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    spu:Object

  },

  /**
   * 组件的初始数据
   */
  data: {
    judger:Object,
    previewImg:String,
    title:String,
    price:null,
    discountPrice:null,
    stock:null

  },
  observers:{
    'spu':function (spu){
      if(!spu){
        return
      }
      if (Spu.isNoSpec(spu)){
        this.processNoSpec(spu)
      }else {
        this.processHasSpec(spu)
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    processNoSpec(spu){
      this.setData({
        noSpec:true
      })
      this.bindSkuData(spu.sku_list[0])
    },
    processHasSpec(spu){
      const fenceGroup = new FenceGroup(spu)
      fenceGroup.initFance(spu)
      const judger = new Judger(fenceGroup)
      this.data.judger = judger
      const defaultSku = fenceGroup.getDefaultSku()
      if(defaultSku){
        this.bindSkuData(defaultSku)
      }else {
        this.bindSpuData()
      }
      this.bindTipData()
      this.bindFenceGroupData(fenceGroup)
    },
    bindSpuData(){
      const spu = this.properties.spu
      this.setData({
        previewImg:spu.img,
        title :spu.title,
        price:spu.price,
        discountPrice:spu.discount_price
      })
    },

    bindSkuData(sku){
      console.log(sku)
      this.setData({
        previewImg:sku.img,
        title :sku.title,
        price:sku.price,
        discountPrice:sku.discount_price,
        stock:sku.stock===0?5:sku.stock
      })
    },
    bindFenceGroupData(fenceGroup){
      this.setData({
        fences:fenceGroup.fences,
      })
    },
    bindTipData(){
      this.setData({
        skuIntact:this.data.judger.isSkuIntact(),
        currentValues:this.data.judger.getCurrentValues(),
        missingKeys:this.data.judger.getMissingKeys()
      })
    },
    onCellTap(event){
      const data = event.detail.cell
      const x = event.detail.x;
      const y = event.detail.y;
      const  cell = new Cell(data.spec)
      cell.status = data.status
      const judge = this.data.judger
      judge.judge(cell,x,y)
      const  skuIntact = judge.isSkuIntact()
      if(skuIntact){
        const currentSku = judge.getDeterminateSku()
        this.bindSkuData(currentSku)
      }
      this.bindTipData()
      this.bindFenceGroupData(judge.fenceGroup)
      /*this.setData({
        fences:judge.fenceGroup.fences
      })*/
    }
  }
})

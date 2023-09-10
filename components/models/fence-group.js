import {Matrix} from "./matrix";
import {Fence} from "./fence";

class FenceGroup {
    spu
    skuList = []
    constructor(spu) {
        this.spu = spu
        this.skuList = spu.sku_list
    }
    initFence1(){
        const matrix = this._createMatrix(this.skuList)
        const fences = []
        let currentJ = -1

        matrix.each((element,i,j)=>{
            if(currentJ!==j){
                currentJ = j
               fences[currentJ] =  this._createFence(element)
            }
            fences[currentJ].pushValueTitle(element.value)
        })
        console.log(fences)
    }

    initFance(){
        const matrix = this._createMatrix(this.skuList)
        const fences = []
        const AT = matrix.transpose()
        console.log(AT)
        AT.forEach(r=>{
            const fence = new Fence(r);
            fence.init()
            fences.push(fence)
        })
        console.log(fences)

    }
    _createFence(element){
        const fence = new Fence();
        return fence
    }
    _createMatrix(skuList){
        const m = []
        skuList.forEach(sku=>{
            m.push(sku.specs)
        })
        return new Matrix(m)
    }
}

export {
    FenceGroup
}
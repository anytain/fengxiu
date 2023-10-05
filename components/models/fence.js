import {Cell} from "./cell";

class Fence {
    specs
    cells = []
    title
    id
    constructor(specs) {
        this.specs = specs
        this.id = specs[0].key_id
        this.title = specs[0].key
    }
    init(){
        this._initCells()
    }
    _initCells(){
        this.specs.forEach(s=>{
            const existed = this.cells.some(c=>{
                return c.id === s.value_id
            })
            if(existed){
                return
            }
            const cell = new Cell(s)
            this.cells.push(cell)
        })
    }
    setFenceSketch(skuList){
        this.cells.forEach(c=>{
            this._setCellSukImg(c,skuList)
        })
    }
    _setCellSukImg(cell,skuList){
        const  specCode = cell.getCellCode()
        const matchSku = skuList.find(s=>s.code.includes(specCode))
        if(matchSku){
            cell.skuImg = matchSku.img
        }
    }
}
export {
    Fence
}
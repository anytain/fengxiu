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
  /*  pushValueTitle(title){
        this.valueTitles.push(title)
    }*/
}
export {
    Fence
}
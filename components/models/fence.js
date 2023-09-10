import {Cell} from "./cell";

class Fence {
    valueTitles = []
    specs
    cells = []
    constructor(specs) {
        this.specs = specs
    }
    init(){
        this.specs.forEach(s=>{
           // this.pushValueTitle(s.value)
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
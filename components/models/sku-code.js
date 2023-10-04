import {combination} from "../../utils/utils";

class SkuCode{
    code
    spuId
    totalSeqments = []
    constructor(code) {
        this.code = code
        this._splitToSeqments()
    }
    _splitToSeqments(){
        //2$1-44#3-9#4-14
        const spuAndSpec = this.code.split('$')
        this.spuId = spuAndSpec[0];
        const specCodeArr = spuAndSpec[1].split('#')
        const length = specCodeArr.length
        for (let i = 1; i <= length; i++) {
           const seqments =   combination(specCodeArr,i)
            const newSeqments = seqments.map(segs=>{
                return segs.join('#')
            })
            this.totalSeqments = this.totalSeqments.concat(newSeqments)
        }
    }
}

export {
    SkuCode
}
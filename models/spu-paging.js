import {Http} from "../utils/http";
import {Paging} from "../utils/paging";

class SpuPaging {
    static async getLatestPaging(){
        return new Paging({
           url:`spu/latest`
        },5)

    }
    static getByCategoryPaging(cid, isRoot) {
        return new Paging({
            url: `spu/by/category/${cid}?is_root=${isRoot}`
        })
    }
}
export {
    SpuPaging
}

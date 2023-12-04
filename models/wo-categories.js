import {Http} from "../utils/http";

class WoCategories {
    roots = []
    subs = []
    static categoryQ = 'qlxd'
    static categoryH = 'hwyd'
    static categoryX = 'xxyl'
    static categoryL = 'lxzs'
    static categoryW = 'wdsc'
    async getAll() {

        const data = await Http.request({
            url: `woCategory/all`
        })
        this.roots = data.roots
        this.subs = data.subs
    }

    getCategoryQ() {
        return this.roots.find(t => t.description === WoCategories.categoryQ)
    }
    getCategoryH() {
        return this.roots.find(t => t.description === WoCategories.categoryH)
    }
    getCategoryX() {
        return this.roots.find(t => t.description === WoCategories.categoryX)
    }
    getCategoryL() {
        return this.roots.find(t => t.description === WoCategories.categoryL)
    }
    getCategoryW() {
        return this.roots.find(t => t.description === WoCategories.categoryW)
    }
    getRoots(){
        return this.roots
    }
    getWoSubs(){
        return this.subs
    }

}

export {
    WoCategories
}

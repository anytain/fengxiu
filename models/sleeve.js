import {Http} from "../utils/http";
class Sleeve {
    async getSleeves(){
       return  await Http.request({
            url: `sleeve/all`
        })
    }
    async getSleeve(id){
        return  await Http.request({
            url: `sleeve/id/${id}`
        })
    }


}
export {
    Sleeve
}

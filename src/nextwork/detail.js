import {request} from './axios.js'

export function detail(iid){
     return  request({
         url:'/detail',
         params:{
            iid
         }
     })
}

export function Goods(itemInfo,columns,service){
    
        return {
            desc : itemInfo.desc,
            price : itemInfo.price,
            oldprice : itemInfo.oldPrice,
            discountDesc : itemInfo.discountDesc,
            columns : columns,
            service : service
        }    
}


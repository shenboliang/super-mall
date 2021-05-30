import {request} from './axios.js'

export function getIndex(){
     return  request({
         url:'/home/multidata'
     })
}

export function getPopular(type,page){

        return  request({
            url:'/home/data',
            params:{
                type,
                page
            }
        })

}
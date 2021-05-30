// 封装一个 axios, 使用本地封装的axios，当改版的使用只需要更改该文件中的axios即可

import axios from 'axios'

export  function request(config){
    // (1) 创建一个 axios实例

    const  instance = axios.create({
        timeout : 5000,
        baseURL: 'http://152.136.185.210:7878/api/m5'
    })

    

   
     // 请求拦截

    //    instance.interceptors.request.use(config=>{
    //         console.log(res)
    //         return config
    //     },err=>{
    //         console.log(err)
    //             return  errr
    //     })


        // 响应拦截 


      instance.interceptors.response.use(res=>{
         
            return res
        },err=>{
            console.log(err)
        })

    return instance(config)
         
      } 


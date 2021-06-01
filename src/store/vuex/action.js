export default {
    getData(context,payload){

            // (1)判断商品是否在数组中，若在数组中，则找到该对象，让该对象的 count 值 +1 ， 若不在直接push进去数组中

            // action中不嫩直接修改 state中的数据，只能通过 context.commit的方式发送给 mutations中的方法进行修改


        var  you =  context.state.goodsList.find(item=>{

                return item.iid  == payload.iid
        })
        
        if(you==undefined){

             context.commit('addDtata',payload)
        }else{
            context.commit('jia',you)
        }

    

            
        

    }
}
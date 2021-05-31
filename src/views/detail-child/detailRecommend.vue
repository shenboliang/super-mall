<template>
  <div class="tab">
    

        <div class="goods" >
                
                <li v-for="(item,index) in goods"  :key="index" class="item" >
                    <img :src="item.image" alt=""  @load="loading">
                    <div>
                        <div class="text">{{item.title}}</div>
                         <div class="price">  <span>{{item.price}}</span>
                         <span class="cang">{{item.cfav}}</span></div>
                    </div>
                </li>
        </div>
       
    </div>
</template>

<script>
// @ is an alias to /src
import {emitter} from '../../eventBus.js'

export default {
  name: 'detailRecommend',
  components: {
    
  },
  props:{
    goods:{
       type: Array,
      default() {
        return [];
      }
    }
    
  },
  data(){
      return {
         
          
      }
  },
  methods:{
       
      

          //  通过监听点击拿到用户点击的 li , 传到detail中，请求响应的数据展示
           
           //  通过 路由，把获取到的iid（唯一标识） 传给detail使用

        //    this.$router.push('/detail/'+ item.shop_id)

        loading(){
   
           emitter.emit('detailimage')
        }
     
     

  }
}
</script>
<style scoped>

.biao{
    margin-top: 10px;
    width: 100%;
    height: 30px;
    color:gray;
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: sticky;
    top: 44px; */
    background-color: white;
    z-index: 10;
    padding-bottom: 20px;
    
}
.biao>li{
    list-style: none;
    flex: 1;
    text-align: center;
}
.active {
    color: pink;
    padding-bottom: 5px;
    border-bottom: 2px solid pink;
}  
li{
    list-style: none;
}
.goods{
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
     justify-content: space-evenly;
     z-index: 0;
}
.item{
    width: 180px;
    height: 280px;
    font-size: 10px;
    margin-bottom: 10px;
    position: relative;
}
.item img{
    width: 180px;
    height: 250px;
    border-radius: 10px;
}
.item .text{
    overflow: hidden;
    white-space: nowrap;
    width: 160px;
    text-overflow: ellipsis;
    margin-left: 5px;
}
.item .price{
      
        width:150px ;
        margin-left: 8px;
        text-align: center;
}
.price span{
    margin-left: 10px;
}
.price span:nth-child(1){
    color:deeppink;
    margin-left: -10px;
}
.cang::before{
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
   background:no-repeat url('../../assets/img/index/cang.png') ;
  background-size: cover;
  margin-right:2px ;

}
</style>
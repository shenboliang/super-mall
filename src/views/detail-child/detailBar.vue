<template>
  <div class="detailnavbar">
    <div class="biao">
         <li @click="one" >
         <img src="../../assets/img/detail/customer.png" >
         <span>客服</span>
     </li>
     <li @click="two">
         <div>
         <img src="../../assets/img/detail/dianpu.png" >
         <span>店铺</span>
         </div>
     </li>
     <li @click="three">
        <img src="../../assets/img/detail/shoucang1.png" >
        <span>收藏</span>
     </li>
     <li @click="four">
         <span>加入购物车</span>
     </li>
     <li @click="five">
         <span>购买</span>
     </li>
    </div>
  </div>
</template>

<script>

export default {
  name: 'detailBar',
  props: {
        goodsL:{
            type:Object,
            default(){
                return {}
            }
        }
  },
  methods:{
      one(){
        
      },
      two(){},
      three(){},
      four(){
        
          // 在拿到的对象中添加一个  count,用于计算用户点击次数

            this.$store.dispatch('getData',this.goodsL) 
        
      },
      five(){}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">
*{
    margin: 0;
    padding: 0;
}

 .detailnavbar{
     width: 100%;
     height: 62px;
     background-color:white;
     position: fixed;
     left: 0;
     bottom: 0;
     z-index: 100;
 }
 .biao {
     width: 100%;
     height: 100%;
     display: flex;

   
 }
 li div{
     display: flex;
      align-items: center;
      overflow: hidden;
      flex-direction: column;
      
 }
 li img{
     width: 26px;
     height: 26px;
     margin-top: 6px ;
 }
 li span{
     margin-top: -15px;
 }
 li{
     list-style: none;
     background-color: white;
     flex: 2;
     text-align: center;
     line-height: 62px;
     display: flex;
     align-items: center;
     flex-direction: column;
      font-size: 14px; 
 }
 li:nth-child(4){
    flex: 3;
    background-color: yellow;
 }
 li:nth-child(4)>span{
     margin-top: auto;
     color: black;
 }
 li:nth-child(5){
      flex: 2;
      background-color: pink;
      }
      li:nth-child(5) span{
     margin-top: auto;
     color: white;
     
 }

</style>

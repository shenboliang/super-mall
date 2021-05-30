
<template>
 <div  class="tabbar">
      <div  @click="clickone">
        <img  v-if="isactiveOne"    src="./img/首页(1).png" >
        <img v-else src="./img/首页.png" alt="">
        <p :class="{'active':!isactiveOne}">首页</p>
      </div>
      <div @click="clicktwo">
        <img v-if='isactiveTwo' src="./img/类目(1).png" >
        <img  v-else src="./img/类目.png" >
        <p :class="{'active':!isactiveTwo}">分类</p>
      </div>
      <div @click="clickthree">
        <img v-if="isactiveThree"  src="./img/购物车(1).png"  >
        <img  v-else src="./img/购物车.png"  >
        <p :class="{'active':!isactiveThree}">购物</p>
      </div>
      <div @click="clickfour">
        <img v-if="isactiveFour" src="./img/我的(1).png" >
        <img  v-else src="./img/我的.png" >
        <p :class="{'active':!isactiveFour}">我的</p>
      </div>
    </div>

   
</template>
<script>

export default {
    name: 'tabbar',
    data(){
      return  {
        isactiveOne : false,
        isactiveTwo :  true,
         isactiveThree: true,
         isactiveFour : true,
      }
    },
    methods:{
      clickone(){
          this.isactiveOne = false
          this.isactiveTwo = true
          this.isactiveThree = true
         this.isactiveFour = true
          this.$router.replace('/index')
      },
      clicktwo(){
          this.isactiveOne = true
          this.isactiveTwo = false
          this.isactiveThree = true
          this.isactiveFour = true
           this.$router.replace('/fenlei')
      },
      clickthree(){
          this.isactiveOne = true
          this.isactiveTwo = true
          this.isactiveThree = false
          this.isactiveFour = true
           this.$router.replace('/cat')
      },
      clickfour(){
          this.isactiveOne = true
          this.isactiveTwo = true
          this.isactiveThree = true
          this.isactiveFour = false
           this.$router.replace('/my')
      }
    }
}
</script>

<style lang="less">

*{
    margin: 0;
    padding: 0;
}

.tabbar{
  display: flex;
  width:100%;
  height: 62px;
  background-color:#f6f6f6;
  flex-direction: row;
  text-align: center;
 position: fixed;
bottom: 0;
left: 0;
box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  z-index: 1;
}
.tabbar div{
  flex: 1;
  display: flex;
  flex-direction: column;
   align-items: center;
}
.tabbar div img{
    width: 32px;
    height: 32px;
   display: inline-block;
   margin-top: 5px;
   margin-bottom: 8px;
 
}
p{
    display: inline-block;
    font-size: 12px; 
}
.active{
  color: red;
}

</style>

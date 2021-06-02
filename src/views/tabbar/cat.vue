<template>
  <div class="cat">

      <navbar>
        <template v-slot:main>
      <div>购物车   ({{count}})   </div>
  </template>
      </navbar>  
      <div class="text">

          <li v-for="(item,index) in goodsList" :key="index" @click="click(index)">
                <span :class="{'dian':true,'active': goodsList[index].xuan}"></span>

                <div class="content">
                   <img :src="item.link">
                   <div class="title">
                      <p class="itemsTitle">{{item.title}}</p>
                      <p class="desc">{{item.desc}}</p>

                      <div class="price">
                         <span class="thisprice">￥{{item.price}}</span>
                         <span class="count">x{{item.count}} </span>
                      </div>
                   </div>

                </div>
          </li>      
      </div>
      <toast  :message="message"  :show='shows' />
   <heji  :zong='zong' @mountFather='mount' :xianshi='shows' />
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '../../components/navbar.vue'
import { emitter } from '../../eventBus'
import  heji from './cat/heji.vue'
import toast from  '../detail-child/toast.vue'



export default {
  name: 'cat',
  components: {
    navbar,
    heji,
    toast
   
  },
  mounted(){
     this.$refs.scroll&&this.$refs.scroll.scroll&&this.$refs.scroll.scroll.refresh()
  },
  methods:{
    click(index){

          this.goodsList[index].xuan =  !this.goodsList[index].xuan

        this.currentIndex = index

          if(this.show.indexOf(this.currentIndex) === -1 ){

                this.show.push(this.currentIndex)

                this.zongjia.push(this.goodsList[this.currentIndex])

          }else{

            var  a =     this.show.findIndex((value)=>{
                  return  value == index
                })

                this.show.splice(a,1)

                this.zongjia.splice(a,1)

              //  console.log(this.show)

          }

           this.zong.price = 0
           this.zong.count = 0

          if(this.zongjia.length !== 0 ){
          for(var item of this.zongjia){
               this.zong.price += parseInt(item.price*item.count)
               this.zong.count += item.count
              }
         
          }

          this.zong.quanxuan =  this.goodsList.every((item)=>{
              return   item.xuan == true
          })

        
    },
    mount(shows){

      if(this.goodsList.length!==0){

     var  n =  this.goodsList.every((item)=>{

            return item.xuan == false
          })
          if(n){
            this.shows = shows
            
          }
           
      }


  

    }

  },

  activated(){
    // 拿到 vuex中要展示的数据



     if(this.$store.state.goodsList.length != 0 ){


        this.goodsList  = this.$store.state.goodsList
        //  console.log(1111)

          for(var  item  of this.goodsList){

               this.count += item.count
          }

          emitter.on('quanxuanOne',()=>{

              var n = [] 

       this.goodsList.forEach((item,index)=>{

                if(item.xuan == false){
                    n.push(index)
                }
            })
        
          for(var i of n){

              var b  =  Number(i)
              this.click(b)
          }         
      })

       emitter.on('quxiao',()=>{

           var m = [] 

       this.goodsList.forEach((item,index)=>{

                if(item.xuan == true){
                    m.push(index)
                }
            })

             for(var i of m ){
               var  n = Number(i)
              this.click(n)
          }        
          })



     }

  },

  deactivated(){

      this.count = 0

      // emitter.off('biaozhun')

  },
  data(){
    return {
       goodsList : [],
       count  :  0,
       currentIndex:-1,
       show : [],
       zongjia:[],
       zong:{price:0,count:0,quanxuan:false},
       // toast显示
       shows:false,
      message:'请选择购买的商品'
    }
  }
}
</script>
<style scoped>
.text{
  margin-top: 44px;
  font-size: 12px;
  width: 100%;
   margin-bottom: 105px;
 
}

li{
  list-style: none;
  width: 100%;
  height: 125px;
  box-sizing: border-box;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
 
}
li .dian{
  width: 15px ;
  height: 15px;
  /* background-image: url('../../assets/img/cat/xuanzhong_1.png');
  background-size: cover;
  border-radius: 50%; */
  border: 1px solid black;
  border-radius: 50%;
}

li .active{
   /* border: none; */
   background-image: url('../../assets/img/cat/xuanzhong_1.png');
  background-size: cover;
  border-radius: 50%;
}


li .content{
  width: 85%;
  height: 78%;
  margin-left: 10px;
  display: flex; 
}
li .content img{
  width: 70px;
  height: 100%;
  border-radius: 4px;
  margin-right: 15px;
}

 .title{
  width: 73%;
  height: 100%;
}
.itemsTitle{
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
}
.desc{
  width: 100%;
  color: gray;
  margin-top: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
}
.price{
  margin-top: 20px;
  font-size: 14px;
}
.thisprice{
  margin-left: 20px;
  color: orange;
}
.count{
   float: right;
   margin-right: 15px;
}


</style>
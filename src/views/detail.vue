<template>
  <div class="detail">
      <navbar class="navbar">
        <template v-slot:main>
                <div class="div">
                    <li v-for="(item,index) in list" :key='index' @click="click(index)" :class="{'active': index==currentIndex}" @clickB='clickB(index)'> 
                        {{item}}
                    </li>
                </div>
        </template>
        <template v-slot:left>
            <div class="leftZ" @click="back">
            <img src="../assets/img/detail/left.png" alt="" class="left">
            </div>
        </template>
      </navbar>
   
    
   <scroll class="wrapper" ref="scroll" :pull='false' >

         <swiper :img='target.swrapper'/>
        <detailBase  :goods="goodInfo"></detailBase>
        <detailshopInfo  ref="shopInfo" :shop="shopInfo" />
        <detailimage    :detailInfo="detailInfo" />
        <detail-params  ref="params" :paramInfo="detailParams"/>
        <detailComment  ref="detailCom" :comment="detailComment"/>
        <detail-recommend  ref="recommend" :goods ="recommendD" />
      
   </scroll>
    <detailBar :goodsL="catData" @addcat='addcat' />
    <div class="anniu" @click="backTop"  v-if="position<=-700"></div>
    <toast :message='message' :show="show"  />
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '../components/navbar.vue'
import {detail,Goods,recommendData} from '../nextwork/detail.js'
import swiper from '../commont/swiper/swiper.vue'
import detailBase from './detail-child/detailBase.vue'
import detailshopInfo from './detail-child/detailshopInfo.vue'
import detailimage from './detail-child/detailImage.vue'
import detailParams from './detail-child/detailParams.vue'
import detailComment from './detail-child/detailComment.vue'
import detailRecommend from './detail-child/detailRecommend.vue'
import { emitter } from '../eventBus'
// import stopmore from '../stopmore.js'
import scroll from '../commont/scroll.vue'
import detailBar  from './detail-child/detailBar.vue'
import  toast   from  './detail-child/toast.vue'

export default {
  name: 'detail',
  components: {
   navbar,
   swiper,
   detailBase,
   detailshopInfo,
   detailimage,
   detailParams,
   detailComment,
   detailRecommend,
   scroll,
   detailBar,
   toast
  },
  created(){
      
      
    //   console.log( this.$route.params)

     // 通过 路由 this.$route.params ， 拿到唯一标识 cid

     this.iid = this.$route.params.cid

      detail(this.iid).then(res=>{
         
        const  data= res.data.result
        // 拿到全部数据，对数据进行进一步处理，封装到本地的对象中

        this.target = {
            swrapper: data.itemInfo.topImages
        }

        // 拿到购物车需要展示的标题赋值到对象中

      this.catData.title =  res.data.result.itemInfo.title

      this.catData.desc = data.itemInfo.desc

        // 创建商品对象，内部包含要展示的内容(一些商品信息，标题之类的)

         this.goodInfo =  Goods(data.itemInfo,data.columns,data.shopInfo.services)

         // 获取到店铺消息
       
        this.shopInfo = data.shopInfo

        //  获取到详情图片消息

        this.detailInfo = data.detailInfo

        this.catData.link =  this.detailInfo.detailImage[0].list[0]

        this.catData.xuan = false

    
        // 获得参数信息

        this.detailParams = data.itemParams

        // 拿到评论信息

        if(data.rate.cRate){

            this.detailComment = data.rate.list[0]

        }   
         emitter.on('detailimage',()=>{     
                this.refresh() 
        })  

          //  执行获取购物车数据的方法

        this.catD()

          // 等待数据加载完成并渲染后获取个组件的距离

          var that = this

          setTimeout(function(){
        that.positionTo.push(0)      
        
        that.positionTo.push(-that.$refs.params.$el.offsetTop)

        that.positionTo.push(-that.$refs.detailCom.$el.offsetTop)

        that.positionTo.push(-that.$refs.recommend.$el.offsetTop)

          },300)

      })


      // 拿到推荐信息

      recommendData().then(res=>{

            this.recommendD = res.data.data.list     
       })

 //  拿到 scroll组件传过来的 滚动值（通过事件总线的方式）

        emitter.on('scrollT',(position)=>{

               this.position = position.y         
        })

    
  },  
  updated(){
    

      if(this.positionTo.length !==0){

        if(this.position>=this.positionTo[1]){
            this.clickB(0)
        }else if(this.positionTo[1]>this.position&&this.position>=this.positionTo[2]){
            this.clickB(1)
        }else if(this.positionTo[2]>this.position&&this.position>=this.positionTo[3]){
            this.clickB(2)
        }else{
            this.clickB(3)
        }

      }
        
  },

  
 
  unmounted(){
      emitter.off('scroll','detailimage')
  },
  methods:{
      refresh(){
          this.$refs.scroll&&this.$refs.scroll.scroll&&this.$refs.scroll.scroll.refresh()
      },
      back(){
          this.$router.back()
      },
      click(index){
            this.currentIndex = index  

            switch(index){
                case 0 :   
                         this.$refs.scroll&&this.$refs.scroll.scroll.scrollTo(0,this.positionTo[0],50)

                         this.position = this.positionTo[0]

                        this.pan = false

                    break;

                case 1  : 

                    var one = this.positionTo[1] -8

                this.$refs.scroll&&this.$refs.scroll.scroll.scrollTo(0,one,50)

                this.position = one

                 break ; 

                case 2 : 
                     
                      var two = this.positionTo[2] -8

                    this.position = two

                    this.$refs.scroll&&this.$refs.scroll.scroll.scrollTo(0,two,50)

                  
                    break;
                case 3 : 


                var three =  this.positionTo[3] -8

                this.position =three


                this.$refs.scroll&&this.$refs.scroll.scroll.scrollTo(0,three,50)

                    break;
            }

          
      },

      clickB(index){

            this.currentIndex = index 
      },
        backTop(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },

     catD(){

                // 把 iid 赋值到对象中，方便cat组件使用

        this.catData.iid = this.$route.params.cid

            //把购物车页面用到的数据赋值到对象中

        //  this.catData.push(this.goodInfo)

        this.catData.price = this.goodInfo.price

        this.catData.count = 1

            // 把购物车要展示的图片传到数组中

        //    console.log(this.catData)
     },

     addcat(arg,ar){

            this.show = arg 

            this.message = ar
     }


  },
  data(){
      return {
          list:['商品','参数','评论','推荐'],
          currentIndex: 0,
          iid : 0,
          target:{},
          // 商品信息
          goodInfo:{},
          //店铺信息
          shopInfo:{},
          // 详情中图片数据
          detailInfo:{},
          detailParams:{},
          detailComment:{},
          // 获取到推荐商品信息
          recommendD:[],
          // scroll滚动距离值
            position:0,
        //  获取到各组件的距离，实现点击跳转到响应的内容
           positionTo:[],
         
           // 用一个数组来承载购物车组件要使用到的对象，方便传递给购物车组件
           catData:{},
           // toast显示和内容
           message: '',
           show : false
      }
  }  
}
</script>
<style scoped>
 .anniu{
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background-image: url('../assets/img/index/backTop.png');
   background-repeat: no-repeat;
   background-size: cover;
   background-color: blanchedalmond;
   position: fixed;
   bottom: 100px;
   right: 20px;
 }

.dian{
    width: 50px;
    height: 50px;
    background-color: red;
    position: fixed;
    left: 50px;
    top: 200px;
    display: none;
}
.navbar{
    background-color: white;
    color: gray;
}
.div{
   
    font-size: 16px;
    text-align: center;
    line-height: 44px;
    display: flex;
    
}
.div li {
    list-style: none;
    flex: 1;
    text-align: center;
   
}
.left{
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
 
}
.leftZ{
    width: 100%;
    height: 100%;
}

.active{
    color:pink;
}

.detail{
    height: 100vh;
    background-color: #fff;
    position: relative;
    z-index:2;
    overflow: auto;
    
}
.context{
   position: absolute;
   top: 10px;
   left: 0;
}

.context li{
    list-style: none;
}

</style>
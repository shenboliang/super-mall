<template>
  <div class="index">
      <navbar>
      <template v-slot:main>
       <div>购物街</div>
     </template>
      </navbar> 
  <tabbar  :biao="['流行','新款','精选']"  :goodsItem = "goods" v-show="isshow" />
   <scroll  @change='change' ref="scroll" :pull='true'>
       <div class="content">
          <swiper  :img='banner' ></swiper>
            <recommend :title = 'recommend'></recommend>
            <popular/>
            <tabpopular  :biao="['流行','新款','精选']"  :goodsItem = "goods"   class="tab"/>
            </div>
   </scroll>
   <div class="anniu" @click="backTop"  v-if="positionT<=-700"></div>
  </div>
    
</template>

<script>
// @ is an alias to /src
  import navbar from '../../components/navbar.vue'
  import {getIndex,getPopular} from '../../nextwork/index.js'
  import  swiper from '../../commont/swiper/swiper.vue'
  import recommend from '../../commont/index-page/recommend.vue'
  import popular from  '../../commont/index-page/popular.vue'
  import tabpopular from '../../commont/index-page/tabpopular.vue'
  import scroll from '../../commont/scroll.vue'
  import {emitter} from '../../eventBus.js'
  import  stopmore from '../../stopmore.js'
  import tabbar from '../../commont/index-page/tabbarpop.vue'


export default {
  name: 'index',
  components: {
      navbar,
      swiper,
      recommend,
      popular ,
      tabpopular,
      scroll,
      tabbar,
     
  },
    data(){
      return {
        banner : [],
        recommend: [],
         goods:{
           'pop':{page:1,list:[]},
           'new':{page:1,list:[]},
           'sell':{page:1,list:[]}
         },
         positionT:0,
         currentIndex:0,
         isshow: false,
      }
    },
  created(){      
          getIndex().then(res=>{
            this.banner =  res.data.data.banner.list

            this.recommend = res.data.data.recommend.list

            this.banner.push(this.banner[0])

               
        })
             
            //  拿到首页分类的三种数据

        getPopular('pop',this.goods.pop.page).then(res=>{
            
             this.goods.pop.page +=1
             this.goods.pop.list = [...res.data.data.list]
             
        })

        getPopular('new',this.goods.new.page).then(res=>{
                 this.goods.new.page +=1
                  this.goods.new.list = [...res.data.data.list]
        })

        getPopular('sell',this.goods.sell.page).then(res=>{
                     this.goods.sell.page +=1
                     this.goods.sell.list = [...res.data.data.list]
        })

          
  },
  mounted(){
     
     emitter.on('scrollT',(position)=>{
       this.positionT = position.y
     })

          // 过滤防抖函数
  
      var refresh = stopmore(this.refresh,200)


    emitter.on('imgLoading',()=>{

        refresh()     
    })
      
     //  拿到当前显示的位置下标

     emitter.on('click',(position)=>{

         this.currentIndex = position
    })

    //  通过下标判断该发送那个请求，请求相应的数据

      emitter.on('touchB',()=>{

        switch(this.currentIndex){

            //  当下标为0 时，发送请求

            case 0   :
         getPopular('pop',this.goods.pop.page).then(res=>{
                     this.goods.pop.page +=1
                   this.goods.pop.list.push(...res.data.data.list)
        })
                break ; 

            case 1  : 

             getPopular('new',this.goods.new.page).then(res=>{
                     this.goods.new.page +=1
                   this.goods.new.list.push(...res.data.data.list)
        })
                  break;

              case 2 : 

               getPopular('sell',this.goods.sell.page).then(res=>{
                     this.goods.sell.page +=1
                   this.goods.sell.list.push(...res.data.data.list)
        })

              break ; 
        }
    })
  },
  
  methods:{
    change(event){
     this.positionT = event.y    
         
          if(this.positionT <= -678){
            this.isshow =true 
          }else{
            this.isshow=false
          }
    
    },
    backTop(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    refresh(){
       this.$refs.scroll&&this.$refs.scroll.scroll&&this.$refs.scroll.scroll.refresh()

     
       
    }
  }
}
</script>
<style scoped>
 
 .index{
   width: 100%;
   height: 100vh;
   overflow: hidden;
 }
 /* .content{
   padding-bottom: 62px;
 } */
 .wrapper{
   margin-top: 44px;
 }

 .anniu{
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background-image: url('../../assets/img/index/backTop.png');
   background-repeat: no-repeat;
   background-size: cover;
   background-color: blanchedalmond;
   position: fixed;
   bottom: 100px;
   right: 20px;
 }

</style>
<template>
  <div class="detail">
      <navbar class="navbar">
        <template v-slot:main>
                <div class="div">
                    <li v-for="(item,index) in list" :key='index' @click="click(index)" :class="{'active': index==currentIndex}">
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

        <div class="context">
         <swiper :img='target.swrapper'/>
        <detailBase  :goods="goodInfo"></detailBase>
        <detailshopInfo :shop="shopInfo" />
        <detailimage :detailInfo="detailInfo" />
        <detail-params :paramInfo="detailParams"/>
        <detailComment :comment="detailComment"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '../components/navbar.vue'
import {detail,Goods} from '../nextwork/detail.js'
import swiper from '../commont/swiper/swiper.vue'
import detailBase from './detail-child/detailBase.vue'
import detailshopInfo from './detail-child/detailshopInfo.vue'
import detailimage from './detail-child/detailImage.vue'
import detailParams from './detail-child/detailParams.vue'
import detailComment from './detail-child/detailComment.vue'
export default {
  name: 'detail',
  components: {
   navbar,
   swiper,
   detailBase,
   detailshopInfo,
   detailimage,
   detailParams,
   detailComment
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

        // 创建商品对象，内部包含要展示的内容(一些商品信息，标题之类的)

         this.goodInfo =  Goods(data.itemInfo,data.columns,data.shopInfo.services)

         // 获取到店铺消息
       
        this.shopInfo = data.shopInfo

        //  获取到详情图片消息

        this.detailInfo = data.detailInfo

        // 获得参数信息

        this.detailParams = data.itemParams

        // 拿到评论信息

        if(data.rate.cRate){

            this.detailComment = data.rate.list[0]

            console.log(this.detailComment)
            
        }

        
        
            
      })
  },
  methods:{
      back(){
          this.$router.back()
      },
      click(index){
            this.currentIndex = index
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
          detailComment:{}
      }
  }  
}
</script>
<style scoped>
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
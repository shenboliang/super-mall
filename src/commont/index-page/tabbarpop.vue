<template>
  <div class="tab">
      <div class="biao">
   <li v-for="(item,index) in biao"  :key='index' @click="click(index)" >
      <span :class="{'active':currentIndex==index}">{{item}}</span>
   </li>
   </div>
    </div>
</template>

<script>
// @ is an alias to /src
import {emitter} from '../../eventBus.js'

export default {
  name: 'tabpopular',
  components: {
    
  },
  props:{
       biao : Array,
       goodsItem:Object
  },
  data(){
      return {
          currentIndex:0
      }
  },
  methods:{
      click(index){
            this.currentIndex = index
            emitter.emit('click', this.currentIndex)
            emitter.emit('changeIndex',this.currentIndex)
           
      },
      loading(){
          emitter.emit('imgLoading');
      }
  },
   mounted(){
     // 监听组件 tabbarpop 发送的点击下标

       emitter.on('changeIndexs',(index)=>{

                  this.currentIndex =index
        })
         
  }
}
</script>
<style scoped>

.biao{
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
    margin-top: 44px ;
    position: absolute;
    left: 0;
    top: 0;
    padding-bottom: 18px;
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

</style>
<template>
  <div class="heji">
     <span class="xuan"  @click="click" > 
        <span :class="{'quanxuan':true,'active':show}"> </span> 全选
         </span>
        <span class="he">合计:￥{{zong.price}}</span>

        <span class="zong" @click="mount">去计算({{zong.count}})</span>
  </div>
</template>

<script>
// @ is an alias to /src
import {emitter} from '../../../eventBus.js'

 
export default {
  name: 'heji',
  components: {
  },
  props:{
    zong:{
        type:Object,
        default(){
            return {}
        }
    },
    xianshi:{
      type:Boolean
    }

  },
  created(){
  },
  methods:{
      click(){
          if(this.show){
              this.show=false
              emitter.emit('quxiao')
            
          }else{
              this.show = true
            emitter.emit('quanxuanOne')
          }
      },
      mount(){

         this.shows = true

          this.$emit('mountFather',this.shows)
         setTimeout(()=>{
        this.shows = false
 this.$emit('mountFather',this.shows)
         },1000)
       
      }
  },
  
  data(){
      return {
          show:false,
          shows:false
      }
  }

  
}
</script>
<style scoped>
.active{
background-image: url('../../../assets/img/cat/xuanzhong_1.png');
  background-size: cover;
  border-radius: 50%;
}
.heji{
    background-color: #d3d7d4;
    width: 100%;
    height: 40px;
    position: fixed;
    bottom: 62px;
    left: 0;
    display: flex;
}
.kong{
    flex: 2;
}
.xuan{
    flex: 2;
     line-height: 40px;
    text-align: center;
    position: relative;
}
.quanxuan{
 
  /* background-image: url('../../assets/img/cat/xuanzhong_1.png');
  background-size: cover;
  border-radius: 50%; */
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid black;
  border-radius: 50%;
}
.he{
    flex: 5;
    background-color: blueviolet;
     line-height: 40px;
     box-sizing: border-box;
     padding-left: 10px;
} 
.zong{
    flex: 3;
    background-color: #e0861a;
    line-height: 40px;
    text-align: center;
    color: white;
}
</style>
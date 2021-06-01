  
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {emitter} from '../eventBus.js'
  
  export default {
    name: "Scroll",
    props: {
          pull:{
            type:Boolean,
            default:false
          }
    },
    data() {
      return {
        scroll: null,
        position : null
      }
    },
    mounted() {
      // 1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 3,
        pullUpLoad: this.pull,
        
      })
   
     this.scroll.on('scroll',(position)=>{
            this.position = position

              emitter.emit('scrollT',this.position)
          
     })
          if(this.pull){
        this.scroll.on('pullingUp',()=>{
          
       this.scroll.finishPullUp()

          //  触底发送一个事件到eventBus中

           emitter.emit('touchB');

     })

          }
   
    },
  
    methods: {
            
           
    }
  }
</script>

<style scoped>
    .wrapper{
          height: calc(100% - 67px);
          
          /* height: 100vh; */
          overflow: hidden;
         
    }

</style>
<template>
  <div class="toast" v-if="show">

      {{message}}
   
  </div>
</template>

<script>

export default {
  name: 'toast',
  props: {
        message:{
            type:String,
            default(){
                return '商品以加入购物车'
            },
        },
        show:{
            type:Boolean
        }
        
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">
.toast{
    width: 150px;
    height: 30px;
    background-color: rgba(0,0,0, 100);
    color: #fff;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-70%);
    font-size: 15px;
    text-align: center;
    line-height: 30px;
    border-radius: 4px;
}
</style>

<template>
  <div id="nav">
   
    
  <router-view v-slot="{ Component }">
  <keep-alive exclude="detail">
    <component :is="Component" />
  </keep-alive>
</router-view>
    
    <tabbar v-show="tab"> </tabbar>
  
  </div>

</template>
<script>
 import tabbar from './components/tabbar/tabbar.vue'

export default {
   name : 'App',
  components:{
      tabbar
  },
  data(){
    return {
        tab : true
    }
  },
  
  
   

  }

</script>

<style lang="less">
 @import : './src/assets/css/nomalize.css';


</style>

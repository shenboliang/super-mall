<template>
  <div class="recommend">
     <li v-for="(item,index) in title" :key="index">
         <a :href="item.link">
             <img :src="item.image" >
             <span>{{item.title}}</span>
         </a>
     </li>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'recommend',
  components: {
    
  },
  props:{
      title : Array,
      default:[]
  }
}
</script>
<style scoped>
.recommend{
    width:100% ;
    height: 100px;
    display: flex;
    align-items: center;
    margin-top: 20px;
     border-bottom: 15px solid #eee;
   padding-bottom: 20px;
}

.recommend li{
    list-style: none;
    flex: 1;
    margin-left: 4.5px;
    text-align: center;
}
.recommend li a{
    text-decoration: none;
}
.recommend img{
    width: 85px;
    height: 85px;
    margin-bottom: 2px;
}
.recommend li span{
    font-size: 14px;
}
</style>
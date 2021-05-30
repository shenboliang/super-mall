<template>
  <div class="swiper">
       <div class="img">
           <ul>
               <li v-for="(item,index) in img"  :key="index" >
                    <img :src="item.image" v-if="item.image">
                    <img :src="item" alt="" v-else>
               </li>
           </ul>
       </div>
       <div class="dian">
           <ul>
           <li v-for="(item,index) in img" :key="index"></li>
            <li class="active"></li>
           </ul>
          
       </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'swiper',
  components: {
    
  },
  props:{
        img : Array
      },
}
</script>
<style scoped>

.img{
    width:372px;
    height: 200px;
    overflow: hidden;
}
.swiper{
    position: relative;
    margin-top: 44px;
}
.img ul{
    width: 1875px;
    height: 100%;
    animation-name: move;
    animation-delay: 1s;
    animation-duration: 6.5s;
    animation-iteration-count:infinite;
    animation-timing-function:ease;
}
@keyframes move {
        0% {transform: translateX(0);}
        25%{transform: translateX(-375px);}
        50%{transform: translateX(-750px);}
        75%{transform: translateX(-1125px);}
        100%{transform: translateX(-1500px);}
}
.swiper:hover  ul{
        animation-play-state: paused;
}

.img ul li {
     width: 375px;
     height: 100%;
    float: left;
}
li{
    list-style: none;
}
.img img{
   width: 375px;
   height: 100%;
   float: left;
}

.dian{
    width: 100%;
    height: 20px;
    position: absolute;
   
    bottom: 27 px;
    /* left: 50%; */
    top: 174px;
    /* transform: translateX(-50%); */
    z-index: 2;
    white-space: nowrap;
    
}
.dian ul{
    
     white-space: nowrap;
     position: absolute;
     left: 50%;
     transform: translateX(-50%);
}
.dian ul li{
    list-style: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    float: left;
    margin-left: 20px;
}
.dian li.active{
    background-color: red;
    position: absolute;
    left: 0;
    top: 0;
    animation: dian 6.2s  ease 1s infinite;
}
@keyframes dian {
        0%{transform: translateX(0);}
        25%{left: 30px;}
        50%{ left:60px;}
        75%{left: 90px;}
        100%{left: 120px;}
        }
</style>
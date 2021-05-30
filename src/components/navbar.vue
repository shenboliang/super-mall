<template>
  <div class="navbar">
    <div class="left">
        <slot name="left"></slot>
    </div>
    <div class="main">
        <slot name="main"></slot>
    </div>
    <div class="right">
        <slot name='right'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.navbar{
    height: 44px;
    width: 100%;
    background-color:pink ;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    font-size: 20px;
    font-weight: bold;
    color: white;
    z-index: 10;
    opacity: 1;
}
.left{
    flex: 1;
}
.main{
    flex: 4;
    text-align: center;
    line-height: 44px;

}
.right{
    flex: 1;
}

</style>

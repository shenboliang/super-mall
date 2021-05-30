<template>
  <div class="cat">

      <navbar>
        <template v-slot:main>
      <div>购物车（0）</div>
  </template>
      </navbar>

      <div class="text">
      <h1>购物车</h1>

      </div>
     

  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '../../components/navbar.vue'


export default {
  name: 'cat',
  components: {
    navbar,
   
  }
}
</script>
<style scoped>
.text{
  margin-top: 44px;
  font-size: 12px;
}
</style>
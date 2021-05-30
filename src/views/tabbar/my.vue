<template>
  <div class="my">
    <navbar>
      <template v-slot:main>
     <div>我的</div>
  </template>
    </navbar>

    <div class="text">

        <h1>我的</h1>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
 import navbar from '../../components/navbar.vue'
 

export default {
  name: 'my',
  components: {
    navbar,

  }
}
</script>
<style scoped>
.text{
  margin-top: 44px;
}
</style>
<template>
  <div id="app" >
    <transition name="el-fade-in" mode="out-in"><router-view></router-view></transition>
  </div>
  <!--<div id="app">-->
    <!--<h3 class="title">{{ msg }}</h3>-->
    <!--<div class="amap-wrapper">-->
      <!--<el-amap class="amap-box" :vid="'amap-vue'"></el-amap>-->
    <!--</div>-->
  <!--</div>-->
</template>

<script>
  export default {
    data () {
      return {
        msg: 'vue-amap向你问好！'
      }
    }
  }
</script>

<style>
  .amap-wrapper {
    width: 500px;
    height: 500px;
  }
</style>

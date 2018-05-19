<template>
  <Row class="footersize" >
    <router-link :to="{name:'pages'}">
      <Button type="text" v-bind:click="topFunction">
        <h3 class="fontsize1">上一节</h3>
      </Button>
    </router-link>
    <router-link :to="{name:'pages2'}">
      <Button type="text" v-bind:click="topFunction">
        <h3 class="fontsize1">下一节</h3>
      </Button>
    </router-link>
    <BackTop :height="100" :bottom="15">
      返回顶部
    </BackTop>
  </Row>
</template>

<script>
  export default {
    data () {
      return {
        theme1: 'light'
      }
    },
    methods:{
     topFunction() {
       document.body.scrollTop = 0
       document.documentElement.scrollTop = 0
     }
    }
  }
</script>
<style scoped>
  ul span{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size:26px ;
  }
  .wrapper-header-nav-list {
    height: inherit;
    float: right;
  }
  .wrapper-header-nav-row{
    height: inherit;
    margin:0 15px 0 50px
  }
.footersize{
  text-align: center;
  background: white;
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  padding-top: 10px;
}

</style>

<template>
  <div id="App">
    <Row class="pages">
      <top></top>
      <sidebar></sidebar>
      <router-view/>
      <foot></foot>
    </Row>
  </div>
</template>

<script>
  import top from './components/pageComponents/top'
  import sidebar from './components/pageComponents/sidebar'
  import pages from './components/pages'
  import foot from './components/pageComponents/footer'
  export default {
    name: 'App',
    components: {top,sidebar,pages,foot}
  }
</script>

<style>
  .pages{
    background: #fff;
    min-height:700px;
  }
  #App {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 700px;
  }
  html,body{
    height:100%;

  }
</style>

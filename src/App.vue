<template>
  <div id="app">
    <top></top>
    <sidebar></sidebar>
    <router-view/>
  </div>
</template>

<script>
import top from './components/pageComponents/top'
import  sidebar from './components/pageComponents/sidebar'
export default {
  name: 'App',
  components: {top,sidebar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 700px;
}
html,body{
  height:100%;
  background-color: rgb(238, 238, 238);
  }
</style>

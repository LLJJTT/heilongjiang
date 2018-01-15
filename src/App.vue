<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
export default {
  name: 'app',
  components:{
    Navbar
  }
}
</script>

<style lang="scss">
@import './css/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height:100%;
  background: #f2f2f2;
  user-select:none;
}
</style>

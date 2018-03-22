<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HomePage from '@/components/homepage'
import Navbar from '@/components/navbar'
import Login from '@/components/login'
import Forget from '@/components/forget'
import Register from '@/components/register'
export default {
  name: 'app',
  components:{
   HomePage,Navbar,Login,Forget,Register
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
  font-weight:bold;
  user-select:none;
}
</style>

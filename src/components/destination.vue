<template>
  <div id="destination">
    <div id="title">
      目的地
    </div>
    <div class="wrapper">
      <el-row>
        <el-col :span="8" v-for="item in heilongjiang" :key="item.id">
          <div @click="goCityList(item.id)" class="div_img">
            <img :src="item.src" alt="">
          </div>
          <p class="city">{{item.city_name}}</p>
          <p class="intro">{{item.info}}</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        heilongjiang:[],
        cityAjax:'http://112.74.63.14/interface/city.php'
      }
    }, 
    methods:{
      goCityList:function(id){
        this.$router.push({
          name:'cityscenerylist',
          params:{
            id:id
          }
        })
      }
    },
    created:function(){
      axios({
        method:'GET',
        url:this.cityAjax
      })
      .then((res)=>{
        this.heilongjiang = res.data
      })
    },
    mounted:function(){
    }
  }
</script>

<style lang="scss" scoped>
  #destination{
    height:100%;
    background: #ffffff;;
    overflow:auto;
    #title{
      background: #a76cf5;
      padding:1rem 0;
      font-size:1rem;
      font-weight:bold;
      letter-spacing:.12rem;
      color:#fff;

    }
    .wrapper{
      padding:4rem 1rem 0.6rem 1rem;
      .div_img{
        display:block;
        margin: 0 auto;
        img{
          width:6rem;
          height:6rem;
          margin: 0 auto;
          padding:0.2rem;
          background: #f2f2f2;

        }
      }
      .city{
        font-size:.8rem;
        color:#393a3c;
        font-weight:bold;
        margin-top: 0.4rem;
      }
      .intro{
        margin-top: 0.4rem;
        font-size:0.2rem;
        color:#888888;
        font-weight:bold;
        padding-bottom:0.6rem;
      }
    }
  }
</style>
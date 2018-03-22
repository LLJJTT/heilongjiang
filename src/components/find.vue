<template>
  <div id="find">
    <div id="title">
      全新攻略
    </div>
    <el-row>
      <el-col :span="24" v-for="item in findData" :key="item.id">
        <div class="wrapper">
          <div class="div_img">
            <img :src="item.src" alt="">
          </div>
          <div>
            <p class="city">{{item.name}}</p>
            <p class="intro">{{item.introduce}}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        ajaxUrl:'http://112.74.63.14/interface/strategy.php',
        findData:[]
      }
    },
    methods:{

    },
    created:function(){
      axios({
        method:'GET',
        url:this.ajaxUrl
      })
      .then((res)=>{
        this.findData = res.data
      })
    },
    mounted:function(){
    }
  }
</script>

<style lang="scss" scoped>
  #find {
    height:100%;
    overflow:auto;
    background: #ffffff;
    #title{
      background: #a76cf5;
      padding:1rem 0;
      font-size:1rem;
      font-weight:bold;
      letter-spacing:.12rem;
      color:#fff;

    }
    .wrapper{
      width:90%;
      margin: .1rem auto;
      padding: 0 0 0.8rem 0;
      border-radius:7px;
      border:1px solid #e8e8e8;
      background: #fff;
      .div_img{
        display:block;
        margin: 0 auto;
        img{
          border-radius:7px 7px 0 0;
          width:100%;
          max-height:10rem;
          margin: 0 auto;
          background: #EBEEF5;
        }
      }
      .city{
        font-size:.8rem;
        color:#303133;
        font-weight:bold;
        margin-top: 0.4rem;
        text-align:left;
        text-indent:.4rem;
      }
      .intro{
        display:inline-block;
        max-height:5rem;
        overflow:auto;
        margin-top: 0.4rem;
        font-size:0.6rem;
        color:#b0b1b2;
        font-weight:bold;
        padding-bottom:0.6rem;
        text-align:left;
        text-indent:.4rem;
      }
    }
  }
</style>
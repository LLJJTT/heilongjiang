<template>
  <div id="my">
    <div id="title">
      我的
    </div>
    <div id="head_img">
      <ul>
        <li><img :src="head_imgSrc" alt=""></li>
        <li>{{username}}</li>
      </ul>
    </div>
    <div id="select">
      <ul>
        <li @click="goCollection">
          <img :src="collection" alt="">&nbsp;&nbsp;<span>我的收藏</span>
        </li>
       <!--  <li @click="goPersonal">
          <img :src="personal" alt="">&nbsp;&nbsp;<span>个人资料</span>
        </li> -->
        <li @click="aboutUs">
          <img :src="aboutus" alt="">&nbsp;&nbsp;<span>关于我</span>
        </li>
      </ul>
    </div>
    <button id="logout" @click="centerDialogVisible = true">{{login}}</button>
    <el-dialog
      :visible.sync="centerDialogVisible"
      width="80%"
      top="15rem"
      center>
      <span slot="title" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="goLogin">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        centerDialogVisible: false,
        // personal:'static/img/personal.png',
        collection:'static/img/collection.png',
        aboutus:'static/img/aboutus.png',
        head_imgSrc:'static/img/head_img_unlogin.png',
        username:'您还未登录',
        login:'去登录',
        userStatus:'',
      }
    },
    methods:{
      goLogin:function(){
        var that  = this
        if (this.userStatus!=''&&this.userStatus!=null&&this.userStatus!=undefined) {
          this.$notify({
            message:'退出成功',
            type:'success',
            duration:3000,
            offset:200,
            onClose:function(){
              sessionStorage.removeItem('username')
              sessionStorage.removeItem('loginUser')              
              that.username = '您还未登录'
              that.login = '去登录'
              that.centerDialogVisible=false
              that.head_imgSrc = 'static/img/head_img_unlogin.png'
            }
          })
        }
        else{

          that.$router.push({path:'/login'})
        }
      },
      aboutUs:function(){
        this.$router.push({path:'/index/aboutus'})
      },
      goCollection:function(){
        this.$router.push({path:'/index/collection'})
      },
      // goPersonal:function(){
      //   this.$router.push({path:'/index/personalinfo'})
      // }
    },
    created:function(){
      this.userStatus = sessionStorage.getItem('username');
      if (this.userStatus!=''&&this.userStatus!=null&&this.userStatus!=undefined) {
        this.head_imgSrc = 'static/img/head_img_login.png'
        this.username= this.userStatus
        this.login = '退出'
      }
    },
    mounted:function(){
    }
  }
</script>

<style lang="scss" scoped>
  #my{
    height:100%;
    background:#f2f2f2;
    #title{
      background: #a76cf5;
      padding:1rem 0;
      font-size:1rem;
      font-weight:bold;
      letter-spacing:.12rem;
      color:#fff;

    }
    #head_img{
      ul{
        li{
          
        }
        li:first-child{
          margin-top: 1rem;
          img{
            vertical-align: middle;
            display: inline-block;
            width: 4rem;
            height: 4rem;
          }
        }
        li:last-child{
          font-size: 1.4rem;
          margin-top: 1.4rem;
          display: inline-block;
          border-bottom: 1px solid #cac8c8;
          padding-bottom: .2rem;
        }
      }
    }
    #select{
      margin-top: 1.8rem;
      ul{
        li{
          width:90%;
          margin: 0 auto;
          font-size:.8rem;
          font-weight:bold;
          padding:.8rem 0;
          border-bottom:1px solid #d8d8d8;
          text-align:left;
          text-indent:1rem;
          img{
            display:inline-block;
            width:1rem;
            height:1rem;
            vertical-align:middle;
          }
        }
      }
    }
    #logout{
      width:90%;
      margin: 0 auto;
      background: #a76cf5;
      color:#fff;
      padding:.5rem 0;
      border-radius:5px;
      margin-top: 6rem;
      box-shadow:none;
      border:none;
      font-size:.8rem;
      font-weight:bold;
    }
  }
</style>
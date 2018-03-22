<template>
  <div id="navbar">
    <el-col 
      :span="6" 
      v-for="item in tabs" 
      :key="item.key" 
      >
      <router-link 
        @click.native="handleClick(item.key)"
        :to="item.path"  
        :class="item.key == tab ? 'active' : ''">
        <div class="wrapper" >
          <li><img :src="item.src" alt=""></li>
          <li>{{item.name}}</li>
        </div>
      </router-link>
    </el-col>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        tabs: [{
          name: '首页',
          path: 'homepage',
          key: 1,
          src:'static/img/index1.png'
        },{
          name: '目的地',
          path: 'destination',
          key: 2,
          src:'static/img/destnation0.png'
        },{
          name: '攻略',
          path: 'find',
          key: 3,
          src:'static/img/find0.png'

        },{
          name: '我的',
          path: 'my',
          key: 4,
          src:'static/img/me0.png'
        }],
        tab: '',
      }
    },
    methods:{
      handleClick:function(e) {
        this.tab = e;
        if (this.tab==1) {
          this.tabs[0].src='static/img/index1.png'
          this.tabs[1].src='static/img/destnation0.png'
          this.tabs[2].src='static/img/find0.png'
          this.tabs[3].src='static/img/me0.png'
        }
        else if(this.tab==2){
          this.tabs[0].src='static/img/index0.png'
          this.tabs[1].src='static/img/destnation1.png'
          this.tabs[2].src='static/img/find0.png'
          this.tabs[3].src='static/img/me0.png'
        }
        else if(this.tab==3){
          this.tabs[0].src='static/img/index0.png'
          this.tabs[1].src='static/img/destnation0.png'
          this.tabs[2].src='static/img/find1.png'
          this.tabs[3].src='static/img/me0.png'
        }
        else if(this.tab==4){
          this.tabs[0].src='static/img/index0.png'
          this.tabs[1].src='static/img/destnation0.png'
          this.tabs[2].src='static/img/find0.png'
          this.tabs[3].src='static/img/me1.png'
        }
      },
    },
    created:function(){
    },
    mounted:function(){
    }
  }
</script>

<style lang="scss" scoped>
  #navbar{
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    padding-top:.8rem;
    border-top:1px solid #e9e9e9;
    height:10%;
    .active{
      .wrapper{
        li:last-child{
          color:#349edd;
        }
      }
    }
    .wrapper{
      li{
        font-weight:bold;
        font-size:0.7rem;
      }
      li:last-child{
      }
      li:first-child{
        img{
          display:inline-block;
          width:1rem;
          height:1rem;
        }
      }
      

    }
    
  }
</style>




<template>
  <div id="homepage">
<!-- 轮播图 -->
    <div id="moveimg">
       <el-carousel :interval="2000" type="card" height="140px" indicator-position="none">
        <el-carousel-item v-for="item in moveImg" :key="item.id">
          <li class="lii">
            <img :src="item.src" alt="">
          </li>
        </el-carousel-item>
      </el-carousel>
    </div>
<!-- 搜索 -->
    <div id="search">
        <el-input placeholder="请输入关键字搜索" v-model="input5" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
<!-- 下一站推荐 -->
    <div id="recommend">
      <ul class="top_ul">
        <li>下一站推荐</li>
        <li>满足丰富多样的出行方式</li>
        <li @click="lookMore">查看更多<i class="el-icon-arrow-right"></i></li>
        <div style="clear:both"></div>
      </ul>
    </div>
    <!-- 左右滑动 -->
    <div id="swiper">
      <el-carousel :interval="2000" arrow="hover" height="200px" indicator-position="none">
        <el-carousel-item v-for="item in swiperdata" :key="item.id">
          <li id="swiper_li">
            <p id="scenery_name">{{item.name}}</p>
            <img @click="goDetail(item)" :src="item.src" alt="">
          </li>
          
        </el-carousel-item>
      </el-carousel>
    </div>
    
<!-- homepage结束 -->
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        recommendAjax:'http://112.74.63.14/interface/recommend.php',
        input5:'',
        // 轮播图数据
        moveImg:[{
            src:'static/img/shanshui.jpeg'
          },{
            src:'static/img/fengye.jpeg'
          },{
            src:'static/img/hupo.jpeg'
          },{
            src:'static/img/jiguang.jpeg'
          },{
            src:'static/img/shuye.jpeg'
          }
        ],
        
        // swiper推荐数据
        swiperdata:[],
      }
    },
    methods:{

      // 进入详情页面
      goDetail:function(item){
        this.$router.push({
          name:'details',
          params:{
            detailData:item,
            collectionType:'rec'
          }
        })
      },

      // 查看更多
      lookMore:function(){
        this.$router.push({path:'/index/recommendlist'})
      },

      // 获取下一站推荐数据
      getRecommendData(){
        axios({
          type:'GET',
          url:this.recommendAjax
        })
        .then((res)=>{
          for (var i = 0; i < 4; i++) {
            this.swiperdata.push(res.data[i])
          }
        })
      }
    },
    created:function(){
      this.getRecommendData()
    },
  }
</script>

<style lang="scss" scoped>
  #homepage{
    height:90%;
    overflow:auto;
    #swiper_li{
      background:#fff;
    }
    #scenery_name{
      color:#aaaaab;
      font-weight:bold;
      position:relative;
      padding:.4rem 0;
    }
  }
  .el-carousel__item h3{
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  #moveimg{
    padding:.5rem 1rem 1rem 1rem;
    .lii{
      img{
        width:100%;
        height:140px;
      }
    }
  }
  #search{
    padding:0 1.8rem;
  }
  #recommend{
    margin-top: 1rem;
    padding:0 1.8rem;
    .top_ul{
      li{
        display:inline-block;
      }
      li:first-child{
        font-size:1rem;
        float:left;
        color:#303133;
      }
      li:nth-child(2){
        font-size:.8rem;
        color:#606266;
        float:left;
        line-height:1.5rem;
        margin-left: 1rem;
      }
      li:nth-child(3){
        font-size:.8rem;
        float:right;
        line-height:1.5rem;
        color:#b96a6a;
      }

    }
  }
  #swiper{
    padding:0 .8rem;
    width:96%;
    margin: 1rem auto;
    img{
      height:200px;
      width:100%;
    }
  }
</style>









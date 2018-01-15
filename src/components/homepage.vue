<template>
  <div id="homepage">
<!-- 轮播图 -->
    <div id="moveimg">
       <el-carousel :interval="2000" type="card" height="200px">
        <el-carousel-item v-for="item in moveImg">
          <li class="lii">
            <img :src="item.src" alt="">
          </li>
        </el-carousel-item>
      </el-carousel>
    </div>
<!-- 搜索 -->
    <div id="search">
        <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
<!-- 导航 -->
    <div id="tabs">
      <el-row>
        <el-col v-for="tab in tabs"  :span="6">
          <div class="tab_div">
            <img :src="tab.src" alt="">
            <p>{{tab.title}}</p>
          </div>
        </el-col>
      </el-row>
    </div>
<!-- 广告 -->
    <div id="ad">
      <div style="float:left">
        <img class="toutiao" :src="toutiao"/>
        <i class="word_toutiao">头条新闻</i>
      </div>
      <div class="swiper_wrap">
        <ul class="font_inner">
          <li class="">
            1调用两条新闻并设定时间上下切换（
          </li>
          <li class="">
            2调用两条新闻并设定时间上下切换
          </li>
          <li class="">
            3调用两条新闻并设定时间上
          </li>
          <li class="">
            4调用两条新闻并设定时间上下切换
          </li>
        </ul>
      </div>
      <div style="clear:both;"></div>
    </div>
<!-- 下一站推荐 -->
    <div id="recommend">
      <ul class="top_ul">
        <li>下一站推荐</li>
        <li>满足丰富多样的出行方式</li>
        <li>查看更多<i class="el-icon-arrow-right"></i></li>
        <div style="clear:both"></div>
      </ul>
    </div>
    <!-- 左右滑动 -->
    <div id="swiper">
      <el-carousel :interval="2000" arrow="hover" height="200px">
        <el-carousel-item v-for="item in swiperdata">
          <img :src="item.src" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
  var aa = require('../../static/js/advertise_scroll.js');
  aa();
  export default{
    data(){
      return{
        // 轮播图数据
        moveImg:[{
            src:'../static/img/aerbeisi.jpg'
          },{
            src:'../static/img/cbs.jpg'
          },{
            src:'../static/img/hrb2.jpg'
          }
        ],
        // 导航数据
        tabs:[{
          title:'景点地图',
          src:'../static/img/jd.png'
        },{
          title:'城市向导',
          src:'../static/img/lxz.png'
        },{
          title:'乡村游',
          src:'../static/img/xc.png'
        },{
          title:'热门景点',
          src:'../static/img/qzk.png'
        }],
        // 头条数据
        input5: '',
        toutiao:'../static/img/tt.png',
        // swiper数据
        swiperdata:[{
          title:'哈尔滨',
          src:'../static/img/hrb1.jpg'
        },{
          title:'七台河',
          src:'../static/img/hrb2.jpg'
        },{
          title:'牡丹江',
          src:'../static/img/hrb3.jpg'
        },{
          title:'牡丹江',
          src:'../static/img/hrb3.jpg'
        }]
      }
    },
    methods:{

    },
    created:function(){
    },
    mounted:function(){
    }
  }
</script>

<style lang="scss" scoped>
#homepage{
  height:90%;
  overflow:auto;
}
  .el-carousel__item h3 {
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
    padding:0 1rem;
  }
  #search{
    padding:0 1rem;
  }
  #tabs{
    padding:1rem 1rem;
  }
  .tab_div img{
    display:inline-block;
    width:2.5rem;
    height:2.5rem;
  }
  .tab_div p{
    margin-top: .25rem;
    font-size:.6rem;
    color:#303133;
  }
  #ad{
    padding:0 2rem;
    position:relative;
    .toutiao
    {
      width:6rem;
      height:3rem;
      display:block;
      float:left;
    }
    .word_toutiao{
      float:left;
      color: #fff;
      font-size: 0.6rem;
      position: relative;
      font-weight: bold;
      line-height:3rem;
      margin-left:-3.8rem;
    }
    .swiper_wrap{
      height:1.4rem;
      text-align:left;
      border-radius: 2px;
      padding:0 0.2rem 0 0.2rem;
      color: #FFFFFF;
      background: #007AFF;
      margin-left: 6rem;
      margin-top: -2.15rem;
      overflow: hidden;
      float:left;
     }
     .font_inner{
      position: relative;
       li{
        height:1.25rem;
        color:#fff;
        font-size:.7rem;
       }
     }
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
        font-size:.6rem;
        color:#606266;
        float:left;
        line-height:1.5rem;
        margin-left: 1rem;
      }
      li:nth-child(3){
        font-size:.6rem;
        float:right;
        line-height:1.5rem;
        color:#b96a6a;
      }

    }
  }
  #swiper{
    padding:0 .8rem;
    width:90%;
    margin: 1rem auto;
  }
</style>









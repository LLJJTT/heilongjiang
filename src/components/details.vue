<template>
	<div id="details">
		<!-- 头 -->
		<div id="head">
			<!-- <i @click="goBack" class="el-icon-back prev"></i> -->
			<span class="name">{{detailData.name}}</span>
			<i @click="collect" :class="col"></i>
		</div>
		<!-- 轮播图 -->
    <div id="swiper">
      <img :src="detailData.src" alt="">
    </div>
    <!-- 信息简介 -->
    <div id="infomation">
    	<el-card class="box-card">
    		<div slot="header">
			    <span>基本信息</span>
			  </div>
			  <div class="info">
			  	<li><i>景区级别：</i><i>{{detailData.level}}</i></li>
			  	<li><i>景点类型：</i>{{detailData.type}}</li>
			  	<li><i>交通路线：</i>{{detailData.route}}</li>
			  	<li><i>景区电话：</i>{{detailData.telephone}}</li>
			  	<li><i>景区地址：</i>{{detailData.address}}</li>
			  </div>
  		</el-card>
  		<el-card class="box-card">
    		<div slot="header">
			    <span>景点介绍</span>
			  </div>
			  <div class="intro_div">
			  	<li>{{detailData.introduce}}</li>
			  </div>
  		</el-card>
    </div>
    <el-dialog
      title="立即去登录"
      :visible.sync="centerDialogVisible"
      width="80%"
      top="15rem"
      center>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="goLogin">确 定</el-button>
      </span>
    </el-dialog>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
        centerDialogVisible: false,
        detailData:[],
        collectStatus:false,
        user_id:'',
        scenery_id:'',
        collectUrl:'http://112.74.63.14/interface/collection.php',
        cancelUrl:'http://112.74.63.14/interface/cancelcollection.php',
        ifcollectUrl:'http://112.74.63.14/interface/ifcollect.php',
        collectionType:'',
        col:'el-icon-star-off collection'

      }
		},
		methods:{
			startNum(){
				// 星星级别
				var oLevel = ''
				for (var i = 0; i < this.detailData.level; i++) {
					oLevel+=i;
				}
				var A = oLevel.length
				if (A==1) {
					this.detailData.level = 'A'
				}
				else if(A==2){
					this.detailData.level = 'AA'
				}
				else if(A==3){
					this.detailData.level = 'AAA'
				}
				else if (A==4) {
					this.detailData.level = 'AAAA'
				}
				else{
					this.detailData.level = 'AAAAA'
				}
			},
			goLogin:function(){
        this.$router.push({path:'/login'})
      },
			goBack:function(){
				history.back()
			},
			collect:function(){
				var userId = sessionStorage.getItem('username')
				// 判断登录状态
				if (userId!=''&&userId!=null&userId!=undefined) {
					// 判断是否是destination分类
					if (this.collectionType=='des') {
						// 判断当前的收藏状态，是否收藏过
						if (this.collectStatus==false) {
							var bodyFormData = new FormData()
		        	bodyFormData.append('user_id',this.user_id);
		        	bodyFormData.append('scenery_id',this.scenery_id);
							axios({
								method:"POST",
						    url:this.collectUrl,
						    data:bodyFormData,
		        		config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
							})
							.then((res) =>{
								// 收藏成功
								if (res.data.status==1) {
									this.col = 'el-icon-star-on collection'
									this.collectStatus = true
									this.$notify({
										type:'success',
										message:'收藏成功',
										duration:800,
										offset:100,
									})
								}
								else if (res.data.status==0){
									this.col = 'el-icon-star-off collection'
									this.collectStatus = false
									this.$notify({
										type:'success',
										message:'收藏失败',
										duration:800,
										offset:100,
									})
								}
							})
							.catch((res) =>{
								this.$notify({
									type:'error',
									message:'收藏失败',
									duration:800,
									offset:100,
								})
							})
						}
						else{
							var bodyFormData = new FormData()
		        	bodyFormData.append('user_id',this.user_id);
		        	bodyFormData.append('scenery_id',this.scenery_id);
							axios({
								method:"POST",
						    url:this.cancelUrl,
						    data:bodyFormData,
		        		config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
							})
							.then((res) =>{
								if (res.data.status==1) {
									this.col = 'el-icon-star-off collection'
									this.collectStatus = false
									this.$notify({
										type:'warning',
										message:'你已经取消收藏',
										duration:800,
										offset:100,
									})
								}
								else if (res.data.status==0){
									this.col = 'el-icon-star-on collection'
									this.collectStatus = true
									this.$notify({
										type:'error',
										message:'取消收藏失败',
										duration:800,
										offset:100,
									})
								}
							})
							.catch((res) =>{
								this.$notify({
									type:'error',
									message:'取消收藏失败',
									duration:800,
									offset:100,
								})
							})
						}
					}
					else if (this.collectionType=='rec') {
						this.$toast({
							message:'不可收藏',
							duration:1000,
							position:'middle',
							type:'success'
						})
					}
				}
				else{
					this.$toast({
						message:'你还没有登录',
						duration:1000,
						position:'middle',
						type:'success'
					})
				}
			},
			ifCollection(){
				// 判断传递过来的类型
				if (this.collectionType=='des') {
					// 取session user_id
					const loginUser = JSON.parse(sessionStorage.loginUser)
					this.user_id = loginUser.data.user_id
					var bodyFormData = new FormData()
		    	bodyFormData.append('user_id',this.user_id)
		    	bodyFormData.append('scenery_id',this.scenery_id)
					axios({
						method:"POST",
				    url:this.ifcollectUrl,
				    data:bodyFormData,
		    		config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
					})
					.then((res) =>{
						// console.log(res.data)
						if (res.data.length==1) {
							this.col = 'el-icon-star-on collection'
							this.collectStatus = true
						}
						else if (res.data.status==0){
							this.col = 'el-icon-star-off collection'
							this.collectStatus = false
						}
					})
					.catch((error) =>{
						console.log(error)
					})
				}
			}
		},
		created:function(){
			// 获取传惨数据
			this.detailData = this.$route.params.detailData
			this.collectionType = this.$route.params.collectionType
			// console.log(this.detailData)
			this.scenery_id = this.detailData.scenery_id
			this.startNum()
			var userId = sessionStorage.getItem('username')
			// 判断登录状态
			if (userId!=''&&userId!=null&userId!=undefined) {
				this.ifCollection()
			}
		}
	}
</script>

<style lang="scss" soped>
	#details{
		height:100%;
		background: #fdfdfd;
		#head{
			background:rgba(0,0,0,0.2);
			z-index:999;
	    padding:1rem 0;
	    font-size:1rem;
	    font-weight:bold;
	    letter-spacing:.12rem;
	    color:#fff;
	    position:relative;
	    top:0rem;
			.prev{
				font-weight:bold;
				position:absolute;
				left:1rem;
				top:.2rem;
				padding:1rem;
			}
			.name{
				font-size:.9rem;
			}
			.collection{
				color:#f5f529;
				font-weight:bold;
				position:absolute;
				right:1rem;
				top:.2rem;
				padding:1rem;
			}
    }
    #swiper{
    	z-index:998;
    	position:relative;
    	margin-top: -3.5rem;
	    width:100%;
	    img{
	      height:200px;
	      width:100%;
	    }
  	}
  	#infomation{
  		text-align:left;
  		.box-card{
  			margin-top:.4rem;
  		}
  		.el-card__header{
  			padding:.8rem 20px;
  			color:#147dd0;
  			span{
  				font-size:.8rem;
  				padding-left:10px;
  				border-left:2px solid #147dd0;
  			}
  		}
  		.info{
  			li{
  				color:#9fa6ab;
  				margin-top: .8rem;
  				i{
  					color:#484848;
  				}
  			}
  			li:first-child{
  				i:nth-child(2){
  					letter-spacing:.2rem;
  					color: #ff6500;
  					font-weight: bold;
  				}
  			}
  		}
			.intro_div{
				li{
					color:#9fa6ab;
				}
			}
  	}
	}
</style>
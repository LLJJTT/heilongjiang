<template>
	<div id="recommendlist">
		<!-- 头 -->
		<div id="head">
			<i @click="goBack" class="el-icon-back prev"></i>
			<span class="name">下一站推荐</span>
		</div>
		<div class="wrapper" v-for="item in wrapperData">
			<el-row>
				<el-col :span="24">
					<el-card :body-style="{padding:'5px'}">
						<img @click="goDetails(item)" :src="item.src" class="image">
						<div style="padding:8px;">
							<span>{{item.name}}</span>
						</div>
					</el-card>
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
				wrapperData:[],
				recommendlistAjax:'http://112.74.63.14/interface/recommend.php'
			}
		},
		methods:{
			goBack:function(){
				history.back();
			},
			goDetails:function(item){
				this.$router.push({
					name:'details',
					params:{
						detailData:item,
					  collectionType:'rec'
					}
				})
			}
		},
		created:function(){
			axios({
				type:'POST',
				url:this.recommendlistAjax
			})
			.then((res)=>{
				this.wrapperData = res.data
			})
		}
	}
</script>

<style lang="scss" scoped>
	#recommendlist{
		#head{
			background:#a76cf5;
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
  	}
  	.wrapper{
  		padding:.4rem 0;
  		width: 96%;
  		margin: 0 auto;
  		img{
  			width: 100%;
  			height:10rem;
  		}
  	}
	}
</style>
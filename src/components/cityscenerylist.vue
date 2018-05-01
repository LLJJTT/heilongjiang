<template>
	<div id="cityscenerylist">
		<div id="head">
			<i @click="goBack" class="el-icon-back prev"></i>
			<span class="city_name">当前城市名字</span>
		</div>
		<div @click="goDetail(item)" class="wrapper" v-for="item in listData">
			<div class="scenery_name">
				{{item.name}}
			</div>
			<div class="info">
				<div class="list_left">
					<img :src="item.src" alt="">
				</div>
				<div class="list_right">
					<ul>
						<li>
							<el-rate
							  v-model="item.level"
							  disabled
							  text-color="#ff9900"
							  >
							</el-rate>
						</li>
						<li>
							<span class="type">{{item.type}}</span><span class="address"><i>{{item.address}}</i></span>
							<div style="clear:both;"></div>
						</li>
					</ul>
				</div>
				<div style="clear:both;"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from'axios'
	export default{
		data(){
			return{
				cityAjax:'http://112.74.63.14/interface/city_list.php',
				id:'',
				listData:[]
			}
		},
		methods:{
			goBack:function(){
				history.back();
			},
			goDetail:function(item){
				this.$router.push({
					name:'details',
					params:{ 
						detailData:item,
						collectionType:'des'
					}
				})
			}
		},
		created:function(){
			this.id = this.$route.params.id
			var BodyFormData = new FormData();
			BodyFormData.append('city_id',this.id);
			axios({
				method:'POST',
				url:this.cityAjax,
				data:BodyFormData,
    		config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
			})
			.then((res) =>{
				this.listData = res.data
				this.listData.map(item => {
					item.level = Number(item.level)
				})
			})
			.catch((error) =>{
				console.log(error)
			})
		}
	}
</script>

<style lang="scss" scoped>
	#cityscenerylist{
		height:100%;
		background: #eaeaea;
		color: #4a4a4a;
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
			.city_name{
				font-size:.9rem;
			}
  	}
  	.wrapper{
  		background: #fff;
  		width: 96%;
  		margin: .4rem auto;
  		padding: .2rem .4rem;
  		text-align: left;
  		border-radius: 6px;
  		.scenery_name{
  			padding: .4rem .4rem;
  			border-bottom:1px solid #d4d2d2;
  		}
  		.info{
  			padding: .4rem .4rem;
  			.list_left{
					float:left;
					img{
						width:4rem;
						height:4rem;
					}
				}
				.list_right{
					li{
						margin-left: 5rem;
					}
					li:first-child{
						margin-top: .5rem;
					}
					li:nth-child(2){
						margin-top: .8rem;
						position: relative;
						.type{
							display: inline-block;
							max-width: 5.5rem;
							overflow: hidden;
							text-overflow:ellipsis;
							white-space: nowrap;
						}
						span:nth-child(2){
							display: inline-block;
							float: right;
							font-weight: bold;
							max-width: 10rem;
							overflow: hidden;
							text-overflow:ellipsis;
							white-space: nowrap;
							i{
								color: #5995af;
								font-weight: bold;
							}
						}
					}
				}
  		}
  		
  	}
		
	}
</style>







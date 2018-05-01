<template>
	<div id="collection">
		<div id="title">
			<i @click="prev" class="el-icon-back prev"></i>
			我得收藏
		</div>
		<div v-if="list_hidden" id="list">
			<div id="empty">
				<p>好看的不能让TA溜走</p>
				<p>点击<i class="el-icon-star-off"></i>收起来</p>
				<p>登录后喜欢会同步保存，永远不会消失</p>
			</div>
		</div>
		<div v-if="wrapper_hidden" @click="goDetail(item)" class="wrapper" v-for="item in listData">
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
							<span class="type">{{item.type}}</span><span class="address"><i>{{item.name}}</i></span>
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
	import axios from 'axios'
	export default{
		data(){
			return{
				listData:[],
				colUrl:'http://112.74.63.14/interface/collectionlist.php',
				list_hidden:false,
				wrapper_hidden:true,
			}
		},
		methods:{
			prev:function(){
				this.$router.push({
					path:'/index/my'
				})
			},
			goDetail:function(item){
				// console.log(item)
				this.$router.push({
					name:'details',
					params:{
						detailData:item,
						collectionType:'des'
					}
				})
			},
			getCollectionData(){
				const user_id = JSON.parse(sessionStorage.loginUser).data.user_id
				console.log(user_id)
				var bodybormdata = new FormData();
				bodybormdata.append('user_id',user_id);
				if (user_id!=''&&user_id!=null&user_id!=undefined) {
					axios({
						method:'POST',
						url:this.colUrl,
						data:bodybormdata,
						config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
					})
					.then((res) =>{
						console.log(res.data)
						if (res.data.status==0) {
							this.list_hidden = true
						}
						else if (res.data.length>=1){
							this.listData = res.data
							this.listData.map(item => {
								item.level = Number(item.level)
							})
						}
					})
					.catch((error)=>{
						console.log(error)
					})
				} 
				else{
					this.list_hidden = true
				}
			}
		},
		created:function(){
			var User = sessionStorage.getItem('username')
			if (User==''||User==null||User==undefined) {
				this.list_hidden=true
			}
			else{
				this.getCollectionData()
			}
		},
		mounted:function(){

		}

	}
</script>

<style lang="scss" scoped>
	#collection{
		#title{
			background: #a76cf5;
	    padding:1rem 0;
	    font-size:1rem;
	    font-weight:bold;
	    letter-spacing:.12rem;
	    color:#fff;
			.prev{
				font-weight:bold;
				position:absolute;
				left:1rem;
				top:.2rem;
				padding:1rem;
			}
    }
    #list{
    	padding:1rem;
    	#empty{
				padding:5rem 1rem 1rem 1rem;
				p{
					margin-top: 1rem;
				}
				p:first-child{
					font-size:1rem;
				}
				p:nth-child(2){
					
					font-size:1.4rem;
					color:#df9db3;
					i{
						font-size:2rem;
						padding:0 .6rem;
					}
				}
				p:last-child{
					padding:.6rem 0 0 0;
					display:inline-block;
					border-top:1px solid #dfdfdf;
					font-size:1rem;
				}
    	}
    }

    .wrapper{
  		background: #fff;
  		width: 96%;
  		margin: .8rem auto;
  		padding: .2rem .4rem;
  		text-align: left;
  		border-radius: 6px;
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
<template>
	<div id="login" :style="img">
		<p class="font">Welcome</p>
		<p class="font">Welcome to the green world where you can find hopeful and vitality</p>
		<input class="phone inp" v-model="phoneNumber" placeholder="请输入11位手机号"></input>
		<input class="pass inp" type="password" v-model="passWord" placeholder="请输入密码"></input>
		<el-button class="inp" @click.native="Login" type="primary">Login</el-button>
		<el-row>
			<el-col @click.native="goRegister" :span="8">注册用户</el-col>
			<el-col :span="8">|</el-col>
			<el-col @click.native="goForget" :span="8">忘记密码</el-col>
		</el-row>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				phoneNumber:'',
				passWord:'',
				img:{background:'url(' + require('../../static/img/pubu.jpg') + ')'},
				loginUrl:'http://112.74.63.14/interface/login.php'
			}
		},
		methods:{
			Login:function(){
				const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (this.phoneNumber=='') {
					this.$notify({
						message:'请输入手机号',
						type:'error',
						duration:1000,
						offset:200,

					});
				}
				else if(reg.test(this.phoneNumber)!=true){
					this.$notify({
						message:'请输入正确手机号',
						type:'error',
						duration:1000,
						offset:200
					});
				}
				else if (this.passWord=='') {
					this.$notify({
						message:'请输入密码',
						type:'error',
						duration:1000,
						offset:200
					});
				}
				else if(this.passWord.length<6||this.passWord.length>11){
					this.$notify({
						message:'密码长度6-11位',
						type:'error',
						center:true,
						duration:1000,
						offset:200
					});
				}
				else{
					var bodyFormData = new FormData()
        	bodyFormData.append('username',this.phoneNumber);
        	bodyFormData.append('pwd',this.passWord);
					axios({
						method:"POST",
				    url:this.loginUrl,
				    data:bodyFormData,
        		config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
					})
					.then((res) =>{
						console.log(res.data)
						var that =this
						if (res.data.status==2) {//密码错误
							this.$notify({
								message:res.data.msg,
								type:'warning',
								center:true,
								duration:1000,
								offset:200
							})
						}
						else if(res.data.status==1){//登录成功
							// success
							sessionStorage.setItem('username',this.phoneNumber);
							const loginUser = JSON.stringify(res)
							sessionStorage.loginUser = loginUser
							this.$notify({
								message:res.data.msg,
								type:'success',
								center:true,
								duration:1000,
								offset:200,
								onClose:function(){
									that.$router.push({path:'/index/homepage'})
								}
							})
						}
						else{//用户还没注册
							this.$notify({
								message:res.data.msg,
								type:'error',
								center:true,
								duration:1000,
								offset:200
							})
						}
					})
					.catch((error) =>{
						this.$notify({
							message:'未知错误',
							type:'error',
							duration:2000,
							offset:200,
						});
					})
					// this.success();
				}
			},
			goRegister:function(){
				this.$router.push({path:'/register'})
			},
			goForget:function(){
				// this.$router.push({path:'/forget'})
				this.$notify({
					message:'请联系管理员Tel:187-4570-8406',
					type:'success',
					duration:1500,
					offset:200
				})
			},
			success:function(){
				this.$router.push({path:'/index/homepage'})
			}
		}
	}
</script>

<style lang="scss" scoped>
	#login{
		height:100%;
		// background-image: url('../../static/img/pubu.jpg');
		p:first-child{
			font-size:2.6rem;
			font-weight:bold;
			padding-top: 6rem;
		}
		p:nth-child(2){
			font-size:1rem;
			font-weight:bold;
			color:#f29b52;
			padding-top: 2rem;
		}
		.font{
			color:#fff;
		}
		.phone{
			margin-top: 4rem !important;
			background: #f2f2f2;
		}
		.pass{
			background: #f2f2f2;
		}
		.inp{
			text-align:center;
			font-weight:bold;
			opacity: .9;
			padding:10px;
			box-shadow:none;
			border:none;
			width:90%;
			margin: 0 auto;
			border-radius:16px !important;
			margin-top: 2rem;
		}
		.el-row{
			margin-top: 4rem;
			color:#fff;
			font-weight:bold;
			font-size:1rem;
			padding:0 3rem;
		}
	}
</style>





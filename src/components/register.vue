<template>
	<div id="register" :style="img">
		<div id="head">
			<i @click="goBack" class="el-icon-arrow-left"></i>
			注册
		</div>
		<div id="content">
			<div class="wrapper">
				<el-row>
					<el-col class="title" :span="8">手机号</el-col>
					<el-col :span="16"><input v-model="phoneNumber" class="inp phoneNmuber" type="number" placeholder="请输入11位手机号"></el-col>
				</el-row>
			</div>
			<div class="wrapper">
				<el-row>
					<el-col class="title" :span="8">密码</el-col>
					<el-col :span="16"><input v-model="passWord" class="inp passWord" type="password" placeholder="密码限定6-11位"></el-col>
				</el-row>
			</div>
			<div class="wrapper">
				<el-row>
					<el-col class="title" :span="8">验证码</el-col>
					<el-col :span="16">
						<el-row>
							<el-col :span="12">
								<input v-model="sureCode" class="inp sureCode" type="text" placeholder="验证码">
							</el-col>
							<el-col :span="12">
								<input @click="refresh" v-model="imgCode" class="inp code" type="text" readonly="readonly">
							</el-col>
						</el-row>
						
					</el-col>
					
				</el-row>
			</div>
		</div>

		<div id="complete">
			<el-button class="finish" @click="regSuccess">完成</el-button>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
	export default{
		data(){
			return{
				img:{
					background:'url(' + require('../../static/img/kongmingdeng.jpg') + ')'
				},
				phoneNumber:'',
				passWord:'',
				sureCode:'',
				imgCode:'',
				registerUrl:'http://112.74.63.14/interface/register.php'
			}
		},
		methods:{
			goBack:function(){
				this.$router.push({path:'/login'})
			},
			regSuccess:function(){
				const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (this.phoneNumber=='') {
					this.$notify({
						message:'请输入手机号',
						type:'error',
						duration:800,
						offset:200,
					});
				}
				else if (reg.test(this.phoneNumber)!=true) {
					this.$notify({
						message:'请输入正确手机号',
						type:'error',
						duration:800,
						offset:200,
					});
				}
				else if (this.passWord=='') {
					this.$notify({
						message:'请输入密码',  
						type:'error',
						duration:800,
						offset:200,
					}); 
				}
				else if (this.passWord.length<6||this.passWord.length>11) {
					this.$notify({
						message:'密码长度在6-11位',
						type:'error',
						duration:800,
						offset:200,
					});
				}
				else if (this.sureCode=='') {
					this.$notify({
						message:'请输入验证码',
						type:'error',
						duration:800,
						offset:200,
					});
				}
				else if(this.sureCode!=this.imgCode){
					this.$notify({
						message:'验证码输入错误',
						type:'error',
						duration:800,
						offset:200,
					});
				}
				else if (this.sureCode==this.imgCode) {
					console.log(this.phoneNumber);
					console.log(this.passWord);
					var bodyFormData = new FormData()
        	bodyFormData.append('username',this.phoneNumber);
        	bodyFormData.append('pwd',this.passWord);
					axios({
						method:"POST",
				    url:this.registerUrl,
				    data:bodyFormData,
        		config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
					})
					.then(res => {
						console.log(res.data)
						if (res.data.status==0) {
							this.$notify({
								message:res.data.msg,
								type:'error',
								duration:2000,
								offset:200,
							});
						}
						else if (res.data.status==1){
							var that = this
							this.$notify({
								message:res.data.msg,
								type:'success',
								duration:3000,
								offset:200,
								onClose:function(){
									that.$router.push({
										path:'/login'
									})
								}
							});
						}
						else{
							this.$notify({
								message:res.data.msg,
								type:'success',
								duration:2000,
								offset:200,
							});
						}
					})
					.catch(error =>{
						this.$notify({
							message:'未知错误',
							type:'error',
							duration:2000,
							offset:200,
						});
					})
					// sessionStorage.setItem('username',this.phoneNmuber);
					// sessionStorage.setItem('password',this.passWord);
				}
			},
			createCode:function() {
					this.imgCode="";
				  const codeLength = 5;//验证码的长度  
				  const selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9); 
				  for (let i = 0; i < codeLength; i++) { 
				    let charIndex = Math.floor(Math.random() * 10);
				    this.imgCode += selectChar[charIndex];
				  }
			},
			refresh:function(){
				const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (reg.test(this.phoneNmuber)==true&&this.passWord.length>=6&&this.passWord.length<=11) {
					this.createCode();
					console.log(this.imgCode)
				}
			}
		},
		created:function(){
			this.createCode();
		}
	}
</script>

<style lang="scss" scoped>
	#register{
		height:100%;
		#head{
			height:2rem;
			// background:#fff;
			line-height:3rem;
			color:#fff;
			font-size:1rem;
			font-weight:bold;
			i{
				position:absolute;
				left:2rem;
				top:1rem;
				font-weight:bold;
			}
		}
		#content{
			border-radius:5px;
			background:rgba(0,0,0,0.9);
			width:90%;
			margin: 7rem auto;
			padding:1rem .5rem;
			.wrapper{
				padding:1.4rem 1rem;
				// margin-top: 1rem;
				.inp{
					border:none;
					box-shadow:none;
					background: #000;
					color:#fff;
					font-weight:bold;
					font-size:.8rem;
				}
				.phoneNmuber{
					padding:.4rem .8rem;
				}
				.passWord{
					padding:.4rem .8rem;
				}
				.sureCode{
					width:80%;
					padding:.4rem 0;
					text-align:center;
				}
				.code{
					padding:.4rem 0;
					width:80%;
					background: #142662;
					border-radius:2px;
					text-align:center;
					letter-spacing:.12rem;
				}
			}
			.wrapper:nth-child(2){
				border-top:1px solid #f7f7f7;
			}
			.wrapper:nth-child(3){
				border-top:1px solid #f7f7f7;
			}
			.title{
				font-size:1rem;
				color:#2f5079;
				font-weight:bold;
				border-right:2px solid #f3f3f3;

			}
		}
		#complete{
			width:90%;
			margin: 0 auto;
			.finish{
				width:100%;
				background:rgba(0,0,0,0.6);
				border:none;
				box-shadow:none;
				border-radius:5px;
				color:#fff;
				font-weight:bold;
				font-size:1rem;
			}
		}
	}
</style>




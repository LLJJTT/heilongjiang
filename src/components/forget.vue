<template>
	<div id="forget" :style="img">
		<div id="head">
			<i @click="goBack"  class="el-icon-arrow-left"></i>
			找回密码
		</div>
		<ul>
			<li>
				<input v-on:keyup="getCodeBg" v-model="phoneNumber" id="phone" class="inp" type="text" placeholder="注册的手机号">
			</li>
			<li>
				<input v-model="code" id="code" class="inp" type="text" placeholder="点击右侧获取验证码"><button disabled @click="getCode" id="getcode" class="inp">获取验证码</button>
			</li>
			<li>
				<button @click="findPass" id="next" class="inp">找回</button>
			</li>
		</ul>
		<div id="foot">
			<p>忘记手机号?&nbsp;&nbsp;&nbsp;请联系开发者&nbsp;或<a href="tel:18745708406">联系客服</a></p>
		</div>
	</div>
</template>
<script>
	var phoneCode = ''
	export default{
		phoneCode,
		data(){
			return{
				img:{background:'url(' + require('../../static/img/kongmingdeng.jpg') + ')'},
				phoneNumber:'',
				code:'',
				
			}
		},
		methods:{
			// 返回登录界面
			goBack:function(){
				this.$router.push({path:'/login'})
			},
			// 判断是手机号码格式
			findPass:function(){
				const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (this.phoneNumber=='') {
					this.$message({
						message:'请输入手机号',
						type:'error',
						center:true
					});
				}
				else if(reg.test(this.phoneNumber)!=true){
					this.$message({
						message:'请输入正确手机号',
						type:'error',
						center:true
					});
				}
				else if (this.code=='') {
					this.$message({
						message:'请输入验证码',
						type:'error',
						center:true
					});
				}
				else if (this.code!=phoneCode) {
					this.$message({
						message:'验证码输入错误',
						type:'error',
						center:true,
					})
				}
				else if (this.code==phoneCode) {
					this.$message({
						message:'请重新注册修改密码',
						type:'success',
						center:true,
						duration:5000
					})
					this.$router.push({path:'/register'})
				}
			},
			// 展示可点击验证码按钮
			getCodeBg:function(){
				const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
				const getCodeBg = document.querySelector('#getcode');
				if (reg.test(this.phoneNumber)==true) {
					getCodeBg.style.background='#261b88';
					getCodeBg.removeAttribute('disabled')
				}
				else{
					getCodeBg.style.background='';
					getCodeBg.setAttribute('disabled','disabled')
				}
			},
			// 点击获取验证码
			getCode:function(){
				const getCodeBg = document.querySelector('#getcode');
				getCodeBg.setAttribute('disabled','disabled')
				let time = 15;
				const T = setInterval(function(){
					time --;
					getCodeBg.innerText=time+'s重发'
					if (time == 10) {
						getCodeBg.removeAttribute('disabled')
						time = 15
						clearInterval(T);
						getCodeBg.innerText='获取验证码'
						phoneCode = ''
						// 显示验证码
						for (var i = 0; i < 5; i++) {
	    			    	var Rand =Math.floor(Math.random()*10);
	    			    	phoneCode +=Rand
					    }
					    alert(phoneCode)

					}
				},1000)
			},


		}
	}
</script>

<style lang="scss" scoped>
	#forget{
		height:100%;
		#head{
			height:2rem;
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
		#foot{
			margin-top: 14rem;
			p{
				color:#fff;
				font-size:.8rem;
				a{
					color:#0c5593 !important;
				}
			}
		}
		ul {
			padding-top: 6rem;
			li{
				display:block;
				width:90%;
				margin: 0 auto;
				margin-top: 2rem;
				input{
					box-shadow:none;
				}
				.inp{
					padding:.6rem .4rem;
					color:#fff;
				}
				#phone{
					text-indent:10px;
					width:100%;
					border-radius:12px;
					border:1px solid #f5f5f5;
					text-align:center;
				}
				#code{
					text-indent:10px;
					width:70%;
					border-radius:12px 0 0 12px;
					border-right:none !important;
					border:1px solid #f5f5f5;
				}
				#getcode{
					width:30%;
					border-radius:0 12px 12px 0;
					text-align:center;
					border:1px solid #f5f5f5;
					padding:.52rem .8rem;
					letter-spacing:.12rem;
					line-height:1rem;

				}
				#next{
					width:98%;
					border-radius:12px;
					background-color:rgba(13,12,12,0.7);
					font-size:.9rem;
				}
			}

		}
	}
</style>







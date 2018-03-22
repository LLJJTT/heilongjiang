<template>
	<div id="aboutus">
		<div id="title">
			<i @click="prev" class="el-icon-back prev"></i>
			关于我
		</div>
		<div id="introduce">
			<p>
				本人学识渊博，经验丰富，代码风骚，效率恐怖<br>
				c c++ java php无所不通 熟练掌握各种框架<br>
				深山苦练20年，一天只睡三十分钟，电话通知出bug后秒登vpn<br>
				千里之外定位问题，瞬间修复<br>
				本人身强体壮，可连续编程100小时不休息，讨论方案24小时不喝水<br>
				上至带项目，出方案，下至盗账号，威胁pm，学校不支持编程已辍学，家人不支持编程已断绝关系，老婆不支持编程已离婚，小孩不支持编程已送孤儿院<br>备用电源光钎百兆永不断网，门口已经埋雷无人干扰<br>现本人求一份IT公司端茶送水工作，谢谢<br>				
		</p>
		<p>2018年1月24日</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		methods:{
			prev:function(){
				this.$router.push({
					path:'/index/my'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	#aboutus{
		height:100%;
		background: #a76bf5;
		#title{
			.prev{
				font-weight:bold;
				position:absolute;
				left:1rem;
				top:.2rem;
				padding:1rem;
			}
      background: #a76cf5;
      padding:1rem 0;
      font-size:1rem;
      font-weight:bold;
      letter-spacing:.12rem;
      color:#fff;
    }
    #introduce{
    	margin-top: 6rem;
    	padding: 0 .6rem;
    	p{
    		line-height:1.5rem;
    		font-size:.9rem;
    		font-weight:bold;
    		color:#fff;
    	}
    	p:last-child{
    		margin-top: 4rem;
    		text-align:right;
    	}
    }
	}
</style>
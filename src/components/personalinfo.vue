<template>
	<div id="personalinfo"
		v-loading="loading"
    element-loading-text="放心肯定加载不出来"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
	>
		<div id="title">
			<i @click="prev" class="el-icon-back prev"></i>
			个人资料
		</div>
		<div id="intro">
			<el-card class="box-card">
			  <div slot="header" class="clearfix">
			    <span>个人信息</span>
			    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
			  </div>
			  <div  class="text item">
			  	<div class="op">
			  		<span>性别</span>
			  		<el-select v-model="value"
			  		size="small">
					    <el-option
					      v-for="item in gendel"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
			  	</div>
			  	<div class="op">
			  		<span>年龄</span>
			  		<el-select v-model="valueAge"
			  		size="small">
					    <el-option
					      v-for="item in Age"
					      :key="item"
					      :label="item"
					      :value="item">
					    </el-option>
					  </el-select>
			  	</div>
			  </div>
			</el-card>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				loading:false,
        value: '男',
				gendel: [{
          value: '男',
          label: '男'
        }, {
          value: '女',
          label: '女'
        }],
        valueAge:25,
        Age: [],

			}
		},
		methods:{
			prev:function(){
				this.$router.push({
					path:'/index/my'
				})
			},
			getAge:function(){
				this.Age = []
				for (var i = 12; i <=70; i++) {
					this.Age.push(i)
				}
			},
		},
		mounted:function(){

		},
		created:function(){
			this.getAge()
		}
	}
</script>

<style lang="scss" scoped>

	#personalinfo{
		height:100%;
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
    #intro{
    	.gendel{
    		margin-top: 1rem;
    		padding:12px 7rem;
    	}
    	.text {
		    font-size: .8rem;
		  }
		  .item {
		    margin-bottom: 1rem;
		  }
		  .clearfix:before,
		  .clearfix:after {
		    display: table;
		    content: "";
		  }
		  .clearfix:after {
		    clear: both
		  }
		  .el-select{
		  	margin-left: 1.8rem;
		  }
		  .box-card {
		    width:90%;
		    margin: 1rem auto;
		    text-align:left;
		    .op{
		    	margin-top: 1rem;
		    }
		  }

    }
	}
</style>
<template>
	<div id="index">
		<v-nav></v-nav>
    	<router-view></router-view>
	</div>
</template>
<script>
import Navbar from '@/components/navbar'
	export default{
		data(){
			return{

			}
		},
		components:{
			'v-nav':Navbar
		}
	}
</script>

<style lang="scss" scoped>
	#index{
		height:90%;
		overflow:auto;
	}
</style>
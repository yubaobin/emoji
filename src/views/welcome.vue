<!-- 
	欢迎页面
-->
<template>
	<div class="bg-welcome">
		<div  class="img flyRight">
			<img src="../assets/welcome/1.png"/>
		</div>
		<div class="img flyLeft">
			<img src="../assets/welcome/2.png"/>
		</div>
		<div class="img flyDown">
			<img src="../assets/welcome/3.png"/>
		</div>
		<v-button class="button fadeIn" btnClass="v-btn" btntype="warning" @click="gotoIndex()">进入</v-button>
	</div>
</template>
<script>
import VueButton from 'components/button'
import Vue from 'vue'

export default {
	data (){
		return {

		}
	},
	components:{
		'v-button':VueButton
	},
	//组件挂载完后调用
	mounted () {
		
	},
	methods: {	
		gotoIndex () {
			this.$store.dispatch('changeWelcome',{welcome:false})
		}
	}
}
</script>
<style lang="scss">
@import 'scss/welcome';
</style>
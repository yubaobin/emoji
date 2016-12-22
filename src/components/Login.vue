<template>
	<div class="login">
		<div><img src="../assets/logo.png" /></div>
		<div class="form-col">
			<span>用户名:</span><input type="text" name="username" v-model="username">
		</div>
		
		<div class="form-col">
			<span>密码:</span><input type="password" name="pwd" v-model="pwd">
		</div>
		<div class="form-col">
			<div class="btn" type="button" @click="login" >登陆</div>
		</div>
	</div>
</template>
<script>
export default {
	data (){
		return {
			username:"ybb",
			pwd:"123"
		}
	},
	methods: {
		login:function(){
			if(this.username === "ybb" && this.pwd === "123"){
				this.$router.push('/index')
			}
		}
	}
}
</script>
<style lang="scss">
@import 'scss/login';
</style>
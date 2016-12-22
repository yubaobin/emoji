<template>
  <div>
  	  <router-link to="/login">注销</router-link>
  	  <transition name="fade" mode="out-in">
		  <div class="loading" v-if="loading" key="loading">
		  	loading....
		  </div>
		  <div class="error" v-if="error" key="error">
		  	error
		  </div>
		  <div class="success" v-if="success" key="success">
		  	<h1>列表</h1>
		  	<ul>
		  		<li v-for="item in items" @click="gotoDetail(item.id)">{{item.title}}</li>
		  	</ul>
		  </div>
	  </transition>
  </div>
</template>
<script>
import {API} from '../config/api'
export default {
	data:function(){
		return {
			items:[],
			error:null,
			loading:true
		}
	},
	created:function(){
		this.getData();
	},
	computed:{
		success:function(){
			let result = null;
			if(this.error != null){
				result = !this.error;
			}
			return result;
		}
	},
	methods:{
		getData (){
			let me = this;
			let options = { //参数
				params:{
					page : 1,
					limit: 2
				}
			}
			me.$http.get(API.getTopics,options)
			.then((data) => {
				if(data.ok){
					this.loading = false;
					this.error = false;
					this.items = data.data.data;
				}	
			},(err) => {
				console.log('err',err);
			})
		},
		gotoDetail (id){
			console.log(id)
			this.$router.push({
				path:`/content/${id}`
			})
		}
	}
}
</script>
<style lang="scss">
@import "scss/index";
</style>
<template>
  <div class="content">
  	<router-link to="/login">注销</router-link>
	  <div class="error" v-if="error" key="error">
	  	error
	  </div>
	  <div class="success" v-if="success" key="success">
	  	<h1>content:</h1>
	  	<div v-html="content"></div>
	  </div>
  </div>
</template>
<script>
import {API} from '../config/api'
	export default {
		data () {
			return {
				error:null,
				content:null
			}
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
		created () {
			let id = this.$route.params.id;
			this.$http.get(API.getTopicById + id)
			.then((data) => {
				if(data.ok){
					this.error = false;
					this.content = data.data.data.content;
				}
			},(err) => {
				console.log(err);
			})
				
		}
	}
</script>
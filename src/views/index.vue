<template>
  <div class="container" v-if="show">
  	 <section class="bg-content">
  	  	<img src="../assets/index/dog.png"/>
  	 </section>
  	  	
  	 <section class="upload-content">
  	  	 <vue-core-image-upload 
	  	  	 v-bind:class="['upload']" 
	  	  	 v-on:imageuploaded="imageuploaded" 
	  	  	 extensions="png,gif,jpeg,jpg" 
	  	  	 input-accept="image/*" 
	  	  	 text="" 
	  	  	 v-on:selectimg = "selectimg"
	  	  	 v-bind:show="true" >
  	  	 	<icon name="camera"></icon>
  	  	 </vue-core-image-upload>
  	 </section>  	 
  </div>
  <edit-img :src="imgsrc" v-else></edit-img>
</template>
<script>
import Vue from 'vue'
import Icon from 'vue-awesome/components/Icon.vue'
import 'vue-awesome/icons/camera'
import editimg from 'views/editimg'
import VueCoreImageUpload  from 'components/upload-files';
import {mapGetters} from 'vuex'

export default {
	data:function(){
		return {
			show: true
		}
	},

	created:function(){
		if(this.imgsrc)	{
			this.show = false;
		}
	},
	components: {
		'icon': Icon,
		'vue-core-image-upload': VueCoreImageUpload,
		'editImg': editimg
	},
	computed:{
		...mapGetters({
			'imgsrc': 'getImg'
		})
	},
	methods:{
		imageuploaded(res) {

		},
		selectimg(res){
			this.show = false;
			this.$store.dispatch('changeImg',{src:res});
		}
	}
}
</script>
<style lang="scss">
@import "scss/index";
</style>
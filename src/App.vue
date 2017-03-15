<template>
	<transition name="fade">
		<welcome v-if="welcome"></welcome>
	    <router-view
	      class="view"
	      keep-alive v-else>
	 	</router-view>
 	</transition>
</template>

<script>
import welcome from 'views/welcome'
import {mapState} from 'vuex'

export default {
	data (){
		return {
			
		}
	},
	created () {
		
	},
	components: {
	  welcome
	},
	computed: {
		...mapState({
			welcome:'showWelcome'
		})
	}
}
</script>

<style lang="scss">
@import "./styles/style";
</style>

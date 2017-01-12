<template>
	<div class="edit-container" >
		<section class="editimg" ref="editimg">
			<img :src="src"/>
		</section>
		<section class="edittool">
			<v-button name="success" @click="change">转变</v-button>
		</section>

	</div>

</template>

<script>
import VueButton from './button'
import html2canvas from 'plugins/html2canvas/html2canvas'

export default {
	data (){
		return {
			html : ""
		}
	},
	props:{
		src: {
			type:String,
			default: null
		}
	},
	components: {
		'v-button':VueButton
	},
	methods: {
		change () {
			html2canvas(this.$refs.editimg).then((canvas) => {
				this.$refs.editimg.appendChild(canvas)
			})
		}
	}
}
</script>
<style lang="scss">
@import 'scss/editimg';
</style>
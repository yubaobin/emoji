<template>
	<div class="edit-container" >
		<section class="editimg" ref="editimg">
			<img :src="src"/>
		</section>
		<section class="edittool">
			<v-button @click="addText" >
				<icon name="font" ></icon>
				<span slot="undertext" class="undertext">文字</span>
			</v-button>
		</section>
	</div>
</template>

<script>
import VueButton from 'components/button'
import html2canvas from 'plugins/html2canvas/html2canvas'
import Icon from 'vue-awesome/components/Icon.vue'
import 'vue-awesome/icons/font'
import move from 'components/move'

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
		'v-button':VueButton,
		'icon': Icon,
		move,
	},
	methods: {
		change () {
			html2canvas(this.$refs.editimg).then((canvas) => {
				this.$refs.editimg.appendChild(canvas)
			})
		},
		addText () {
			this.$refs.editimg.appendChild();
		},
		createElement () {
			
		}

	}
}
</script>
<style lang="scss">
@import 'scss/editimg';
</style>
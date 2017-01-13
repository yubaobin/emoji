<template>
	<div class="movebox" v-on:touchstart="touchstart" @touchmove="moving" @touchend="moveend" :style="boxstyle">
		<slot></slot>
	</div>
</template>

<script>
export default {
	data () {
		return {
			dragging: false
		}
	},
	props: {
		top: {
			type:Number,
			default: 0
		},
		left: {
			type:Number,
			default: 0
		},
		type: {
			type:String,
			default: "text"
		}
	},
	methods:{
		touchstart (e) {
			console.log("touchstart",e);
		},
		moving (e) {
			console.log("moving",e)
		},
		moveend (e) {
			console.log("moveend",e)
		}
	},
	computed: {
		boxstyle (){
			top: this.top + "px";
			left: this.left + "px";
		}
	}
}
</script>

<style lang="scss" scoped>
.movebox {
	position: relative;
}
</style>
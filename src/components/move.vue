<template>
	<v-touch 
		tag="div" 
		class="movebox" 
		:style="boxstyle"
		@panstart="panstart"
		@panmove="panmove"
		@panend="panend"
		@pinch="pinchstart">
		<slot></slot>
	</v-touch>
</template>

<script>
export default {
	data () {
		return {
			moving: false,
			starttop: this.top,
			startleft: this.left,
			boxtop: this.top,
			boxleft: this.left
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
	computed: {
		boxstyle () {
			return {
				top: this.boxtop + "px",
				left: this.boxleft + "px"
			}
		},
	},
	methods: {
		//开始移动
		panstart (e) {
			console.log("start");
			this.starttop = e.target.offsetTop;
			this.startleft = e.target.offsetLeft;
		},
		//移动中
		panmove (e) {
			this.boxtop = this.starttop + e.deltaY;
			this.boxleft = this.startleft + e.deltaX;
		},
		//移动结束
		panend (e) {

		},
		pinchstart (e) {
			console.log(e);
		}
	}
}
</script>

<style lang="scss" scoped>
.movebox {
	position: relative;
}
</style>
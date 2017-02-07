<template>
	<v-touch 
		tag="div" 
		class="movebox" 
		:style="boxstyle"
		@panstart="panstart"
		@panmove="panmove"
		@panend="panend"
		@tap.prevent="tap">
		<div v-html="text"></div>
		<v-touch tag="span" @tap.prevent="editElem" v-if="isShow" >编辑</v-touch >
		<v-touch tag="span" @tap.prevent="deleteELem" v-if="isShow" >删除</v-touch >
	</v-touch>
</template>

<script>
export default {
	data () {
		return {
			moving: false, //移动
			starttop: this.top, //移动开始top和left
			startleft: this.left,
			boxtop: this.top, //移动中的top和left
			boxleft: this.left,
			show: false
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
		color: {
			type:String,
		},
		type: {
			type:String,
			default: "text"
		},
		id: {
			type:String
		},
		isShowTool: {
			type:Boolean,
			default: false
		},
		text: {
			type: String,
			default: ""
		}
	},
	updated () {
		
	},
	computed: {
		boxstyle () {
			return {
				top: this.boxtop + "px",
				left: this.boxleft + "px",
				color: this.color
			}
		},
		currentId () {
			return this.id;
		},
		isShow () {
			let result = false;
			if(this.isShowTool && this.show){
				result = true;
			}
			return result;
		},
		elemValue() {
			return {
				id: this.id,
				top: this.boxtop,
				left: this.boxleft ,
				color: this.color
			}
		}
	},
	methods: {
		//开始移动
		panstart (e) {
			let target = e.target;
			while(target && !target.classList.contains('movebox')) {
				target = target.parentNode;
			}
			if(target) {
				this.starttop = target.offsetTop;
				this.startleft = target.offsetLeft;
			}
		},
		//移动中
		panmove (e) {
			this.show = false;
			this.boxtop = this.starttop + e.deltaY;
			this.boxleft = this.startleft + e.deltaX;
		},
		//移动结束
		panend (e) {
			console.log("移动结束");
			this.$store.dispatch('updateElem',this.elemValue);
		},
		//显示组件
		tap (e) {
			this.$emit('showTool');
			this.show = true;
		},
		//编辑
		editElem (e){
			this.$emit('editElem',this.currentId);
		},
		//删除
		deleteELem (e){
			this.show = false;
			this.$emit('deleteElem',this.currentId);
		},
		changeStyle () {
			this.boxtop = this.top;
			this.boxleft = this.left;
		}
	},
	watch: {
		isShowTool (newval,oldval) { //监听变话，如果父的show从true->false ，需要吧自己的show变成false
			if(newval == false && oldval == true){
				this.show = false;
			}
		},
		top (newval,oldval) {
			this.changeStyle();
		}
	}
}
</script>

<style lang="scss" scoped>
.movebox {
	position: absolute;
	display:inline-block;
	.hide {
		display:none;
	}
	span {
		position:absolute;
		bottom: 130%;
		background-color: rgba(0,0,0,0.3);
		width: 2.5rem;
		padding: 10px 5px 10px 10px;
		&:nth-of-type(1){
			right: 50%;
			border-top-left-radius: 50px;
    		border-bottom-left-radius: 50px;
    		margin-right: 1px;
    		
		}
		&:nth-of-type(2){
			left:50%;
			border-top-right-radius: 50px;
    		border-bottom-right-radius: 50px;
    		margin-left: 1px;
		}
	}
}
</style>
<!-- 
	文字编辑
-->
<template>
	<div class="edit-text-container">
		<div class="edit-area" contenteditable @input="inputText" :style="{color:color}" v-html="editElem.text"></div>
		<div class="select-color">
			<p>颜色</p>
			<slider-picker class="color-picker " v-model="colors" @change-color="onChange"></slider-picker>
		</div>
		<div class="btn-group">
			<v-button class="button" btntype="success" @click="submit" btnClass="v-btn">修改</v-button>
			<v-button class="button" btntype="success" @click="back" btnClass="v-btn">返回</v-button>
		</div>
	</div>
</template>
<script>

import {mapGetters} from 'vuex'
import VueButton from 'components/button'
import { Slider } from 'vue-color'

export default {
	data () {
		return {
			color:"rgba(25,77,51,1)",
			colors:{hex: '#194d33',
			  hsl: {
			    h: 150,
			    s: 0.5,
			    l: 0.2,
			    a: 1
			  },
			  hsv: {
			    h: 150,
			    s: 0.66,
			    v: 0.30,
			    a: 1
			  },
			  rgba: {
			    r: 25,
			    g: 77,
			    b: 51,
			    a: 1
			  },
			  a: 1
			},
			innerText: ""
		}
	},
	components: {
		'v-button':VueButton,
		'slider-picker': Slider
	},
	created () {

	},
	computed :{
		...mapGetters({
				editElem: 'getEditingElem'
			}
		),
		elemValue () {
			return {
				id: this.editElem.id,
				text: this.innerText,
				color: this.color
			}
		}
	},
	mounted () {
		this.innerText = this.editElem.text;
	},
	methods: {
		submit () {
			this.$store.dispatch('updateElem',this.elemValue);
			this.$router.push('/index');
		},
		inputText (e) {
			console.log(e.target.innerText);
			this.innerText = e.target.innerHTML;
		},
		back (e) {
			this.$router.replace('/index');
		},
		onChange(val){
			this.colors = val;
			this.color = this.formatRGBA(val.rgba);
		},
		formatRGBA (rgba) {
			let color = `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`;
			return color;
		}
	}
}
</script>
<style lang="scss">
@import 'scss/edittext';
</style>
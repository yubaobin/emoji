<template>
	<div class="edit-text-container">
		<div class="edit-area" contenteditable @input="inputText">{{editElem.text}}</div>
		<div class="btn-group">
			<v-button class="button" btntype="success" @click="submit">修改</v-button>
			<v-button class="button" btntype="success" @click="back">返回</v-button>
		</div>
	</div>
</template>
<script>

import {mapGetters} from 'vuex'
import VueButton from 'components/button'

export default {
	date () {
		return {
			innerText:""
		}
	},
	components: {
		'v-button':VueButton,
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
				text: this.innerText
			}
		}
	},
	methods: {
		submit () {
			this.$store.dispatch('updateElem',this.elemValue);
			this.$router.push('/index')
		},
		inputText (e) {
			this.innerText = e.target.innerHTML;
		},
		back (e) {
			this.$router.replace('/index');
		}
	}
}
</script>
<style lang="scss">
@import 'scss/edittext';
</style>
/**
 * 管理state
 *
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as types from './type/mutations-type'
import {editor} from './modules/editor'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		showWelcome:false
	},
	mutations: {
		[types.CHANGE_WELCOME] (state,options) {
			state.showWelcome = options.welcome;
		}
	},
	getters: getters,
	actions: actions,
	modules: {
		editor
	}
})
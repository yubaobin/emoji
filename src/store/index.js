/**
 * 管理state
 *
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as types from './type/mutations-type'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		showWelcome:false
	},
	mutations: {
		[types.CHANGE_WELCOME] (state,options) {
			console.log(options.welcome)
			state.showWelcome = options.welcome;
			console.log(state.welcome)
		}
	},
	getters: getters,
	actions: actions,
	modules: {

	}
})
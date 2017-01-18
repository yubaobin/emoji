/**
 * 编辑器store
 */
import * as types from '../type/mutations-type'

//state
const state = {
	elements : [], //添加到图片元素数组
	editingElem : {},//正在编辑的元素
	editimg : "" //正在处理的图片
}

//getters 
const getters = {
	getElements: state => state.elements,
	getEditingElem: state => state.editingElem,
	getLength: state => state.elements.length,
	getImg: state => state.editimg
}

//actions
const actions = {
	//设置正在编辑的元素
	setElem({commit},options) {
		commit(types.SET_EDITING_ELEM,options);
	},
	//添加元素
	addElem ({commit},elem) {
		commit(types.ADD_ELEM,elem);
	},
	//更新元素
	updateElem ({commit},elem) {
		commit(types.UPDATE_ELEM,elem);
	},
	//删除元素
	deleteElem ({commit},elem) {
		commit(types.DELETE_ELEM,elem);
	},
	//改变图片
	changeImg ({commit},img) {
		commit(types.CHANGE_IMG,img);
	}
}

//mutations
const mutations = {
	//设置正在编辑的元素
	[types.SET_EDITING_ELEM] (state,{id}) {
		const elem = state.elements.find( e => e.id == id);
		Object.assign(state.editingElem,elem);

	},
	//添加元素
	[types.ADD_ELEM] (state,elem) {
		state.elements.push(elem);
	},
	//更新元素
	[types.UPDATE_ELEM] (state,elem) {
		Object.assign(state.editingElem,elem);
		const index = state.elements.findIndex( e => e.id == elem.id);
		Object.assign(state.elements[index],elem);
	},
	//删除元素
	[types.DELETE_ELEM] (state,elem) {
		const index = state.elements.findIndex( e => e.id == elem.id);
		state.elements.splice(index,1);
	},
	[types.CHANGE_IMG] (state,{src}) {
		state.editimg = src;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
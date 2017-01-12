/**
 * 公共actions
 */
import * as types from './type/mutations-type'

// export const actionname = ({commit}) => {
// 	commit(types.x,{
		
// 	})
// }

/**
 * 改变welcome状态
 */
export const changeWelcome = ({commit},options) => {
	commit(types.CHANGE_WELCOME,options);
}

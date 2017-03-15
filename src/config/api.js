/**
 * 定义接口
 **/
function install(Vue){
	const base = 'https://cnodejs.org/api/v1'; 
	Vue.prototype.API = {
		/**
		 *	获取主题
		 *  参数
		 *  page: 页数
		 *  tab: 主题 目前有 ask share job good
		 *  limit: 每页数量
		 *  method: get
		 */
		getTopics : base + "/topics",  

		/**
		 *	根据id获取主题
		 *  参数
		 *  url后面加 :id 
		 *  method: get
		 */
		getTopicById: base + "/topic/",

		/**
		 * 收藏主题
		 * accesstoken String 用户的 accessToken
		 * topic_id String 主题的id
		 * method post
		 */
		 collect: base + "/topic_collect/collect",
	}
}
export default install

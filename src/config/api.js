/**
 * 请求的api
 *
 **/
const base = 'https://cnodejs.org/api/v1'; 
const API = {
	/**
	 *	获取主题
	 *  参数
	 *  page: 页数
	 *  tab: 主题 目前有 ask share job good
	 *  limit: 每页数量
	 */
	getTopics : base + "/topics",  

	/**
	 *	根据id获取主题
	 *  参数
	 *  url后面加 :id 
	 */
	getTopicById: base + "/topic/",
}
 export {API}

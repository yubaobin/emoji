<!-- 
这里也可以用template 
只是本人想使用模板函数     
-->
<script>
import VueButton from 'components/button'
import html2canvas from 'plugins/html2canvas/html2canvas'
import Icon from 'vue-awesome/components/Icon.vue'
import 'vue-awesome/icons/close'
import 'vue-awesome/icons/text-height'
import 'vue-awesome/icons/chevron-left'
import move from 'components/move'
import {mapGetters} from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	data () {
		return {
			buttons:[], //按钮工具
			hide: true, //预览隐藏现实
			previewsrc:'', //预览
			leave:'', //预览离开
			isShowTool: false,  //显示元素工具
			swiperOption: {
		        notNextTick: true,
		        grabCursor : true,
		        setWrapperSize :true,
		        autoHeight: true,
		        slidesPerView: 5,
		        freeMode: true,
		        spaceBetween: 30,
		        onTransitionStart(swiper){

		        },
	      }
		}
	},
	props:{
		src: {
			type:String,
			default: null
		}
	},
	render :function(createElement) {
		return createElement(
			'div',//标签
			{//属性
				class: {'edit-container':true},
				on:{
					click:this.cancel
				}
			},
			//子节点
			[	
				createElement( //编辑图片区域
					'section',
					{
						class:{editimg:true},
					},
					[
						createElement(
							'div',
							{class:{editing:true},ref: 'editimg'},
							[createElement(
								'img',
								{
									domProps:{src: this.src}
								}
							),
							this.elements.map( (com)=> {
								return createElement(
									'move',
									{
										class:{text:true},
										attrs: {
											top: com.top,
											left: com.left,
											color: com.color,
											id: com.id,
											isShowTool: this.isShowTool,
											name:com.id
										},
										on: {
											editElem:this.editElem,
											deleteElem:this.deleteElem,
											showTool: this.showTool
										}
									},
									com.text
								)
							})]
						)
					]
				),
				//工具按钮
				createElement( 
					'section',
					{
						class:{edittool:true}
					},
					[
						createElement(
							'swiper',
							{
								attrs: {
									options:this.swiperOption
								},
								ref: "mySwiperA"
							},
							this.buttons.map((button) =>{
								return createElement(
									'swiper-slide',
									[
										createElement(
											'v-button',
											{
												on:{
													'!click':this.addComponent
												},
												attrs: {
													btntype:button.type,
													btnClass:button.class
												}
											},
											[
												createElement('icon',{attrs:{ name: button.icon}}),
												createElement('span',
													{
														class:{undertext : true},
														domProps: {innerHTML: button.name},
														slot:'undertext'
													},
												),
											]
										)
									]
								)
							})
						)
					]
				),
				//生成图片按钮
				createElement(
					'section',
					{
						class:{sumitcontainer:true}
					},
					[
						createElement(
							'v-button',
							{
								on:{click: this.change},
								attrs: {btntype: "success",btnClass:'v-btn'},
							},
							[createElement('span','生成图片')]
						)
					]
				),
				//预览窗口
				createElement(
					'div',
					{
						class:{preview: true,hide:this.hide,leave:this.leave},
						ref: "preview"
					},
					[
						createElement(
							'div',
							{on:{click:this.close},class:{close:true}},
							[
								createElement('icon',{attrs:{name:'close'}})
							]
						),
						createElement(
							'img',
							{attrs:{src:this.previewsrc}}
						)
					]
				)
			]
		)
	},
	components: {
		'v-button':VueButton,
		'icon': Icon,
		'swiper': swiper,
		'swiper-slide': swiperSlide,
		move,
	},
	created (){
		this.addBtn();
	},
	computed: {
		...mapGetters({
			'elements': 'getElements',
			'elemLength': 'getLength'
		})
	},
	methods: {
		//隐藏组件工具
		cancel (e) {
			if(!e.target.classList.contains('text')){
				this.isShowTool = false;
			}
		},
		//显示组件工具
		showTool (e) {
			this.isShowTool = true;
		},
		//生成图片
		change () {
			html2canvas(this.$refs.editimg).then((canvas) => {
				// this.$refs.preview.appendChild(canvas);
				this.previewsrc = canvas.toDataURL("image/png");
				this.leave = false;
				this.hide = false;
			})
			
		},
		//添加组件
		addComponent (e) {
			const type = e.currentTarget.dataset['type'];
			if(type == "back"){
				this.$emit('back');
			}else if(type == "text"){
				let obj = {
					id : Math.random().toString().substr(2, 8),
					top: this.elemLength * 10 + 5,
					left: this.elemLength + 2,
					text: '点击编辑文字',
					color: 'rgba(25,77,51,1)'
				}
				this.$store.dispatch('addElem',obj);
			}
		},
		//添加工具按钮
		addBtn () {
			let btns = [{
				icon: 'chevron-left',
				type: 'back',
				class: 'back'
			},{
				icon:'text-height',
				name: '文字',
				type: 'text',
				class: 'v-btn'
			}]
			this.buttons = btns;
		},
		//关闭预览
		close () {
			this.leave = true;
			setTimeout( () =>{this.hide = true;},1*1000)
		},
		//编辑
		editElem (id){
			this.$store.dispatch('setElem',{id:id});
			this.$router.push('/edittext')
		},
		//删除
		deleteElem (id){
			this.$store.dispatch('deleteElem',{id:id})
		}
	}
}
</script>
<style lang="scss">
@import 'scss/editimg';
</style>
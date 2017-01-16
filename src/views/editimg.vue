<!-- <template>
	<div class="edit-container" >
		<section class="editimg" ref="editimg">
			<img :src="src"/>
		</section>
		<section class="edittool">
			<v-button @click="addText" >
				<icon name="font" ></icon>
				<span slot="undertext" class="undertext">文字</span>
			</v-button>
		</section>
	</div>
</template> -->

<script>
import VueButton from 'components/button'
import html2canvas from 'plugins/html2canvas/html2canvas'
import Icon from 'vue-awesome/components/Icon.vue'
import 'vue-awesome/icons/font'
import move from 'components/move'

export default {
	data () {
		return {
			buttons:[],
			addComponents:[],
			hide: true,
			previewsrc:''
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
				class: {'edit-container':true}
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
							this.addComponents.map( (com)=> {
								return createElement(
									'move',
									{
										class:{text:true},
										attrs: {
											top: com.top,
											left: com.left
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
					this.buttons.map((button) =>{
						return createElement(
							'v-button',
							{
								on:{
									'!click':this.addComponent
								},
								attrs: {
									btntype:button.type
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
					})
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
								attrs: {btntype: "success"},
							},
							[createElement('span','生成图片')]
						)
					]
				),
				//预览窗口
				createElement(
					'div',
					{
						class:{preview: true,hide:this.hide},
						ref: "preview"
					},
					[
						// createElement(
						// 	'div'
						// 	{on:{click:this.close},class:{close:true}},
						// ),
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
		move,
	},
	created (){
		this.addBtn();
	},
	methods: {
		change () {
			html2canvas(this.$refs.editimg).then((canvas) => {
				// this.$refs.preview.appendChild(canvas);
				this.previewsrc = canvas.toDataURL("image/png");
				this.hide = false;
			})
			
		},
		addComponent (e) {
			const type = e.currentTarget.dataset['type'];
			const len = this.addComponents.length;

			if(type == "text"){
				let obj = {
					top: len * 20 + 5,
					left: len + 2,
					text: '可以编辑'
				}
				this.addComponents.push(obj);
			}
		},
		
		addBtn () {
			let btn = {
				icon:'font',
				name: '文字',
				type: 'text'
			}
			this.buttons.push(btn)
		}

	}
}
</script>
<style lang="scss">
@import 'scss/editimg';
</style>
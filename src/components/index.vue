<template>
  <div>
  	<h1>列表</h1>
  	<ul>
  		<li v-for="item in items">{{item.name}}</li>
  	</ul>
  </div>
</template>
<script>
	export default {
		data:function(){
			return {
				items:[{
					id:1,
					name:'行1'
				},{
					id:2,
					name:'行2'
				},{
					id:3,
					name:'行3'
				}]
			}
		}
	}
</script>
<style lang="scss">
@import "scss/index";
</style>
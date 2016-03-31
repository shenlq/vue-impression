<template>
	<div :class="['mask', show?'':'hidden']" @click.self="hide">
		<div class="slideup">
			<div class="slideup-heading">
				请选择取货地点：
			</div>
			<div class="slideup-body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false,
				twoWay: true
			}
		},
		methods: {
			//隐藏
			hide(){
				this.show = false;
			}
		},
		events: {
			//选中事件
		    'slideup:hide' : function(index){
		    	this.hide();
		    	return true;
		    }
	  	},
	}
</script>
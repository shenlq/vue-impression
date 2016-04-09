<template>
	<div :class="['mask', show?'':'hidden']" @click.self="hide">
		<div class="slideup">
			<div class="slideup-heading">
				<group-item>
					<slot name="heading"></slot>
					<i class="fa fa-lg fa-times-circle-o text-muted" slot="footer" v-if="closeable" @click="hide"></i>
				</group-item>
			</div>

			<div class="slideup-body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	import GroupItem from './GroupItem';

	export default {
		components: {
			GroupItem
		},
		props: {
			title: {
				type: String
			},
			show: {
				type: Boolean,
				default: false,
				twoWay: true
			},
			closeable: {
				type: Boolean,
				default: false
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
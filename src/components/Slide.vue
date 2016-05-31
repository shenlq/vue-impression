<template>
	<div :class="['mask', show?'':'hidden']" @click.self="hide">
		<div :class="['slide', direction]">
			<div class="slide-header" v-if="_slotContents.header">
				<group-item>
					<slot name="header"></slot>
					<i class="fa fa-lg fa-times-circle-o text-muted" slot="footer" v-if="closeable" @click="hide"></i>
				</group-item>
			</div>

			<div class="slide-body">
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
			},
			direction: {
	      		type: String,
	      		default: "up"
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
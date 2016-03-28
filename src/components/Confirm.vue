<template>
	<div :class="['mask', show?'':'hidden']">
		<div class="alert">
			<div class="alert-heading">
				{{title}}
			</div>
			<div class="alert-body">
				{{message}}
			</div>
			<div class="alert-footer">
				<a class="text-muted" @click="cancel">{{buttons[1]}}</a>
				<a @click="confirm">{{buttons[0]}}</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '提示'
			},
			message: {
				type: String
			},
			buttons: {
				type: Array,
				default(){
					return ['确定', '取消'];
				}
			},
			click: {
				type: Function
			},
			show: {
				type: Boolean,
				default: false,
				twoWay: true
			}
        },
        methods: {
        	confirm(){
        		this.click && this.click();
        		this.show = false;
        	},
        	//取消
        	cancel(){
        		this.show = false;
        	}
        }
	};
</script>
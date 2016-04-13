<template>
	<div :class="['mask', show?'':'hidden']" @click="cancel"></div>
	<div :class="['alert', show?'':'hidden']">
		<div class="alert-heading">
			{{title}}
		</div>
		<div class="alert-body">
			{{message}}
		</div>
		<div class="alert-footer">
			<a href="javascript:void(0)" class="text-muted alert-footer-item" @click="cancel">{{buttons[1]}}</a>
			<a href="javascript:void(0)" class="alert-footer-item" @click="confirm">{{buttons[0]}}</a>
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
			show: {
				type: Boolean,
				default: false,
				twoWay: true
			}
        },
        methods: {
        	confirm(){
        		this._events.click && this._events.click.forEach(fn => {
        			fn();
        		});
        		this.show = false;
        	},
        	//取消
        	cancel(){
        		this.show = false;
        	}
        }
	};
</script>
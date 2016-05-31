<template>
	<div :class="['mask', show?'':'hidden']"  @click.self="hide"></div>
	<div :class="['alert', show?'':'hidden']">
		<slot name="header" v-if="_slotContents && _slotContents.header"></slot>
		<div class="alert-header" v-else>{{title}}</div>

		<div class="alert-body" v-if="!message">
			<slot></slot>
		</div>
		<div class="alert-body" v-else>
			{{message}}
		</div>

		<slot name="footer" v-if="_slotContents && _slotContents.footer"></slot>
		<div class="alert-footer" v-else>
			<a class="alert-footer-item" href="javascript:void(0);" @click="click">{{button}}</a>
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
			button: {
				type: String,
				default: '确定'
			},
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
        	},
        	//回调函数
        	click(){
        		this.show = false;
        		this._events.click && this._events.click.forEach(fn => {
        			fn();
        		});
        	}
        }
	};
</script>
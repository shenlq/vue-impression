<template>
	<div :class="['mask', show?'':'hidden']">
		<div class="alert">
			<slot name="heading" v-if="_slotContents && _slotContents.heading"></slot>
			<div class="alert-heading" v-else>{{title}}</div>

			<slot name="body" v-if="_slotContents && _slotContents.body"></slot>
			<div class="alert-body" v-else>{{message}}</div>

			<slot name="footer" v-if="_slotContents && _slotContents.footer"></slot>
			<div class="alert-footer" @click="hide" v-else>{{button}}</div>
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
        	hide(){
        		this.click && this.click(this);
        		this.show = false;
        	}
        }
	};
</script>
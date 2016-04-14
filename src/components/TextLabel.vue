<template>
	<span :class="labelClass" @click="!!click && click()">
		<slot></slot>
	</span>
</template>

<script>
	export default {
		props: {
			type: {
				type: String,
				default: "primary"
			},
			outline: {
				type: Boolean,
				default: false
			},
			click: {
				type: Function
			},
			size: {
				type: String,
				default: 'default'
			},
			class: {
				type: String,
				default: ''
			}
		},
		//动态生成class，侦听type/outline的变化
		computed: {
			labelClass(){
				return ['label', `label-${this.type}${this.outline?'-outline':''}`, this.size!='default'?`label-${this.size}`:''].concat(this.class.split(' '));
			}
		}
	}
</script>
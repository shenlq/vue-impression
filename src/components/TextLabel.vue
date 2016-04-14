<template>
	<span :class="class" @click="!!click && click()">
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
			}
		},
		data(){
			return {
				class: ['label']
			};
		},
		//动态生成class，侦听type/outline的变化
		computed: {
			class(){
				return ['label', `label-${this.type}${this.outline?'-outline':''}`, this.size!='default'?`label-${this.size}`:''];
			}
		}
	}
</script>
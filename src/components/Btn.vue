<template>
	<a :class="class" @click="!!click && click()" :disabled="disabled">
		<slot></slot>
	</a>
</template>

<script>
	export default {
		props: {
			style: {
				type: String,
				default: 'primary'
			},
			size: {
				type: String,
				default: 'default'
			},
			block: {
				type: Boolean,
				default: false
			},
			click: {
				type: Function
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		data(){
			return {
				class: ['btn']
			};
		},
		created(){
			//样式
			this.class.push(`btn-${this.style}`);
			//尺寸
			this.size != 'default' && (this.class.push(`btn-${this.size}`));
			//是否block
			this.block && (this.class.push('btn-block'));
		}
	}
</script>
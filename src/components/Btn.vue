<template>
	<a :class="class" @click="onceClick()" :href="href">
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
			disabled: {
				type: Boolean,
				default: false
			},
			href: {
				type: String
			},
			once: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			class(){
				let result = ['btn'];
				//样式
				result.push(`btn-${this.style}`);
				//尺寸
				this.size != 'default' && (result.push(`btn-${this.size}`));
				//是否block
				this.block && (result.push('btn-block'));
				//是否disabled
				this.disabled && result.push("disabled");

				return result;
			}
		},
		methods: {
			//点击一次，阻塞
			onceClick(){
				this.once && (this.disabled = true);
				return true;
			}
		}
	}
</script>
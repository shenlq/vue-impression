<template>
	<a :class="composeClass" @click="clickHandle()" :href="href">
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
			},
			vLink: {
                type: Object
            },
		},
		computed: {
			composeClass(){
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
			clickHandle(){
				this.once && (this.disabled = true);
                this.vLink && this.$route.router.go(this.vLink);
				return true;
			},
		}
	}
</script>
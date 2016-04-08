<template>
	<a :class="class" @click="!!click && click()" v-if="vLink" v-link="vLink">
		<slot></slot>
	</a>
	<a :class="class" @click="!!click && click()" v-else :href="href">
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
			},
			href: {
				type: String
			},
			vLink: {
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
		}
	}
</script>
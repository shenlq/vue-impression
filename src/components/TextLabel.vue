<template>
	<span :class="['label', type]">
		<slot></slot>
	</span>
</template>

<script>
	export default {
		props: {
			type: {
				type: String,
				default: 'primary',
				coerce(val){
					return `label-${val}`;
				}
			}
		}
	}
</script>
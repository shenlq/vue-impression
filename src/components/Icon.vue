<template>
	<i :class="['fa', type, size, class]">
		<slot></slot>
	</i>
</template>

<script>
	export default {
		props: {
			type: {
				type: String,
				coerce(val){
					return val? `fa-${val}` : '';
				}
			},
			size: {
				type: String,
				coerce(val){
					return val? `fa-${val}` : '';
				}
			},
			class: {
				type: String
			}
		}
	}
</script>
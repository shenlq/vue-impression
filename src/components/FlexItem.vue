<template>
	<div :class="class">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: {
			class: {
				type: Array,
				default: '',
				coerce(val){
					let result = ['flex-item'];
					val &&  (result = result.concat(val.split(' ')));
					return result;
				}
			}
		}
	}
</script>
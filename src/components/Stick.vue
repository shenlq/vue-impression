<template>
	<flex :class="class" justify="center">
		<div class="stick-body">
			<slot></slot>
		</div>
	</flex>
</template>

<script>
	import Flex from './Flex';
	export default {
		components: {
			Flex
		},
		props: {
			class: {
				type: String,
				default: '',
				coerce(val){
					let result = ['stick'];
					val &&  (result = result.concat(val.split(' ')));
					return result.join(" ");
				}
			}
		}
	}
</script>
<template>
	<flex class="stick" justify="center">
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
		}
	}
</script>
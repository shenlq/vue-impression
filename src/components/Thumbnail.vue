<template>
	<div class="thumbnail">
		<img :src="src">
		<div class="caption">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			src: {
				type: String,
				required: true
			}
		}
	}
</script>
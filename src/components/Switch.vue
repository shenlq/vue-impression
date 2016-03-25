<template>
	<label class="switch">
		<input type="checkbox" :checked="checked">
		<span class="switch-toggle"></span>
	</label>
</template>

<script>
	export default {
		props: {
			checked: {
				type: Boolean
			},
        }
	};
</script>
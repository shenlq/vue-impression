<template>
	<label class="switch">
		<input type="checkbox" :checked="checked" :disabled="disabled">
		<span class="switch-toggle"></span>
	</label>
</template>

<script>
	export default {
		props: {
			checked: {
				type: Boolean
			},
			disabled: {
				type: Boolean
			}
        }
	};
</script>
<template>
	<label class="checkbox">
		<input type="checkbox" :checked="checked" :disabled="disabled">
		<span class="checkbox-addon"></span>
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
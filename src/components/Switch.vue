<template>
	<label class="switch">
		<input type="checkbox" :checked="checked" :disabled="disabled">
		<span class="switch-addon"></span>
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
			},
        },
		methods: {
			//取值
			getValue(){
				let check = this.$el.querySelectorAll("input")[0];
				return check.checked;
			}
		}
	};
</script>
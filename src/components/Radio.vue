<template>
	<label class="radio">
		<input type="radio" :checked="checked" :disabled="disabled" :name="name">
		<span class="radio-addon">
		</span>
		<span class="radio-label" v-if="_slotContents && _slotContents.default">
			<slot></slot>
		</span>
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
			name: {
				type: String
			}
        }
	};
</script>
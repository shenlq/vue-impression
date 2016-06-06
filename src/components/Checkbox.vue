<template>
	<label class="checkbox">
		<input type="checkbox" :checked="checked" :disabled="disabled">
		<span :class="['checkbox-addon', circle?'shape-circle':'', outline?'checkbox-addon-outline':'']">
		</span>
		<span class="checkbox-label" v-if="_slotContents && _slotContents.default">
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
			circle: {
				type: Boolean
			},
			outline: {
				type: Boolean
			}
        },
		methods: {
			//取值
			getValue(){
				let checkbox = this.$el.querySelectorAll("input")[0];
				return checkbox.checked;
			}
		}
	};
</script>
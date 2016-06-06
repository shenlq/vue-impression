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
        },
		methods: {
			//取值
			getValue(){
				let radio = this.$el.querySelectorAll("input")[0];
				return radio.checked;
			}
		}
	};
</script>
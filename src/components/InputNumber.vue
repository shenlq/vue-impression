<template>
	<div class="number">
		<div class="circle minus-circle" @click="minus"></div>
		<div :class="['input-number', disabled?'disabled':'']">{{value}}</div>
		<div class="circle plus-circle" @click="plus"></div>
	</div>
</template>

<script>
	export default {
		props: {
			disabled: {
				type: Boolean,
				default: false
			},
			step: {
				default: 1
			},
			max: {

			},
			min: {

			},
			value: {
				default: 0,
				twoWay: true
			}
		},
		methods: {
			//加
			plus(){
				this.disabled || (this.value = Number(this.value) + Number(this.step));
				this.max != undefined && (Number(this.value) > Number(this.max)) && (this.value = Number(this.max));
			},
			//减
			minus(){
				this.disabled || (this.value = Number(this.value) - Number(this.step));
				this.min != undefined && (Number(this.value) < Number(this.min)) && (this.value = Number(this.min));
			}
		}
	};
</script>
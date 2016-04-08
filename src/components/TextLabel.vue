<template>
	<span :class="class">
		<slot></slot>
	</span>
</template>

<script>
	export default {
		props: {
			type: {
				type: String,
				default: "primary"
			},
			outline:{
				type: Boolean,
				default: false
			}
		},
		data(){
			return {
				class: ['label']
			};
		},
		created(){
			this.class.push(`label-${this.type}${this.outline?'-outline':''}`);
		}
	}
</script>
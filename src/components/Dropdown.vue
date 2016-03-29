<template>
	<div class="dropdown" @click="toggle">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				show: false
			}
		},
		methods: {
			toggle(){
				this.show = !this.show;
				this.$broadcast("show", this.show);
			}
		}
	}
</script>
<template>
	<div class="droploading">
		
	</div>
</template>

<script>
	export default  {
		props: {
			refresh: {
				type: Function
			}
		},
		events: {
			['DropLoading:stage'](index){
				new Promise(resolve => {
				  	this.refresh && this.refresh(resolve);
				}).then(() => {
					this.$dispatch('DropLoading:end');
				})
				return true;
			}
		}
	}
</script>
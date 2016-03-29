<template>
	<div :class="['dropdown-menu', show?'':'hidden']">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			}
		},
		events: {
			//菜单选中
			show(show){
				this.show = show;
			}
		}
	}
</script>
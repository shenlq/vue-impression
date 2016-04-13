<template>
	<div :class="['toast','flexbox','flex-align-center', show?'':'hidden']">
		<div class="toast-body">
			<div class="loading">
				<div class="loading-leaf"></div>
				<div class="loading-leaf"></div>
				<div class="loading-leaf"></div>
				<div class="loading-leaf"></div>
				<div class="loading-leaf"></div>
				<div class="loading-leaf"></div>
			</div>
			<div>{{message}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
      			twoWay: true
			},
	      	message: {
	      		type: String,
	      		default: '加载中'
	      	}
	    }
	}
</script>
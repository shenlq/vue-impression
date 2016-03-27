<template>
    <div :class="['tab','tab-bottom',class]" :style="style">
        <slot></slot>
    </div>
</template>

<script>
	export default {
		props:{
			style: {
				type: Object
			},
			'class': {
				type: String,
				default: ''
			}
		}
	}
</script>
<template>
    <div :class="['navbar', class]" :style="style">
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
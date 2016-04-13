<template>
    <div :class="['navbar', 'flexbox', 'flex-align-center', class]" :style="style">
        <slot></slot>
    </div>
</template>

<script>
	export default {
		props:{
			style: {
				type: Object
			},
			class: {
				type: String,
				default: ''
			}
		}
	}
</script>
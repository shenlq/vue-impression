<template>
    <div :class="['container', bottom?'container-sm':'']">
        <slot></slot>
    </div>
</template>

<script>
	export default {
		props: {
			bottom: {
				type: Boolean,
				default: false
			}
		}
	};
</script>
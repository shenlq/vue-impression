<template>
	<div >
		<router-view transition="slideIn" class="animated"></router-view>
	</div>
</template>

<script>
    export default {
        replace: false
    }
</script>
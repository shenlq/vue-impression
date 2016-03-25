<template>
	<group-title>Textarea</group-title>
	<input-area></input-area>
	<group-title>Textarea with counter</group-title>
	<input-area is-count></input-area>
</template>


<script>
	import { GroupTitle, InputArea } from '../components/index.js';

	export default {
		  components: {
		    GroupTitle,
		    InputArea
		  }
	};
</script>
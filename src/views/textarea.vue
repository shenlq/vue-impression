<template>
	<group-title>Switch</group-title>
	<input-area value="这是一个textarea。" placeholder="请输入内容"></input-area>
	<group-title>Textarea with counter</group-title>
	<input-area is-counter value="这是一个带计数器的textarea。" placeholder="请输入内容"></input-area>
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
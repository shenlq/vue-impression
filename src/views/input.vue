<template>
	<group-title>Input base</group-title>
	<input-text>
		<label slot>username:</label>
	</input-text>
	<input-text>
		<label slot>password:</label>
	</input-text>
	<group-title>With clear button</group-title>

</template>


<script>
	import { Group, GroupItem, GroupTitle, InputText } from '../components/index.js';

	export default {
		  components: {
		    Group,
		    GroupItem,
		    GroupTitle,
		    InputText
		  }
	};
</script>
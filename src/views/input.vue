<template>
	<group-title>Input default</group-title>
	<input-text>
		<label slot>username:</label>
	</input-text>

	<group-title>Input password</group-title>
	<input-text dtype="password">
		<label slot>password:</label>
	</input-text>

	<group-title>With clear icon</group-title>
	<input-text clear>
		<label slot>clear:</label>
	</input-text>

	<group-title>Input status</group-title>
	<input-text is-success>
		<label slot>success:</label>
	</input-text>
	<input-text is-warning>
		<label slot>warning:</label>
	</input-text>
	<input-text is-error>
		<label slot>error:</label>
	</input-text>

	<group-title>Multiple icon</group-title>

	<input-text is-warning clear>
		<label slot>warning:</label>
	</input-text>
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
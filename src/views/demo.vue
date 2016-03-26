<template>
	<group-title>Form</group-title>
	<group-item v-link="button">
		<i class="fa fa- fa-hand-pointer-o text-primary" slot="heading"></i>
		<span slot="body">Button</span>
	</group-item>
	<group-item v-link="input">
		<i class="fa fa-l fa-text-height text-warning" slot="heading"></i>
		<span slot="body">Input</span>
	</group-item>
	<group-item v-link="textarea">
		<i class="fa fa-file-text-o" slot="heading"></i>
		<span slot="body">Textarea</span>
	</group-item>
	<group>
		<group-item v-link="switch">
			<i class="fa fa-lg fa-toggle-on text-success" slot="heading"></i>
			<span slot="body">Switch</span>
		</group-item>
		<group-item v-link="checkbox">
			<i class="fa fa-lg fa-check-square text-primary" slot="heading"></i>
			<span slot="body">Checkbox</span>
		</group-item>
		<group-item v-link="radio">
			<i class="fa fa-lg fa-dot-circle-o text-primary" slot="heading"></i>
			<span slot="body">Radio</span>
		</group-item>
	</group>
</template>


<script>
	import { Group, GroupItem, GroupTitle } from '../components/index.js';

	export default {
		  components: {
		    Group,
		    GroupItem,
		    GroupTitle
		  }
	};
</script>
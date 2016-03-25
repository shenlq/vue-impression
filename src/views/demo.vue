<template>
	<group-title>Form</group-title>
	<group>
		<group-item v-link="button">
			<i class="fa fa- fa-hand-pointer-o text-primary" slot="heading"></i>
			<span slot="body">Button</span>
		</group-item>
		<group-item v-link="input">
			<i class="fa fa-l fa-text-height text-warning" slot="heading"></i>
			<span slot="body">Input</span>
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
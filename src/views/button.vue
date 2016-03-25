<template>
	<group-title>Button</group-title>
	<group>
		<group-item>
			<div slot="body">
				<button class="btn btn-default">default</button>
				<button class="btn btn-primary">primary</button>
				<button class="btn btn-secondary">secondary</button>
			</div>
		</group-item>
	</group>
	<group-title>Button disabled</group-title>
	<group>
		<group-item>
			<div slot="body">
				<button class="btn btn-default" disabled>default</button>
				<button class="btn btn-primary" disabled>primary</button>
				<button class="btn btn-secondary" disabled>secondary</button>
			</div>
		</group-item>
	</group>
	<group-title>Button block</group-title>
	<group>
		<group-item>
			<button class="btn btn-default btn-block" slot="body">default</button>
		</group-item>
		<group-item>
			<button class="btn btn-primary btn-block" slot="body">primary</button>
		</group-item>
		<group-item>
			<button class="btn btn-secondary btn-block" slot="body">secondary</button>
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
<template>
	<div class="text-center">
		<i class="fa fa-5x fa-connectdevelop"></i>
	</div>
	<group>
		<group-item>
			<i class="fa fa-lg fa-bluetooth-b" slot="icon"></i>
			<span slot="body">Group</span>
			<span slot="desc">0.1.0</span>
		</group-item>
		<group-item>
			<i class="fa fa-lg fa-bluetooth-b" slot="icon"></i>
			<span slot="body">Group</span>
			<span slot="desc">0.1.0</span>
		</group-item>
		<group-item>
			<i class="fa fa-lg fa-bluetooth-b" slot="icon"></i>
			<span slot="body">Group</span>
			<span slot="desc">0.1.0</span>
		</group-item>
	</group>
	<group-title>标题</group-title>
	<group>
		<group-item link="#">
			<i class="fa fa-lg fa-bluetooth-b" slot="icon"></i>
			<span slot="body">Group</span>
			<span slot="desc">0.1.0</span>
		</group-item>
				<group-item link="#">
			<i class="fa fa-lg fa-bluetooth-b" slot="icon"></i>
			<span slot="body">Group</span>
			<span slot="desc">0.1.0</span>
		</group-item>
				<group-item link="#">
			<i class="fa fa-lg fa-bluetooth-b" slot="icon"></i>
			<span slot="body">Group</span>
			<span slot="desc">0.1.0</span>
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
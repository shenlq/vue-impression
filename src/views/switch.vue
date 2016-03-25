<template>
	<group-title>Switch</group-title>
	<group>
		<group-item>
			<i class="fa fa-microphone-slash" slot="heading"></i>
			<span slot="body">关闭话筒</span>
			<switch slot="footer" checked></switch>
		</group-item>
		<group-item>
			<i class="fa fa-plane text-warning" slot="heading"></i>
			<span slot="body">飞行模式</span>
			<switch slot="footer"></switch>
		</group-item>
	</group>
</template>


<script>
	import { GroupTitle, Group, GroupItem, Switch } from '../components/index.js';

	export default {
		  components: {
		    GroupTitle,
		    Group,
		    GroupItem,
		    Switch
		  }
	};
</script>
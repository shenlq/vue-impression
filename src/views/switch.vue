<template>
	<group-title>Switch</group-title>
	<group>
		<group-item>
			<i class="fa fa-microphone" slot="heading"></i>
			<span slot="body">话筒</span>
			<switch slot="footer" checked></switch>
		</group-item>
		<group-item>
			<i class="fa fa-plane text-warning" slot="heading"></i>
			<span slot="body">飞行模式</span>
			<switch slot="footer"></switch>
		</group-item>
	</group>
	<group-title>Disabled</group-title>
	<group>
		<group-item>
			<i class="fa fa fa-bell-slash text-primary" slot="heading"></i>
			<span slot="body">关闭通知</span>
			<switch slot="footer" checked disabled></switch>
		</group-item>
		<group-item>
			<i class="fa fa-clock-o text-danger" slot="heading"></i>
			<span slot="body">闹钟</span>
			<switch slot="footer" disabled></switch>
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
<template>
	<navbar>
		<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
		<span class="split"></span>
		<span>Switch</span>
	</navbar>
	<container>
		<group>
			<group-item>
				<i class="fa fa-microphone" slot="heading"></i>
				<span>话筒</span>
				<switch slot="footer" checked></switch>
			</group-item>
			<group-item>
				<i class="fa fa-plane text-warning" slot="heading"></i>
				<span>飞行模式</span>
				<switch slot="footer"></switch>
			</group-item>
		</group>
		<group-title>Disabled</group-title>
		<group>
			<group-item>
				<i class="fa fa fa-bell-slash text-primary" slot="heading"></i>
				<span>关闭通知</span>
				<switch slot="footer" checked disabled></switch>
			</group-item>
			<group-item>
				<i class="fa fa-clock-o text-danger" slot="heading"></i>
				<span>闹钟</span>
				<switch slot="footer" disabled></switch>
			</group-item>
		</group>
	</container>
</template>


<script>
	import { Container, Navbar, GroupTitle, Group, GroupItem, Switch } from '../components/index.js';

	export default {
		  components: {
		  	Container,
		  	Navbar,
		    GroupTitle,
		    Group,
		    GroupItem,
		    Switch
		  }
	};
</script>
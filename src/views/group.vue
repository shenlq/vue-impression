<template>
	<container>
		<navbar>
			<a v-link='{"name": "demo"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			<span>Group</span>
		</navbar>
		<container-body>
			<group>
				<group-item :click="defaultLoadingHandle">
					<span slot="body">张三丰</span>
				</group-item>
				<group-item :click="customLoadingHandle">
					<span slot="body">张无忌</span>
				</group-item>
				<group-item :click="customLoadingHandle">
					<span slot="body">张良</span>
				</group-item>
			</group>
			<group-title>带标题</group-title>
			<group>
				<group-item>
					<span slot="body">王二小</span>
				</group-item>
				<group-item>
					<span slot="body">王昭君</span>
				</group-item>
			</group>
			<group-title>可点击</group-title>
			<group-item v-link='{"name": "demo"}'>
				<span slot="body">赵云</span>
			</group-item>
			<group-item v-link='{"name": "demo"}'>
				<span slot="body">赵匡胤</span>
			</group-item>
		</container-body>
	</container>
</template>


<script>
	import { Container, ContainerBody, Group, GroupTitle, GroupItem, Navbar } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	ContainerBody,
		    Group,
		    GroupTitle,
		    GroupItem,
		    Navbar,
		}
	};
</script>
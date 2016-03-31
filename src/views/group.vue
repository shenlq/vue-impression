<template>
	<container>
		<navbar>
			<a v-link='{"name": "demo"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			Group
		</navbar>
		<container-body>
			<group>
				<group-item :click="defaultLoadingHandle">
					张三丰
				</group-item>
				<group-item :click="customLoadingHandle">
					张无忌
				</group-item>
				<group-item :click="customLoadingHandle">
					张良
				</group-item>
			</group>
			<group-title>带标题</group-title>
			<group>
				<group-item>
					王二小
				</group-item>
				<group-item>
					王昭君
				</group-item>
			</group>
			<group-title>可点击</group-title>
			<group>
				<group-item v-link='{"name": "demo"}'>
					赵云
				</group-item>
				<group-item v-link='{"name": "demo"}'>
					赵匡胤
				</group-item>
			</group>
			<group-title>带头信息、描述信息</group-title>
			<group>
				<group-item v-link='{"name": "demo"}'>
					<i class="fa fa-lg fa-bullseye text-primary" slot="heading"></i>
					董卓
					<span slot="footer">0.1</span>
				</group-item>
				<group-item v-link='{"name": "demo"}'>
					<i class="fa fa-lg fa-bullseye text-primary" slot="heading"></i>
					董存瑞
					<span slot="footer">炸暗堡</span>
				</group-item>
			</group>
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
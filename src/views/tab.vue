<template>
	<container>
		<navbar>
			<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			<span>Tab</span>
		</navbar>
		<container-body>
			<tab>
				<tab-item>科技</tab-item>
				<tab-item>财经</tab-item>
				<tab-item>体育</tab-item>
			</tab>

			<group-title>Default selected</group-title>
			<tab>
				<tab-item>头条</tab-item>
				<tab-item selected>热点</tab-item>
				<tab-item>段子</tab-item>
			</tab>
			<group-title>Icon tab</group-title>
			<tab>
				<tab-item><i class="fa fa-lg fa-qq text-primary"></i></tab-item>
				<tab-item><i class="fa fa-lg fa-weixin text-success"></i></tab-item>
				<tab-item selected><i class="fa fa-lg fa-weibo text-warning"></i></tab-item>
			</tab>
		</container-body>
	</container>
</template>


<script>
	import { Container, ContainerBody, GroupTitle, Group, GroupItem, Tab, TabItem, Navbar } from '../components/index.js';

	export default {
		  components: {
		  	Container,
		  	ContainerBody,
		    GroupTitle,
		    Group,
		    GroupItem,
		    Tab,
		    TabItem,
		    Navbar
		  }
	};
</script>
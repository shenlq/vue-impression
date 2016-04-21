<template>
	<navbar>
		<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
		<span class="split"></span>
		<span>Tab</span>
	</navbar>
	<container>
		<tab :on-select="tabChangeHandle">
			<tab-item event-key="科技">科技</tab-item>
			<tab-item event-key="财经">财经</tab-item>
			<tab-item event-key="体育">体育</tab-item>
		</tab>

		<group-title>Default selected</group-title>
		<tab :on-select="tabChangeHandle">
			<tab-item event-key="头条">头条</tab-item>
			<tab-item event-key="热点" selected>热点</tab-item>
			<tab-item event-key="段子">段子</tab-item>
		</tab>
		<group-title>Icon tab</group-title>
		<tab :on-select="tabChangeHandle">
			<tab-item event-key="1"><i class="fa fa-lg fa-qq text-primary"></i></tab-item>
			<tab-item event-key="2"><i class="fa fa-lg fa-weixin text-success"></i></tab-item>
			<tab-item event-key="3" selected><i class="fa fa-lg fa-weibo text-warning"></i></tab-item>
		</tab>
	</container>
</template>


<script>
	import { Container, GroupTitle, Group, GroupItem, Tab, TabItem, Navbar } from '../components/index.js';

	export default {
		components: {
		  	Container,
		    GroupTitle,
		    Group,
		    GroupItem,
		    Tab,
		    TabItem,
		    Navbar
		},
		methods: {
			tabChangeHandle(key){
				console.log(`${key}：被点击了！！！`);
			}
		}
	};
</script>
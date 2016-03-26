<template>
	<group-title>Tab</group-title>
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
		<tab-item><i class="fa fa-qq text-primary"></i></tab-item>
		<tab-item><i class="fa fa-weixin text-success"></i></tab-item>
		<tab-item selected><i class="fa fa-weibo text-warning"></i></tab-item>
	</tab>
</template>


<script>
	import { GroupTitle, Group, GroupItem, Tab, TabItem } from '../components/index.js';

	export default {
		  components: {
		    GroupTitle,
		    Group,
		    GroupItem,
		    Tab,
		    TabItem
		  }
	};
</script>
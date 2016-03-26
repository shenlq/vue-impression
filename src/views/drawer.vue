<template>
	<group-title>Drawer</group-title>
	<drawer>
		<drawer-item>
			分类
		</drawer-item>
		<drawer-item>
			筛选
		</drawer-item>
		<drawer-item>
			排序
		</drawer-item>
	</drawer>

	<group-title>Default selected</group-title>
	<drawer>
		<drawer-item>
			分类
		</drawer-item>
		<drawer-item selected>
			筛选
		</drawer-item>
		<drawer-item>
			排序
		</drawer-item>
	</drawer>

</template>


<script>
	import { GroupTitle, Group, GroupItem, Drawer, DrawerItem } from '../components/index.js';

	export default {
		  components: {
		    GroupTitle,
		    Group,
		    GroupItem,
		    Drawer,
		    DrawerItem
		  }
	};
</script>
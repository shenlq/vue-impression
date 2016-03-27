<template>
	<container>
		<navbar>
			<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			<span>Drawer</span>
		</navbar>
		<container-body>
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
		</container-body>
	</container>
</template>


<script>
	import { Container, ContainerBody, Navbar, GroupTitle, Group, GroupItem, Drawer, DrawerItem } from '../components/index.js';

	export default {
		  components: {
		  	Container,
		  	ContainerBody,
		  	Navbar,
		    GroupTitle,
		    Group,
		    GroupItem,
		    Drawer,
		    DrawerItem
		  }
	};
</script>
<template>
	<container>
		<navbar>
			<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			<span>Drawer</span>
		</navbar>
		<content>
			<drawer :on-select="drawerChangeHandle">
				<drawer-item event-key="分类">
					分类
				</drawer-item>
				<drawer-item event-key="筛选">
					筛选
				</drawer-item>
				<drawer-item event-key="排序">
					排序
				</drawer-item>
			</drawer>

			<group-title>Default selected</group-title>
			<drawer :on-select="drawerChangeHandle">
				<drawer-item event-key="1">
					分类
				</drawer-item>
				<drawer-item event-key="2" selected>
					筛选
				</drawer-item>
				<drawer-item event-key="3">
					排序
				</drawer-item>
			</drawer>
		</content>
	</container>
</template>


<script>
	import { Container, Content, Navbar, GroupTitle, Group, GroupItem, Drawer, DrawerItem } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	Content,
		  	Navbar,
		    GroupTitle,
		    Group,
		    GroupItem,
		    Drawer,
		    DrawerItem
		},
		methods: {
			drawerChangeHandle(key, selected){
				console.log(`${key}: ${selected?'选中':'取消选中'}!`);
			}
		}
	};
</script>
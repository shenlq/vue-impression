<template>
	<container>
		<navbar>
			<a v-link='{"name": "demo"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			<span>Menu</span>
			<span class="pull-right">
			<dropdown>
				<i class="fa fa-lg fa-ellipsis-v"></i>
				<dropdown-menu>
					<dropdown-menu-item :click="callback">设置</dropdown-menu-item>
					<dropdown-menu-item :click="callback">关于</dropdown-menu-item>
				</dropdown-menu>
			</dropdown>
			</span>
		</navbar>
	</container>
</template>


<script>
	import { Container, Group, GroupItem, Navbar, Dropdown, DropdownMenu, DropdownMenuItem } from '../components/index.js';

	export default {
		components: {
		  	Container,
		    Group,
		    GroupItem,
		    Navbar,
		    Dropdown,
		    DropdownMenu,
		    DropdownMenuItem
		},
		data(){
			return {
				show: false,
				message: '加载中'
			}
		},
		methods: {
			callback(){
				alert("菜单点击了！");
			}
		}
	};
</script>
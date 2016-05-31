<template>
	<div>
		<container>
			<content>
				<navbar>
					<a v-link='{"name": "demo"}'><icon type="arrow-left"></icon></a>
					<span class="split"></span>
					<span>Menu</span>
					<span class="flex-item text-right">
						<dropdown>
							<icon type="ellipsis-v" size="lg"></icon>
							<dropdown-menu>
								<dropdown-menu-item @click="callback">设置</dropdown-menu-item>
								<dropdown-menu-item @click="callback">关于</dropdown-menu-item>
							</dropdown-menu>
						</dropdown>
					</span>
				</navbar>
			</content>
		</container>
	</div>
</template>


<script>
	import { Container, Content, Group, GroupItem, Navbar, Dropdown, DropdownMenu, DropdownMenuItem, Icon } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	Content,
		    Group,
		    GroupItem,
		    Navbar,
		    Dropdown,
		    DropdownMenu,
		    DropdownMenuItem,
		    Icon
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
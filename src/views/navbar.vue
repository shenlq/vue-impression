<template>
	<div>
		<container>
			<navbar :style="style">
				<a v-link='{"name":"demo"}'><icon type="arrow-left"></icon></a>
				<span class="split"></span>
				<span>Navbar</span>
				<span class="flex-item text-right">分享</span>
			</navbar>
			<navbar :style="style">
				<a v-link="{name:'demo'}"><icon type="arrow-left"></icon></a>
				<span class="split"></span>
				<span>转账</span>
				<span class="flex-item text-right">
					<a href="#"><icon type="search"></icon></a>
					<a href="#"><icon type="plus"></icon></a>
					<a href="#"><icon type="ellipsis-v"></icon></a>
				</span>
			</navbar>
			<navbar :style="style" class="navbar-default">
				<a v-link="{name:'demo'}"><icon type="arrow-left"></icon></a>
				<span class="split"></span>
				<span>设置</span>
				<span class="flex-item text-right">
					<icon type="search"></icon>
					<icon type="plus"></icon>
					<icon type="ellipsis-v"></icon>
				</span>
			</navbar>
		</container>
	</div>
</template>


<script>
	import { Container, GroupTitle, Navbar, Icon } from '../components/index.js';

	export default {
		components: {
			Container,
		    GroupTitle,
		    Navbar,
		    Icon
		},
		data(){
			return {
				style: {
					position: 'static',
					marginBottom: '30px'
				}
			}
		}
	};
</script>
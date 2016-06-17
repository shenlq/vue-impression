<template>
	<div>
		<container>
			<navbar>
				<a v-link='{"name": "demo"}'><icon type="arrow-left"></icon></a>
				<span class="split"></span>
				<span>DropLoading</span>
			</navbar>
			<content bottom touch>
			    <group>
			    	<group-item>
						<span class="text-danger">下拉试试</span>
					</group-item>
					<group-item>
						<span>3C数码</span>
					</group-item>
					<group-item>
						<span>食品饮料</span>
					</group-item>
					<group-item >
						<span>运动健身</span>
					</group-item>
					<group-item>
						<span>时尚首饰</span>
					</group-item>
					<group-item>
						<span>家居用品</span>
					</group-item>
					<group-item>
						<span>户外旅行</span>
					</group-item>
					<group-item>
						<span>3C数码</span>
					</group-item>
					<group-item>
						<span>食品饮料</span>
					</group-item>
					<group-item >
						<span>运动健身</span>
					</group-item>
					<group-item>
						<span>时尚首饰</span>
					</group-item>
					<group-item>
						<span>家居用品</span>
					</group-item>
					<group-item>
						<span>户外旅行</span>
					</group-item>
					<group-item>
						<span class="text-success">上拉试试</span>
					</group-item>
				</group>
				<lift-loading :refresh="refresh"></lift-loading>
			</content>
		</container>
	</div>
</template>

<script>
	import { Container, Content, Navbar, Group, GroupItem, GroupTitle, TabBottom, TabItem, DropLoading, LiftLoading, Checkbox, Icon } from '../components/index.js';

	export default {
		components: {
			Container,
			Content,
			Navbar,
		    Group,
		    GroupItem,
		    GroupTitle,
		    TabBottom,
		    TabItem,
		    DropLoading,
			LiftLoading,
		    Checkbox,
		    Icon
		},
		methods: {
			refresh(close){
				setTimeout(() => {
					console.log("刷新完毕！");
					close(true);
				}, 2000);
			}
		}
	};
</script>
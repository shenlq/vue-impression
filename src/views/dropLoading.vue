<template>
	<div>
		<navbar>
			<a v-link='{"name": "demo"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			<span>DropLoading</span>
		</navbar>
		<container bottom touch>
		    <drop-loading :refresh="refresh">
		    	<div slot="desc">
			    	<checkbox checked circle outline>中国制造</checkbox>
			    	<checkbox checked circle outline>7天包退</checkbox>
			    	<checkbox checked circle outline>全店包邮</checkbox>
		    	</div>
		    	<img src="../images/loading.gif">
		    </drop-loading>
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
					<span class="text-success">上拉试试</span>
				</group-item>
			</group>
			<lift-loading :refresh="refresh">
				<div slot="desc">
					<checkbox checked circle outline>中国制造</checkbox>
					<checkbox checked circle outline>7天包退</checkbox>
					<checkbox checked circle outline>全店包邮</checkbox>
				</div>
				<img src="../images/loading.gif">
			</lift-loading>
		</container>
	</div>
</template>

<script>
	import { Container, Navbar, Group, GroupItem, GroupTitle, TabBottom, TabItem, DropLoading, LiftLoading, Checkbox} from '../components/index.js';

	export default {
		components: {
			Container,
			Navbar,
		    Group,
		    GroupItem,
		    GroupTitle,
		    TabBottom,
		    TabItem,
		    DropLoading,
			LiftLoading,
		    Checkbox
		},
		methods: {
			refresh(close){
				setTimeout(() => {
					console.log("刷新完毕！");
					close();
				}, 2000);
			}
		}
	};
</script>
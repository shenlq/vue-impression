<template>
	<group-title>Navbar</group-title>
	<navbar :style="style">
		<i class="fa fa-arrow-left"></i>
		<span class="split"></span>
		<span>城市服务</span>
		<span class="pull-right">分享</span>
	</navbar>
	<navbar :style="style">
		<i class="fa fa-arrow-left"></i>
		<span class="split"></span>
		<span>转账</span>
		<span class="pull-right">
			<i class="fa fa-search"></i>
			<i class="fa fa-plus"></i>
			<i class="fa fa-ellipsis-v"></i>
		</span>
	</navbar>
	<group-title>Navbar type</group-title>
	<navbar :style="style" class="navbar-default">
		<i class="fa fa-arrow-left"></i>
		<span class="split"></span>
		<span>设置</span>
		<span class="pull-right">
			<i class="fa fa-search"></i>
			<i class="fa fa-plus"></i>
			<i class="fa fa-ellipsis-v"></i>
		</span>
	</navbar>
</template>


<script>
	import { GroupTitle, Navbar } from '../components/index.js';

	export default {
		components: {
		    GroupTitle,
		    Navbar
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
<template>
	<navbar :style="style">
		<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
		<span class="split"></span>
		<span>Navbar</span>
		<span class="pull-right">分享</span>
	</navbar>
	<navbar :style="style">
		<a v-link="{name:'demo'}"><i class="fa fa-arrow-left"></i></a>
		<span class="split"></span>
		<span>转账</span>
		<span class="pull-right">
			<i class="fa fa-search"></i>
			<i class="fa fa-plus"></i>
			<i class="fa fa-ellipsis-v"></i>
		</span>
	</navbar>
	<navbar :style="style" class="navbar-default">
		<a v-link="{name:'demo'}"><i class="fa fa-arrow-left"></i></a>
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
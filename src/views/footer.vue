<template>
	<navbar>
		<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
		<span class="split"></span>
		<span>Tab bottom</span>
	</navbar>
	<tab-bottom :style="style1">
		<tab-item><i class="fa fa-lg fa-phone"></i></tab-item>
		<tab-item><i class="fa fa-lg fa-comment"></i></tab-item>
		<tab-item><i class="fa fa-lg fa-user"></i></tab-item>
		<tab-item><i class="fa fa-lg fa-camera"></i></tab-item>
	</tab-bottom>

	<tab-bottom :style="style2">
		<tab-item><i class="fa fa-lg fa-phone"></i></tab-item>
		<tab-item><i class="fa fa-lg fa-comment"></i></tab-item>
		<tab-item selected><i class="fa fa-lg fa-user"></i></tab-item>
		<tab-item><i class="fa fa-lg fa-camera"></i></tab-item>
	</tab-bottom>

	<tab-bottom :style="style" class="tab-bottom-cascade">
		<tab-item>
			<i class="fa fa-lg fa-phone"></i>电话
		</tab-item>
		<tab-item selected>
			<i class="fa fa-lg fa-comment"></i>短信
		</tab-item>
		<tab-item>
			<i class="fa fa-lg fa-user"></i>我
		</tab-item>
		<tab-item>
			<i class="fa fa-lg fa-camera"></i>照相
		</tab-item>
	</tab-bottom>
</template>


<script>
	import { GroupTitle, Navbar, TabBottom, TabItem } from '../components/index.js';

	export default {
		components: {
		    GroupTitle,
		    Navbar,
		    TabBottom,
		    TabItem
		},
		data(){
			return {
				style1: {
					top: '70px'
				},
				style2: {
					top: '175px'
				}
			}
		}
	};
</script>
<template>
	<navbar>
		<i class="fa fa-arrow-left"></i>
		<span class="split"></span>
		<span>Tab bottom</span>
	</navbar>
	<tab-bottom :style="style1">
		<i class="fa fa-lg fa-phone"></i>
		<i class="fa fa-lg fa-comment"></i>
		<i class="fa fa-lg fa-user"></i>
		<i class="fa fa-lg fa-camera"></i>
	</tab-bottom>

	<tab-bottom :style="style2">
		<i class="fa fa-lg fa-phone"></i>
		<i class="fa fa-lg fa-comment"></i>
		<i class="fa fa-lg fa-user active"></i>
		<i class="fa fa-lg fa-camera"></i>
	</tab-bottom>

	<tab-bottom :style="style" class="tab-bottom-cascade">
		<div>
			<i class="fa fa-lg fa-phone"></i>
			电话
		</div>
		<div class="active">
			<i class="fa fa-lg fa-comment"></i>
			短信
		</div>
		<div>
			<i class="fa fa-lg fa-user"></i>
			我
		</div>
		<div>
			<i class="fa fa-lg fa-camera"></i>
			照相
		</div>
	</tab-bottom>
</template>


<script>
	import { GroupTitle, Navbar, TabBottom } from '../components/index.js';

	export default {
		components: {
		    GroupTitle,
		    Navbar,
		    TabBottom
		},
		data(){
			return {
				style1: {
					top: '70px'
				},
				style2: {
					top: '130px'
				},
				style3: {
					top: '190px'
				}
			}
		}
	};
</script>
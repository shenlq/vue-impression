<template>
	<navbar>
		<i class="fa fa-arrow-left"></i>
		<span class="split"></span>
		<span>Tab bottom</span>
	</navbar>
	<tab-bottom>
		<i class="fa fa-lg fa-phone"></i>
		<i class="fa fa-lg fa-comment"></i>
		<i class="fa fa-lg fa-user"></i>
		<i class="fa fa-lg fa-camera"></i>
	</tab-bottom>
</template>


<script>
	import { GroupTitle, Navbar, TabBottom } from '../components/index.js';

	export default {
		components: {
		    GroupTitle,
		    Navbar,
		    TabBottom
		}
	};
</script>
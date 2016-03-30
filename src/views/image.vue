<template>
	<container>
		<navbar>
			<a v-link='{"name": "demo"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			<span>LazyImage</span>
			<span class="pull-right">
			</span>
		</navbar>
		<image-lazy src="https://img.alicdn.com/tps/i4/TB1_uKKMXXXXXbuXFXXc8PZ9XXX-130-200.png"></image-lazy>
		<image-lazy src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2006014851/TB2O62ZlpXXXXbdXXXXXXXXXXXX_!!2006014851.jpg_200x200.jpg_.webp"></image-lazy>
		<image-lazy src="https://img.alicdn.com/tps/i2/TB19UIZLXXXXXa0aXXXTYW_VFXX-100-80.jpeg_150x150.jpg_.webp"></image-lazy>
	</container>
</template>


<script>
	import { Container, ContainerBody, Group, GroupItem, Navbar, ImageLazy } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	ContainerBody,
		    Group,
		    GroupItem,
		    Navbar,
		    ImageLazy
		},
		created(){
		},
		methods: {
		}
	};
</script>
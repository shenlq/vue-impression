<template>
	<div>
		<container>
			<navbar>
				<a v-link='{"name": "demo"}'><icon type="arrow-left"></icon></a>
				<span class="split"></span>
				<span>Carousel</span>
				<span class="pull-right">
				</span>
			</navbar>
			<content>
				<carousel :options="images"></carousel>
			</content>
		</container>
	</div>
</template>


<script>
	import { Container, Content, Group, GroupTitle, GroupItem, Navbar, Carousel, Icon } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	Content,
		    Group,
		    GroupTitle,
		    GroupItem,
		    Navbar,
		    Carousel,
		    Icon
		},
		data(){
			return {
				images: ['https://img20.360buyimg.com/da/jfs/t2014/58/2249644362/95186/7bc5fc19/56fa4036Ne056d298.jpg',
						'https://img12.360buyimg.com/da/jfs/t2254/46/2217660072/428039/66579e60/56fa5806N92152b28.jpg',
						'https://img20.360buyimg.com/da/jfs/t2419/182/2842019597/81156/dda1b8fe/56f4e39fN5f51a1c0.jpg']
			};
		}
	};
</script>
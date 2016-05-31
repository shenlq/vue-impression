<template>
	<div>
		<container>
			<navbar>
				<a v-link='{"name":"demo"}'><icon type="arrow-left"></icon></a>
				<span class="split"></span>
				<span>Thumbnail</span>
			</navbar>
			<content>
				<thumbnail src="https://img20.360buyimg.com/da/jfs/t2014/58/2249644362/95186/7bc5fc19/56fa4036Ne056d298.jpg">
					<h3>Thumbnail label</h3>
					<div>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</div>
				</thumbnail>
			</content>
		</container>
	</div>
</template>


<script>
	import { Container, Content, Navbar, GroupTitle, Group, GroupItem, Thumbnail, Icon } from '../components/index.js';

	export default {
		  components: {
		  	Container,
		  	Content,
		  	Navbar,
		    GroupTitle,
		    Group,
		    GroupItem,
		    Thumbnail,
		    Icon
		  }
	};
</script>
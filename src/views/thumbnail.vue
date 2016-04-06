<template>
	<navbar>
		<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
		<span class="split"></span>
		<span>Thumbnail</span>
	</navbar>
	<container>
		<thumbnail src="http://localhost:9010/images/huawei.jpg">
			<h3>Thumbnail label</h3> 
			<div>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</div>
		</thumbnail>
	</container>
</template>


<script>
	import { Container, Navbar, GroupTitle, Group, GroupItem, Thumbnail} from '../components/index.js';

	export default {
		  components: {
		  	Container,
		  	Navbar,
		    GroupTitle,
		    Group,
		    GroupItem,
		    Thumbnail
		  }
	};
</script>
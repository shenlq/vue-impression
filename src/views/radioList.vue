<template>
	<container>
		<navbar>
			<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			<span>Radio</span>
		</navbar>
		<container-body>
			<radio-list :options="options"></radio-list>
		</container-body>
	</container>
</template>


<script>
	import { Container, ContainerBody, Navbar, GroupTitle, Group, GroupItem, RadioList } from '../components/index.js';

	export default {
		  components: {
		  	Container,
		  	ContainerBody,
		  	Navbar,
		    GroupTitle,
		    Group,
		    GroupItem,
		    RadioList
		},
		data(){
			return {
				options: [{name: "name"}, "b", "c"]
			};
		}
	};
</script>
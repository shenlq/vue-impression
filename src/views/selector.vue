<template>
	<container>
		<navbar>
			<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			<span>Selector</span>
		</navbar>
		<container-body>
			<group-title>
				单选列表
			</group-title>
			<selector :options="options" value="name"></selector>
			<group-title>
				多选列表
			</group-title>
			<selector :options="options" multiple :value.sync='multipleValues'></selector>

		</container-body>
	</container>
</template>


<script>
	import { Container, ContainerBody, Navbar, GroupTitle, Group, GroupItem, Selector } from '../components/index.js';

	export default {
		  components: {
		  	Container,
		  	ContainerBody,
		  	Navbar,
		    GroupTitle,
		    Group,
		    GroupItem,
		    Selector
		},
		data(){
			return {
				options: [{name: "name"}, "b", "c"],
				multipleValues: ['b', 'c']
			};
		}
	};
</script>
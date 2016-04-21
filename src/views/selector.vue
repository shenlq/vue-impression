<template>
	<navbar>
		<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
		<span class="split"></span>
		<span>Selector</span>
	</navbar>
	<container>
		<group-title>
			单选列表
		</group-title>
		<selector :options="options" value="name" :on-select="selectHandle"></selector>
		<group-title>
			多选列表
		</group-title>
		<selector :options="options" :on-select="mulSelectHandle" multiple :value.sync='multipleValues'></selector>
	</container>
</template>


<script>
	import { Container, Navbar, GroupTitle, Group, GroupItem, Selector } from '../components/index.js';

	export default {
		components: {
		  	Container,
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
		},
		methods: {
			selectHandle(value, index){
				console.log(value, index);
			},
			mulSelectHandle(value, index){
				console.log(value, index);
			}
		}
	};
</script>
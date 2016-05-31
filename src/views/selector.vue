<template>
	<div>
		<container>
			<navbar>
				<a v-link='{"name":"demo"}'><icon type="arrow-left"></icon></a>
				<span class="split"></span>
				<span>Selector</span>
			</navbar>
			<content>
				<group-title>
					单选列表
				</group-title>
				<selector :options="options" value="name" :on-select="selectHandle"></selector>
				<group-title>
					多选列表
				</group-title>
				<selector :options="options" :on-select="mulSelectHandle" multiple :value.sync='multipleValues'></selector>
			</content>
		</container>
	</div>
</template>


<script>
	import { Container, Content, Navbar, GroupTitle, Group, GroupItem, Selector, Icon } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	Content,
		  	Navbar,
		    GroupTitle,
		    Group,
		    GroupItem,
		    Selector,
		    Icon
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
<template>
	<container>
		<navbar>
			<a v-link='{"name": "demo"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			<span>SlideUp</span>
			<span class="pull-right">
			</span>
		</navbar>
		<container-body>
			<slideup show>
				<selector :options="zones" dispatch="slideup:hide1"></selector>
			</slideup>
		</container-body>
	</container>
</template>


<script>
	import { Container, ContainerBody, Group, GroupItem, Navbar, Selector, Slideup } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	ContainerBody,
		    Group,
		    GroupItem,
		    Navbar,
		    Selector,
		    Slideup
		},
		created(){
		},
		data(){
			return {
				zones: ['福州', '厦门', '泉州']
			};
		},
		methods: {
		}
	};
</script>
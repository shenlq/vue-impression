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
			<group>
				<group-item :click="showSlideup">
					选择收货地址
				</group-item>
			</group>
			<slideup :show.sync="show">
				<div class="text-danger" slot="heading">请选择取货地址</div>
				<selector :options="zones" dispatch="slideup:hide"></selector>
			</slideup>
		</container-body>
	</container>
</template>


<script>
	import { Container, ContainerBody, Group, GroupTitle, GroupItem, Navbar, Selector, Slideup } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	ContainerBody,
		    Group,
		    GroupTitle,
		    GroupItem,
		    Navbar,
		    Selector,
		    Slideup
		},
		created(){
		},
		data(){
			return {
				zones: ['福州', '厦门', '泉州'],
				show: false
			};
		},
		methods: {
			showSlideup(){
				this.show = true;
			}
		}
	};
</script>
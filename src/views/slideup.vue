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
			<div class="mask">
				<div class="slideup">
					<div class="slideup-heading">
						请选择取货地点：
					</div>
					<div class="slideup-body">
						<div class="slideup-item">
							北京
						</div>
						<div class="slideup-item">
							上海
						</div>
					</div>
				</div>
			</div>
		</container-body>
	</container>
</template>


<script>
	import { Container, ContainerBody, Group, GroupItem, Navbar } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	ContainerBody,
		    Group,
		    GroupItem,
		    Navbar,
		},
		created(){
		},
		methods: {
		}
	};
</script>
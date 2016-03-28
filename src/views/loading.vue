<template>
	<container>
		<navbar>
			<a v-link='{"name": "demo"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			<span>Loading</span>
		</navbar>
		<container-body>
			<group>
				<group-item :click="defaultChangeHandle">
					<span slot="body">显示</span>
				</group-item>
			</group>
		<div class="mask">
			<div class="toast">
				<div class="toast-body">
					<div class="loading">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div>加载中...</div>
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
		data(){
			return {
				show: false,
			}
		},
		methods: {
			//显示默认
			defaultChangeHandle(event){
				this.show = true;
			},
		}
	};
</script>
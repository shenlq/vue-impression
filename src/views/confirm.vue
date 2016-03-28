<template>
	<container>
		<navbar>
			<a v-link='{"name": "demo"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			<span>Confirm</span>
		</navbar>
		<container-body>
			<group>
				<group-item :click="showConfirmHandle">
					<span slot="body">删除记录</span>
				</group-item>
			</group>
			<confirm title="删除该记录将不可恢复" message="确认删除？" :show.sync="show"></confirm>
		</container-body>
	</container>
</template>

<script>
	import { Container, ContainerBody, Group, GroupItem, Navbar, Confirm } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	ContainerBody,
		    Group,
		    GroupItem,
		    Navbar,
		    Confirm,
		},
		data(){
			return {
				show: false
			}
		},
		methods: {
			//显示默认
			showConfirmHandle(event){
				this.show = true;
			},
		}
	};
</script>
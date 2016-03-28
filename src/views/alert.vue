<template>
	<container>
		<navbar>
			<a v-link='{"name": "demo"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			<span>Alert</span>
		</navbar>
		<container-body>
			<group>
				<group-item :click="defaultAlertHandle">
					<span slot="body">默认</span>
				</group-item>
				<group-item :click="customAlertHandle">
					<span slot="body">自定义</span>
				</group-item>
			</group>
		<alert title="操作成功", message="恭喜您，抢票成功！" :show.sync="showDefault"></alert>
		<alert :show.sync="showCustom">
			<div class="alert-heading" slot="heading"><i class="fa fa-3x fa-check text-success"></i></div>
			<div class="alert-body text-success" slot="body">自定义Alert样式！</div>
		</alert>
		</container-body>
	</container>
</template>


<script>
	import { Container, ContainerBody, Group, GroupItem, Navbar, Alert } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	ContainerBody,
		    Group,
		    GroupItem,
		    Navbar,
		    Alert,
		},
		data(){
			return {
				showDefault: false,
				showCustom: false
			}
		},
		methods: {
			//显示默认
			defaultAlertHandle(event){
				this.showDefault = true;
			},
			//显示默认
			customAlertHandle(event){
				this.showCustom = true;
			}
		}
	};
</script>
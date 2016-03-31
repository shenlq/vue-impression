<template>
	<navbar>
		<a v-link='{"name": "demo"}'><i class="fa fa-arrow-left"></i></a>
		<span class="split"></span>
		<span>Alert</span>
	</navbar>
	<container>
		<group>
			<group-item :click="defaultAlertHandle">
				<span>默认</span>
			</group-item>
			<group-item :click="customAlertHandle">
				<span>自定义</span>
			</group-item>
		</group>
	<alert title="操作成功", message="恭喜您，抢票成功！" :show.sync="showDefault"></alert>
	<alert :show.sync="showCustom">
		<div class="alert-heading" slot="heading"><i class="fa fa-3x fa-check text-success"></i></div>
		<div class="alert-body text-success">丑是丑了点，能说明问题啊！</div>
	</alert>
	</container>
</template>


<script>
	import { Container, Group, GroupItem, Navbar, Alert } from '../components/index.js';

	export default {
		components: {
		  	Container,
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
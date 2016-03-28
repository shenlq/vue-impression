<template>
	<container>
		<navbar>
			<a v-link='{"name": "demo"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			<span>Confirm</span>
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
			<div class="mask">
				<div class="alert">
					<div class="alert-heading">删除该记录将不可恢复</div>
					<div class="alert-body">确认删除？</div>
					<div class="alert-footer">
						<a>确认</a>
						<a>取消</a>
					</div>
				</div>
			</div>
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
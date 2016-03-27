<template>
	<container>
		<navbar>
			<i class="fa fa-arrow-left"></i>
			<span class="split"></span>
			<span>Toast</span>
		</navbar>
		<container-body>
			<group>
				<group-item :click="defaultChangeHandle">
					<span slot="body">默认（1s后消失）</span>
				</group-item>
				<group-item :click="customChangeHandle">
					<span slot="body">自定义（3s后消失）</span>
				</group-item>
			</group>
			<toast type="error" :show.sync="showToast" :duration="duration">操作失败</toast>
		</container-body>
	</container>
</template>


<script>
	import { Container, ContainerBody, Group, GroupItem, Navbar, Switch, Toast } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	ContainerBody,
		    Group,
		    GroupItem,
		    Navbar,
		    Switch,
		    Toast
		},
		data(){
			return {
				showToast: false,
				duration: 1000
			}
		},
		methods: {
			//显示默认
			defaultChangeHandle(event){
				this.duration = 1000;
				this.showToast = !this.showToast;
			},
			//显示默认
			customChangeHandle(event){
				this.duration = 3000;
				this.showToast = !this.showToast;
			}
		}
	};
</script>
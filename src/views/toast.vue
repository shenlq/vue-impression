<template>
	<div>
		<navbar>
			<a v-link='{"name": "demo"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			<span>Toast</span>
		</navbar>
		<container>
			<group>
				<group-item @click="defaultChangeHandle">
					<span>默认（1s）</span>
				</group-item>
				<group-item @click="customChangeHandle">
					<span>自定义（3s）</span>
				</group-item>
			</group>
			<group>
				<group-item @click="successTypeHandle">
					<i class="fa fa-lg fa-check text-success" slot="heading"></i>
					<span>成功</span>
				</group-item>
				<group-item @click="warningTypeHandle">
					<i class="fa fa-lg fa-exclamation-triangle text-warning" slot="heading"></i>
					<span>警告</span>
				</group-item>
				<group-item @click="errorTypeHandle">
					<i class="fa fa-lg fa-exclamation-circle text-danger" slot="heading"></i>
					<span>失败</span>
				</group-item>
			</group>
			<toast :type="totastType" :show.sync="showToast" :duration="duration">{{totastMsg}}</toast>
		</container>
	</div>
</template>


<script>
	import { Container, Group, GroupItem, Navbar, Switch, Toast } from '../components/index.js';

	export default {
		components: {
		  	Container,
		    Group,
		    GroupItem,
		    Navbar,
		    Switch,
		    Toast
		},
		data(){
			return {
				showToast: false,
				duration: 1000,
				totastType: 'success',
				totastMsg: '操作成功'
			}
		},
		methods: {
			//显示默认
			defaultChangeHandle(event){
				this.duration = 1000;
				this.totastMsg = '1S后消失';
				this.showToast = !this.showToast;
			},
			//显示默认
			customChangeHandle(event){
				this.duration = 3000;
				this.totastMsg = '3S后消失';
				this.showToast = !this.showToast;
			},
			//成功提示
			successTypeHandle(){
				this.duration = 1000;
				this.totastType = 'success';
				this.showToast = !this.showToast;
				this.totastMsg = '操作成功';
			},
			//警告提示
			warningTypeHandle(){
				this.duration = 1000;
				this.totastType = 'warning';
				this.showToast = !this.showToast;
				this.totastMsg = '操作警告';
			},
			//操作失败
			errorTypeHandle(){
				this.duration = 1000;
				this.totastType = 'error';
				this.showToast = !this.showToast;
				this.totastMsg = '操作失败';
			}
		}
	};
</script>
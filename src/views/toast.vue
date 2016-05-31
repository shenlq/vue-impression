<template>
	<div>
		<container>
			<navbar>
				<a v-link='{"name": "demo"}'><icon type="arrow-left"></icon></a>
				<span class="split"></span>
				<span>Toast</span>
			</navbar>
			<content>
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
					<icon type="check" size="lg" class="text-success" slot="header"></icon>
						<span>成功</span>
					</group-item>
					<group-item @click="warningTypeHandle">
						<icon type="exclamation-triangle" size="lg" class="text-warning" slot="header"></icon>
						<span>警告</span>
					</group-item>
					<group-item @click="errorTypeHandle">
						<icon type="exclamation-circle" size="lg" class="text-danger" slot="header"></icon>
						<span>失败</span>
					</group-item>
				</group>
				<toast :type="totastType" :show.sync="showToast" :duration="duration">{{totastMsg}}</toast>
			</content>
		</container>
	</div>
</template>


<script>
	import { Container, Content, Group, GroupItem, Navbar, Switch, Toast, Icon } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	Content,
		    Group,
		    GroupItem,
		    Navbar,
		    Switch,
		    Toast,
		    Icon
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
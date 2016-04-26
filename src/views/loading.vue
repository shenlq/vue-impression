<template>
	<container>
		<navbar>
			<a v-link='{"name": "demo"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			<span>Loading</span>
		</navbar>
		<content>
			<group>
				<group-item @click="defaultLoadingHandle">
					<span>{{show?'隐藏':'显示'}}</span>
				</group-item>
				<group-item @click="customLoadingHandle">
					<span>自定义信息</span>
				</group-item>
			</group>
			<loading :show.sync="show" :message="message"></loading>
		</content>
	</container>
</template>


<script>
	import { Container, Content, Group, GroupItem, Navbar, Loading } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	Content,
		    Group,
		    GroupItem,
		    Navbar,
		    Loading
		},
		data(){
			return {
				show: false,
				message: '加载中'
			}
		},
		methods: {
			//显示默认
			defaultLoadingHandle(){
				this.show = !this.show;
				this.message = "加载中";

			},
			//自定义
			customLoadingHandle(){
				this.show = !this.show;
				this.message = "loading";
			},
		}
	};
</script>
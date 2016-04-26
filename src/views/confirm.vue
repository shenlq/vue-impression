<template>
	<div>
		<container>
			<navbar>
				<a v-link='{"name": "demo"}'><i class="fa fa-arrow-left"></i></a>
				<span class="split"></span>
				<span>Confirm</span>
			</navbar>
			<content>
				<group>
					<group-item @click="showConfirmHandle">
						<span>删除记录</span>
					</group-item>
				</group>
				<confirm title="删除该记录将不可恢复" message="确认删除？" :show.sync="show" @click="sureClickHandle"></confirm>
			</content>
		</container>
	</div>
</template>

<script>
	import { Container, Content, Group, GroupItem, Navbar, Confirm } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	Content,
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
			//点击确定
			sureClickHandle(){
				console.log("您点击了确定！");
			}
		}
	};
</script>
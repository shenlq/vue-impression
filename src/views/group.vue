<template>
	<div>
		<container>
			<navbar>
				<a v-link='{"name": "demo"}'><i class="fa fa-arrow-left"></i></a>
				<span class="split"></span>
				Group
			</navbar>
			<content>
				<group>
					<group-item>
						张三丰
					</group-item>
					<group-item>
						张无忌
					</group-item>
					<group-item>
						张良
					</group-item>
				</group>
				<group-title>带标题</group-title>
				<group>
					<group-item>
						王二小
					</group-item>
					<group-item>
						王昭君
					</group-item>
				</group>
				<group-title>可点击
					<a href="javascript:void(0)" slot="footer">真的可点击</a>
				</group-title>
				<group>
					<group-item :v-link='{"name": "demo"}'>
						赵云
					</group-item>
					<group-item :v-link='{"name": "demo"}'>
						赵匡胤
					</group-item>
				</group>
				<group-title>带头信息、描述信息</group-title>
				<group>
					<group-item :v-link='{"name": "demo"}'>
						<i class="fa fa-lg fa-bullseye text-primary" slot="heading"></i>
						董卓
						<span slot="footer">0.1</span>
					</group-item>
					<group-item :v-link='{"name": "demo"}'>
						<i class="fa fa-lg fa-bullseye text-primary" slot="heading"></i>
						董存瑞
						<span slot="footer">炸暗堡</span>
					</group-item>
				</group>
				<group-title>pure</group-title>
				<group>
					<group-item pure>
						<btn block>保存</btn>
					</group-item>
				</group>
			</content>
		</container>
	</div>
</template>


<script>
	import { Container, Content, Group, GroupTitle, GroupItem, Navbar, Btn } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	Content,
		    Group,
		    GroupTitle,
		    GroupItem,
		    Navbar,
		    Btn
		}
	};
</script>
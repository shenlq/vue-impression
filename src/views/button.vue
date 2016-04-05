<template>
	<navbar>
		<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
		<span class="split"></span>
		<span>Button</span>
	</navbar>
	<container>
		<group>
			<group-item>
				<div>
					<button class="btn btn-default">默认</button>
					<button class="btn btn-primary">提交</button>
					<button class="btn btn-secondary">删除</button>
				</div>
			</group-item>
		</group>
		<group-title>disabled</group-title>
		<group>
			<group-item>
				<div>
					<button class="btn btn-default" disabled>默认</button>
					<button class="btn btn-primary" disabled>保存</button>
					<button class="btn btn-secondary" disabled>删除</button>
				</div>
			</group-item>
		</group>
		<group-title>sm button</group-title>
		<group>
			<group-item>
				<div>
					<button class="btn btn-default btn-sm">默认</button>
					<button class="btn btn-primary btn-sm">提交</button>
					<button class="btn btn-secondary btn-sm">取消</button>
				</div>
			</group-item>
		</group>
		<group-title>block</group-title>
		<group>
			<group-item>
				<button class="btn btn-default btn-block">默认</button>
			</group-item>
			<group-item>
				<button class="btn btn-primary btn-block">主题</button>
			</group-item>
			<group-item>
				<button class="btn btn-secondary btn-block">取消</button>
			</group-item>
		</group>
	</container>

</template>


<script>
	import { Container, Navbar, Group, GroupItem, GroupTitle } from '../components/index.js';

	export default {
		  components: {
		  	Container,
		  	Navbar,
		    Group,
		    GroupItem,
		    GroupTitle
		  }
	};
</script>
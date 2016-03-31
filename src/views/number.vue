<template>
	<navbar>
		<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
		<span class="split"></span>
		<span>InputNumber</span>
	</navbar>
	<container>
		<group>
			<group-item>
				默认样式：
				<input-number slot="footer" max="5"></input-number>
			</group-item>
			<group-item>
				disabled：
				<input-number slot="footer" disabled></input-number>
			</group-item>
			<group-item>
				自定义step=2
				<input-number slot="footer" step="3" ></input-number>
			</group-item>
			<group-item>
				设置最大值5
				<input-number slot="footer" max="5" ></input-number>
			</group-item>
			<group-item>
				设置最小值-2
				<input-number slot="footer" min="-2" ></input-number>
			</group-item>
		</group>
	</container>
</template>

<script>
	import { Container, Navbar, GroupTitle, Group, GroupItem, InputNumber } from '../components/index.js';
	export default {
		components: {
			Container,
			Navbar,
			GroupTitle,
			Group,
			GroupItem,
			InputNumber
		}
	};
</script>
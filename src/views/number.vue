<template>
	<div>
		<container>
			<navbar>
				<a v-link='{"name":"demo"}'><icon type="arrow-left"></icon></a>
				<span class="split"></span>
				<span>InputNumber</span>
			</navbar>
			<content>
				<group>
					<group-item>
						默认样式：
						<input-number slot="footer"></input-number>
					</group-item>
					<group-item>
						disabled：
						<input-number slot="footer" disabled></input-number>
					</group-item>
					<group-item>
						自定义step=3
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
			</content>
		</container>
	</div>
</template>

<script>
	import { Container, Content, Navbar, GroupTitle, Group, GroupItem, InputNumber, Icon } from '../components/index.js';
	export default {
		components: {
			Container,
			Navbar,
			GroupTitle,
			Group,
			GroupItem,
			InputNumber,
			Icon
		}
	};
</script>
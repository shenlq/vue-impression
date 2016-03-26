<template>
	<group-title>Radio</group-title>
	<group>
		<group-item>
			<span slot="heading">性别：</span>
			<span slot="body">
				<radio name="sex" checked>
					<span slot>男</span>
				</radio>
				<radio name="sex">
					<span slot>女</span>
				</radio>
			</span>
		</group-item>
	</group>
	<group-title>disabled</group-title>
	<group>
		<group-item>
			<span slot="heading">已婚：</span>
			<span slot="body">
				<radio name="merray" disabled checked>
					<span slot>是</span>
				</radio>
				<radio name="merray" disabled>
					<span slot>否</span>
				</radio>
			</span>
		</group-item>
	</group>
</template>


<script>
	import { GroupTitle, Group, GroupItem, Radio } from '../components/index.js';

	export default {
		  components: {
		    GroupTitle,
		    Group,
		    GroupItem,
		    Radio
		  }
	};
</script>
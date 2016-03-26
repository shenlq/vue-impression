<template>
	<group-title>Checkbox</group-title>
	<group>
		<group-item>
			<checkbox slot="body"></checkbox>
		</group-item>
		<group-item>
			<checkbox slot="body">
				<span slot>篮球</span>
			</checkbox>
		</group-item>
		<group-item>
			<checkbox slot="body" checked>
				<span slot>足球</span>
			</checkbox>
		</group-item>
	</group>
	<group-title>Disabled</group-title>
	<group>
		<group-item>
			<checkbox slot="body" disabled>
				<span slot>篮球</span>
			</checkbox>
		</group-item>
		<group-item>
			<checkbox slot="body" checked disabled>
				<span slot>足球</span>
			</checkbox>
		</group-item>
	</group>
	<group-title>Type</group-title>
	<group>
		<group-item>
			<checkbox slot="body" circle>
				<span slot>圆形</span>
			</checkbox>
		</group-item>
		<group-item>
			<checkbox slot="body" checked outline>
				<span slot>空心</span>
			</checkbox>
		</group-item>
		<group-item>
			<checkbox slot="body" checked circle outline>
				<span slot>圆形 + 空心</span>
			</checkbox>
		</group-item>
	</group>
</template>



<script>
	import { GroupTitle, Group, GroupItem, Checkbox } from '../components/index.js';

	export default {
		  components: {
		    GroupTitle,
		    Group,
		    GroupItem,
		    Checkbox
		  }
	};
</script>
<template>
	<group-title>Checkbox</group-title>
	<group>
		<group-item>
			<label class="checkbox" slot="body">
				<input type="checkbox">
				<span class="checkbox-addon">
				</span>
			</label>
		</group-item>
	</group>
</template>



<script>
	import { GroupTitle, Group, GroupItem, Switch } from '../components/index.js';

	export default {
		  components: {
		    GroupTitle,
		    Group,
		    GroupItem,
		    Switch
		  }
	};
</script>
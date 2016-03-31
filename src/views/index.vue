<template>
	<h3 class="text-center">
		<img src="../images/logo.png" width="100px" :style="{marginTop: '20px', marginBottom: '10px'}">
		<div><small>beta 0.1</small></div>
	</h3>
	<group>
		<group-item v-link='{"name": "demo"}'>
			<i class="fa fa-lg fa-drupal text-success" slot="heading"></i>
			<span>组件库</span>
		</group-item>
		<group-item>
			<i class="fa fa-lg fa-clock-o text-warning" slot="heading"></i>
			<span>History</span>
			<span slot="footer">0.1.0</span>
		</group-item>
	</group>
	<group>
		<group-item>
			<i class="fa fa-lg fa-github" slot="heading"></i>
			<span>Star</span>
			<span slot="footer">998</span>
		</group-item>
		<group-item>
			<i class="fa fa-lg fa-github" slot="heading"></i>
			<span>Fork</span>
			<span slot="footer">336</span>
		</group-item>
	</group>
</template>


<script>
	import { Group, GroupItem, GroupTitle } from '../components/index.js';

	export default {
		  components: {
		    Group,
		    GroupItem,
		    GroupTitle
		  }
	};
</script>
<template>
	<h3 class="text-center">
		<i class="fa fa-5x fa-connectdevelop"></i><br>
		<small>Dui Beta 0.1</small>
	</h3>
	<group>
		<group-item v-link="demo">
			<i class="fa fa-lg fa-drupal text-success" slot="heading"></i>
			<span slot="body">Demo</span>
		</group-item>
		<group-item>
			<i class="fa fa-lg fa-clock-o text-warning" slot="heading"></i>
			<span slot="body">History</span>
			<span slot="footer">0.1.0</span>
		</group-item>
	</group>
	<group>
		<group-item v-link="https://github.com/shenlq/vue-dui">
			<i class="fa fa-lg fa-github" slot="heading"></i>
			<span slot="body">Star</span>
			<span slot="footer">998</span>
		</group-item>
		<group-item v-link="https://github.com/shenlq/vue-dui">
			<i class="fa fa-lg fa-github" slot="heading"></i>
			<span slot="body">Fork</span>
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
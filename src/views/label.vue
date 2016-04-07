<template>
	<navbar>
		<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
		<span class="split"></span>
		<span>TextLabel</span>
	</navbar>
	<container>
		<group>
			<group-item>
				<text-label slot="heading" type="primary">默 认</text-label>
				<span >primary</span>
			</group-item>
			<group-item>
				<text-label slot="heading" type="success">成 功</text-label>
				<span >success</span>
			</group-item>
			<group-item>
				<text-label slot="heading" type="warning">警 告</text-label>
				<span >warning</span>
			</group-item>
			<group-item>
				<text-label slot="heading" type="danger">错 误</text-label>
				<span >danger</span>
			</group-item>
		</group>
	</container>
</template>


<script>
	import { Container, Navbar, GroupTitle, Group, GroupItem, TextLabel } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	Navbar,
		    GroupTitle,
		    Group,
		    GroupItem,
		    TextLabel
		}
	};
</script>
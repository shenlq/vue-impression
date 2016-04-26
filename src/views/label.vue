<template>
	<container>
		<navbar>
			<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			<span>TextLabel</span>
		</navbar>
		<content>
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
			<group-title>outline</group-title>
			<group>
				<group-item>
					<text-label slot="heading" type="primary" outline>默 认</text-label>
					<span >primary</span>
				</group-item>
				<group-item>
					<text-label slot="heading" type="success" outline>成 功</text-label>
					<span >success</span>
				</group-item>
				<group-item>
					<text-label slot="heading" type="warning" outline>警 告</text-label>
					<span >warning</span>
				</group-item>
				<group-item>
					<text-label slot="heading" type="danger" outline>错 误</text-label>
					<span >danger</span>
				</group-item>
			</group>
		</content>
	</container>
</template>


<script>
	import { Container, Content, Navbar, GroupTitle, Group, GroupItem, TextLabel } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	Content,
		  	Navbar,
		    GroupTitle,
		    Group,
		    GroupItem,
		    TextLabel
		}
	};
</script>
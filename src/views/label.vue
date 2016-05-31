<template>
	<div>
		<container>
			<navbar>
				<a v-link='{"name":"demo"}'><icon type="arrow-left"></icon></a>
				<span class="split"></span>
				<span>TextLabel</span>
			</navbar>
			<content>
				<group>
					<group-item>
						<text-label slot="header" type="primary">默 认</text-label>
						<span >primary</span>
					</group-item>
					<group-item>
						<text-label slot="header" type="success">成 功</text-label>
						<span >success</span>
					</group-item>
					<group-item>
						<text-label slot="header" type="warning">警 告</text-label>
						<span >warning</span>
					</group-item>
					<group-item>
						<text-label slot="header" type="danger">错 误</text-label>
						<span >danger</span>
					</group-item>
				</group>
				<group-title>outline</group-title>
				<group>
					<group-item>
						<text-label slot="header" type="primary" outline>默 认</text-label>
						<span >primary</span>
					</group-item>
					<group-item>
						<text-label slot="header" type="success" outline>成 功</text-label>
						<span >success</span>
					</group-item>
					<group-item>
						<text-label slot="header" type="warning" outline>警 告</text-label>
						<span >warning</span>
					</group-item>
					<group-item>
						<text-label slot="header" type="danger" outline>错 误</text-label>
						<span >danger</span>
					</group-item>
				</group>
			</content>
		</container>
	</div>
</template>


<script>
	import { Container, Content, Navbar, GroupTitle, Group, GroupItem, TextLabel, Icon } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	Content,
		  	Navbar,
		    GroupTitle,
		    Group,
		    GroupItem,
		    TextLabel,
		    Icon
		}
	};
</script>
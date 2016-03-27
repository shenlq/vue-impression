<template>
	<container>
		<navbar>
			<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			<span>Radio</span>
		</navbar>
		<container-body>
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
		</container-body>
	</container>
</template>


<script>
	import { Container, ContainerBody, Navbar, GroupTitle, Group, GroupItem, Radio } from '../components/index.js';

	export default {
		  components: {
		  	Container,
		  	ContainerBody,
		  	Navbar,
		    GroupTitle,
		    Group,
		    GroupItem,
		    Radio
		  }
	};
</script>
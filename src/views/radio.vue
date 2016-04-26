<template>
	<div>
		<container>
			<navbar>
				<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
				<span class="split"></span>
				<span>Radio</span>
			</navbar>
			<content>
				<group>
					<group-item>
						<span slot="heading">性别：</span>
						<span>
							<radio name="sex" checked>
								<span>男</span>
							</radio>
							<radio name="sex">
								<span>女</span>
							</radio>
						</span>
					</group-item>
				</group>
				<group-title>disabled</group-title>
				<group>
					<group-item>
						<span slot="heading">已婚：</span>
						<span>
							<radio name="merray" disabled checked>
								<span>是</span>
							</radio>
							<radio name="merray" disabled>
								<span>否</span>
							</radio>
						</span>
					</group-item>
				</group>
			</content>
		</container>
	</div>
</template>


<script>
	import { Container, Content, Navbar, GroupTitle, Group, GroupItem, Radio } from '../components/index.js';

	export default {
		  components: {
		  	Container,
		  	Content,
		  	Navbar,
		    GroupTitle,
		    Group,
		    GroupItem,
		    Radio
		  }
	};
</script>
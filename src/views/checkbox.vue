<template>
	<div>
		<container>
			<navbar>
				<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
				<span class="split"></span>
				<span>Checkbox</span>
			</navbar>
			<content>
				<group>
					<group-item>
						<checkbox></checkbox>
					</group-item>
					<group-item>
						<checkbox>
							<span>篮球</span>
						</checkbox>
					</group-item>
					<group-item>
						<checkbox checked>
							<span>足球</span>
						</checkbox>
					</group-item>
				</group>
				<group-title>Disabled</group-title>
				<group>
					<group-item>
						<checkbox disabled>
							<span>篮球</span>
						</checkbox>
					</group-item>
					<group-item>
						<checkbox checked disabled>
							<span>足球</span>
						</checkbox>
					</group-item>
				</group>
				<group-title>Type</group-title>
				<group>
					<group-item>
						<checkbox circle>
							<span>圆形</span>
						</checkbox>
					</group-item>
					<group-item>
						<checkbox checked outline>
							<span>空心</span>
						</checkbox>
					</group-item>
					<group-item>
						<checkbox checked circle outline>
							<span>圆形 + 空心</span>
						</checkbox>
					</group-item>
				</group>
			</content>
		</container>
	</div>
</template>



<script>
	import { Container, Content, Navbar, GroupTitle, Group, GroupItem, Checkbox } from '../components/index.js';

	export default {
		  components: {
		  	Container,
		  	Content,
		  	Navbar,
		    GroupTitle,
		    Group,
		    GroupItem,
		    Checkbox
		  }
	};
</script>
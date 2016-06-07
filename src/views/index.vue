<template>
	<div>
		<container>
			<content>
				<h3 class="text-center">
					<img src="../images/logo.png" width="100px" :style="{marginTop: '20px', marginBottom: '10px'}">
					<div><small>beta 0.1</small></div>
				</h3>
				<group>
					<group-item :v-link='{"name": "demo"}'>
						<icon type="drupal" size="lg" class="text-success" slot="header"></icon>
						<span>组件库</span>
					</group-item>
					<group-item>
						<icon type="clock-o" size="lg" class="text-warning" slot="header"></icon>
						<span>History</span>
						<span slot="footer">0.1.0</span>
					</group-item>
				</group>
				<group>
					<group-item>
						<icon type="github" size="lg" slot="header"></icon>
						<span>Star</span>
						<span slot="footer">998</span>
					</group-item>
					<group-item>
						<icon type="github" size="lg" slot="header"></icon>
						<span>Fork</span>
						<span slot="footer">336</span>
					</group-item>
				</group>
				<group>
					<group-item href="https://github.com/shenlq/impression">
						<icon class="text-primary" type="facebook-square" size="lg" slot="header"></icon>
						<span>React components</span>
						<span slot="footer">go</span>
					</group-item>
				</group>
			</content>
		</container>
	</div>
</template>


<script>
	import { Container, Content, Group, GroupItem, GroupTitle, Icon } from '../components/index.js';

	export default {
		  components: {
		    Container,
		    Content,
		    Group,
		    GroupItem,
		    GroupTitle,
		    Icon,
		  }
	};
</script>
<template>
	<div>
		<container>
			<navbar>
				<a v-link='{"name":"demo"}'><icon type="arrow-left"></icon></a>
				<span class="split"></span>
				<span>Switch</span>
			</navbar>
			<content>
				<group>
					<group-item>
						<icon type="microphone" slot="header"></icon>
						<span>话筒</span>
						<switch slot="footer" checked></switch>
					</group-item>
					<group-item>
						<icon type="plane" class="text-warning" slot="header"></icon>
						<span>飞行模式</span>
						<switch slot="footer"></switch>
					</group-item>
				</group>
				<group-title>Disabled</group-title>
				<group>
					<group-item>
						<icon type="bell-slash" class="text-primary" slot="header"></icon>
						<span>关闭通知</span>
						<switch slot="footer" checked disabled></switch>
					</group-item>
					<group-item>
						<icon type="clock-o" class="text-danger" slot="header"></icon>
						<span>闹钟</span>
						<switch slot="footer" disabled></switch>
					</group-item>
				</group>
			</content>
		</container>
	</div>
</template>


<script>
	import { Container, Content, Navbar, GroupTitle, Group, GroupItem, Switch, Icon } from '../components/index.js';

	export default {
		  components: {
		  	Container,
		  	Content,
		  	Navbar,
		    GroupTitle,
		    Group,
		    GroupItem,
		    Switch,
		    Icon
		  }
	};
</script>
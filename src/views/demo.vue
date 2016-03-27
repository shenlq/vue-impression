<template>
	<container>
		<navbar>
			<i class="fa fa-arrow-left"></i>
			<span class="split"></span>
			<span>demo</span>
			<span class="pull-right">分享</span>
		</navbar>
		<container-body>
			<group-item v-link="navbar">
				<i class="fa fa- fa-home text-primary" slot="heading"></i>
				<span slot="body">Navbar</span>
			</group-item>
			<group-item v-link="footer">
				<i class="fa fa- fa-inbox text-muted" slot="heading"></i>
				<span slot="body">Footer</span>
			</group-item>
			<group-title>Form</group-title>
			<group-item v-link="button">
				<i class="fa fa- fa-hand-pointer-o text-primary" slot="heading"></i>
				<span slot="body">Button</span>
			</group-item>
			<group-item v-link="input">
				<i class="fa fa-l fa-text-height text-warning" slot="heading"></i>
				<span slot="body">Input</span>
			</group-item>
			<group-item v-link="textarea">
				<i class="fa fa-file-text-o" slot="heading"></i>
				<span slot="body">Textarea</span>
			</group-item>
			<group>
				<group-item v-link="switch">
					<i class="fa fa-lg fa-toggle-on text-success" slot="heading"></i>
					<span slot="body">Switch</span>
				</group-item>
				<group-item v-link="checkbox">
					<i class="fa fa-lg fa-check-square text-primary" slot="heading"></i>
					<span slot="body">Checkbox</span>
				</group-item>
				<group-item v-link="radio">
					<i class="fa fa-lg fa-dot-circle-o text-primary" slot="heading"></i>
					<span slot="body">Radio</span>
				</group-item>
			</group>
			<group>
				<group-item v-link="tab">
					<i class="fa fa-lg fa-indent text-danger" slot="heading"></i>
					<span slot="body">Tab</span>
				</group-item>
				<group-item v-link="drawer">
					<i class="fa fa-lg fa-briefcase text-muted" slot="heading"></i>
					<span slot="body">Drawer</span>
				</group-item>
			</group>
		</container-body>
	</container>
</template>


<script>
	import { Container, ContainerBody, Navbar, Group, GroupItem, GroupTitle } from '../components/index.js';

	export default {
		components: {
			Container,
			ContainerBody,
			Navbar,
		    Group,
		    GroupItem,
		    GroupTitle
		}
	};
</script>
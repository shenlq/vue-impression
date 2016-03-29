<template>
	<container>
		<navbar>
			<a v-link='{"name": "index"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			<span>组件</span>
			<span class="pull-right">分享</span>
		</navbar>
		<container-body>
			<group>
				<group-item v-link='{"name": "navbar"}'>
					<i class="fa fa-lg fa-home text-primary" slot="heading"></i>
					<span slot="body">Navbar</span>
				</group-item>
				<group-item v-link='{"name": "footer"}'>
					<i class="fa fa-lg fa-hdd-o text-muted" slot="heading"></i>
					<span slot="body">Footer</span>
				</group-item>
				<group-item v-link='{"name": "tab"}'>
					<i class="fa fa-lg fa-indent text-muted" slot="heading"></i>
					<span slot="body">Tab</span>
				</group-item>
				<group-item v-link='{"name": "drawer"}'>
					<i class="fa fa-lg fa-inbox text-muted" slot="heading"></i>
					<span slot="body">Drawer</span>
				</group-item>
			</group>
			<group-title>Form</group-title>
			<group-item v-link='{"name": "button"}'>
				<i class="fa fa-lg fa-hand-pointer-o text-primary" slot="heading"></i>
				<span slot="body">Button</span>
			</group-item>
			<group-item v-link='{"name": "input"}'>
				<i class="fa fa-lg fa-text-height text-warning" slot="heading"></i>
				<span slot="body">Input</span>
			</group-item>
			<group-item v-link='{"name": "textarea"}'>
				<i class="fa fa-lg fa-file-text-o" slot="heading"></i>
				<span slot="body">Textarea</span>
			</group-item>
			<group>
				<group-item v-link='{"name": "switch"}'>
					<i class="fa fa-lg fa-toggle-on text-success" slot="heading"></i>
					<span slot="body">Switch</span>
				</group-item>
				<group-item v-link='{"name": "checkbox"}'>
					<i class="fa fa-lg fa-check-square text-primary" slot="heading"></i>
					<span slot="body">Checkbox</span>
				</group-item>
				<group-item v-link='{"name": "radio"}'>
					<i class="fa fa-lg fa-dot-circle-o text-primary" slot="heading"></i>
					<span slot="body">Radio</span>
				</group-item>
			</group>
			<group-title>Tips</group-title>
			<group>
				<group-item v-link='{"name": "toast"}'>
					<i class="fa fa-lg fa-exclamation-circle text-muted" slot="heading"></i>
					<span slot="body">Toast</span>
				</group-item>
				<group-item v-link='{"name": "alert"}'>
					<i class="fa fa-lg fa-bolt text-warning" slot="heading"></i>
					<span slot="body">Alert</span>
				</group-item>
				<group-item v-link='{"name": "confirm"}'>
					<i class="fa fa-lg fa-question-circle text-primary" slot="heading"></i>
					<span slot="body">Confirm</span>
				</group-item>
				<group-item v-link='{"name": "loading"}'>
					<i class="fa fa-lg fa-spinner text-muted" slot="heading"></i>
					<span slot="body">Loading</span>
				</group-item>
			</group>
			<group>
				<group-item v-link='{"name": "menu"}'>
					<i class="fa fa-lg fa-list-ol" slot="heading"></i>
					<span slot="body">Menu</span>
				</group-item>
			</group>
		</container-body>
		<tab-bottom :style="style" class="tab-bottom-cascade">
			<tab-item>
				<i class="fa fa-lg fa-phone"></i>电话
			</tab-item>
			<tab-item selected>
				<i class="fa fa-lg fa-comment"></i>短信
			</tab-item>
			<tab-item>
				<i class="fa fa-lg fa-user"></i>我
			</tab-item>
			<tab-item>
				<i class="fa fa-lg fa-camera"></i>照相
			</tab-item>
		</tab-bottom>
	</container>
</template>


<script>
	import { Container, ContainerBody, Navbar, Group, GroupItem, GroupTitle, TabBottom, TabItem } from '../components/index.js';

	export default {
		components: {
			Container,
			ContainerBody,
			Navbar,
		    Group,
		    GroupItem,
		    GroupTitle,
		    TabBottom,
		    TabItem
		}
	};
</script>
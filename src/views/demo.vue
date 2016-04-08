<template>
	<navbar>
		<a :v-link='{"name": "index"}'><i class="fa fa-arrow-left"></i></a>
		<span class="split"></span>
		<span>组件</span>
		<span class="pull-right">分享</span>
	</navbar>
	<container bottom>
		<group-title>Layout</group-title>
		<group>
			<group-item :v-link='{"name": "navbar"}'>
				<i class="fa fa-lg fa-home text-primary" slot="heading"></i>
				<span>Navbar</span>
			</group-item>
			<group-item :v-link='{"name": "footer"}'>
				<i class="fa fa-lg fa-hdd-o text-muted" slot="heading"></i>
				<span>Footer</span>
			</group-item>
			<group-item :v-link='{"name": "group"}'>
				<i class="fa fa-lg fa-sitemap text-muted" slot="heading"></i>
				<span>Group</span>
			</group-item>
			<group-item :v-link='{"name": "flex"}'>
				<i class="fa fa-lg fa-th text-success" slot="heading"></i>
				<span>Flex</span>
			</group-item>
			<group-item :v-link='{"name": "tab"}'>
				<i class="fa fa-lg fa-indent text-muted" slot="heading"></i>
				<span>Tab</span>
			</group-item>
			<group-item :v-link='{"name": "drawer"}'>
				<i class="fa fa-lg fa-inbox text-muted" slot="heading"></i>
				<span>Drawer</span>
			</group-item>
		</group>
		<group-title>Form</group-title>
		<group>
			<group-item :v-link='{"name": "button"}'>
				<i class="fa fa-lg fa-hand-pointer-o text-primary" slot="heading"></i>
				<span>Button</span>
			</group-item>
			<group-item :v-link='{"name": "input"}'>
				<i class="fa fa-lg fa-text-height text-warning" slot="heading"></i>
				<span>Input</span>
			</group-item>
			<group-item :v-link='{"name": "number"}'>
				<i class="fa fa-lg fa-plus-circle text-primary" slot="heading"></i>
				<span>Number</span>
			</group-item>
			<group-item :v-link='{"name": "textarea"}'>
				<i class="fa fa-lg fa-file-text-o" slot="heading"></i>
				<span>Textarea</span>
			</group-item>
		</group>
		<group>
			<group-item :v-link='{"name": "switch"}'>
				<i class="fa fa-lg fa-toggle-on text-success" slot="heading"></i>
				<span>Switch</span>
			</group-item>
			<group-item :v-link='{"name": "checkbox"}'>
				<i class="fa fa-lg fa-check-square text-primary" slot="heading"></i>
				<span>Checkbox</span>
			</group-item>
			<group-item :v-link='{"name": "radio"}'>
				<i class="fa fa-lg fa-dot-circle-o text-primary" slot="heading"></i>
				<span>Radio</span>
			</group-item>
			<group-item :v-link='{"name": "selector"}'>
				<i class="fa fa-lg fa-check text-success" slot="heading"></i>
				<span>Selector</span>
			</group-item>
			<group-item :v-link='{"name": "inlineSelector"}'>
				<i class="fa fa-lg fa-flag-o text-success" slot="heading"></i>
				<span>InlineSelector</span>
			</group-item>
		</group>
		<group-title>Tips</group-title>
		<group>
			<group-item :v-link='{"name": "toast"}'>
				<i class="fa fa-lg fa-exclamation-circle text-muted" slot="heading"></i>
				<span>Toast</span>
			</group-item>
			<group-item :v-link='{"name": "alert"}'>
				<i class="fa fa-lg fa-bolt text-warning" slot="heading"></i>
				<span>Alert</span>
			</group-item>
			<group-item :v-link='{"name": "confirm"}'>
				<i class="fa fa-lg fa-question-circle text-primary" slot="heading"></i>
				<span>Confirm</span>
			</group-item>
			<group-item :v-link='{"name": "loading"}'>
				<i class="fa fa-lg fa-spinner text-muted" slot="heading"></i>
				<span>Loading</span>
			</group-item>
		</group>
		<group>
			<group-item :v-link='{"name": "menu"}'>
				<i class="fa fa-lg fa-list-ol" slot="heading"></i>
				<span>Menu</span>
			</group-item>
			<group-item :v-link='{"name": "slideup"}'>
				<i class="fa fa-lg fa-bars text-primary" slot="heading"></i>
				<span>SlideUp</span>
			</group-item>
			<group-item :v-link='{"name": "image"}'>
				<i class="fa fa-lg fa-picture-o" slot="heading"></i>
				<span>LazyImage</span>
			</group-item>
			<group-item :v-link='{"name": "carousel"}'>
				<i class="fa fa-lg fa-hourglass-start" slot="heading"></i>
				<span>Carousel</span>
			</group-item>
		</group>
		<group>
			<group-item :v-link='{"name": "thumbnail"}'>
				<i class="fa fa-lg fa-newspaper-o text-primary" slot="heading"></i>
				<span>Thumbnail</span>
			</group-item>
			<group-item :v-link='{"name": "label"}'>
				<i class="fa fa-lg fa-tag text-success" slot="heading"></i>
				<span>TextLabel</span>
			</group-item>
		</group>
	</container>
	<tab-bottom :style="style" cascade>
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
</template>


<script>
	import { Container, Navbar, Group, GroupItem, GroupTitle, TabBottom, TabItem } from '../components/index.js';

	export default {
		components: {
			Container,
			Navbar,
		    Group,
		    GroupItem,
		    GroupTitle,
		    TabBottom,
		    TabItem
		}
	};
</script>
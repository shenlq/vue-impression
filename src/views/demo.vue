<template>
	<div>
		<container>
			<navbar>
				<a v-link='{"name": "index"}'><i class="fa fa-arrow-left"></i></a>
				<span class="split"></span>
				<span>组件</span>
				<span class="flex-item text-right">分享</span>
			</navbar>
			<content>
				<group-title>Layout</group-title>
				<group>
					<group-item :v-link='{"name": "navbar"}'>
						<i class="fa fa-lg fa-home text-primary" slot="header"></i>
						<span>Navbar</span>
					</group-item>
					<group-item :v-link='{"name": "footer"}'>
						<i class="fa fa-lg fa-hdd-o text-muted" slot="header"></i>
						<span>Footer</span>
					</group-item>
					<group-item :v-link='{"name": "group"}'>
						<i class="fa fa-lg fa-sitemap text-muted" slot="header"></i>
						<span>Group</span>
					</group-item>
					<group-item :v-link='{"name": "flex"}'>
						<i class="fa fa-lg fa-th text-success" slot="header"></i>
						<span>Flex</span>
					</group-item>
					<group-item :v-link='{"name": "tab"}'>
						<i class="fa fa-lg fa-indent text-muted" slot="header"></i>
						<span>Tab</span>
					</group-item>
					<group-item :v-link='{"name": "drawer"}'>
						<i class="fa fa-lg fa-inbox text-muted" slot="header"></i>
						<span>Drawer</span>
					</group-item>
					<group-item :v-link='{"name": "jumbotron"}'>
						<i class="fa fa-lg fa-television text-muted" slot="header"></i>
						<span>Jumbotron</span>
					</group-item>
				</group>
				<group-title>Form</group-title>
				<group>
					<group-item :v-link='{"name": "button"}'>
						<i class="fa fa-lg fa-hand-pointer-o text-primary" slot="header"></i>
						<span>Button</span>
					</group-item>
					<group-item :v-link='{"name": "input"}'>
						<i class="fa fa-lg fa-text-height text-warning" slot="header"></i>
						<span>Input</span>
					</group-item>
					<group-item :v-link='{"name": "number"}'>
						<i class="fa fa-lg fa-plus-circle text-primary" slot="header"></i>
						<span>Number</span>
					</group-item>
					<group-item :v-link='{"name": "textarea"}'>
						<i class="fa fa-lg fa-file-text-o" slot="header"></i>
						<span>Textarea</span>
					</group-item>
					<group-item :v-link='{"name": "inputSelect"}'>
						<i class="fa fa-lg fa-angle-down" slot="header"></i>
						<span>InputSelect</span>
					</group-item>
				</group>
				<group>
					<group-item :v-link='{"name": "switch"}'>
						<i class="fa fa-lg fa-toggle-on text-success" slot="header"></i>
						<span>Switch</span>
					</group-item>
					<group-item :v-link='{"name": "checkbox"}'>
						<i class="fa fa-lg fa-check-square text-primary" slot="header"></i>
						<span>Checkbox</span>
					</group-item>
					<group-item :v-link='{"name": "radio"}'>
						<i class="fa fa-lg fa-dot-circle-o text-primary" slot="header"></i>
						<span>Radio</span>
					</group-item>
					<group-item :v-link='{"name": "selector"}'>
						<i class="fa fa-lg fa-check text-success" slot="header"></i>
						<span>Selector</span>
					</group-item>
					<group-item :v-link='{"name": "inlineSelector"}'>
						<i class="fa fa-lg fa-flag-o text-success" slot="header"></i>
						<span>InlineSelector</span>
					</group-item>
				</group>
				<group-title>Tips</group-title>
				<group>
					<group-item :v-link='{"name": "toast"}'>
						<i class="fa fa-lg fa-exclamation-circle text-muted" slot="header"></i>
						<span>Toast</span>
					</group-item>
					<group-item :v-link='{"name": "alert"}'>
						<i class="fa fa-lg fa-bolt text-warning" slot="header"></i>
						<span>Alert</span>
					</group-item>
					<group-item :v-link='{"name": "confirm"}'>
						<i class="fa fa-lg fa-question-circle text-primary" slot="header"></i>
						<span>Confirm</span>
					</group-item>
					<group-item :v-link='{"name": "loading"}'>
						<i class="fa fa-lg fa-spinner text-muted" slot="header"></i>
						<span>Loading</span>
					</group-item>
				</group>
				<group>
					<group-item :v-link='{"name": "menu"}'>
						<i class="fa fa-lg fa-list-ol" slot="header"></i>
						<span>Menu</span>
					</group-item>
					<group-item :v-link='{"name": "slide"}'>
						<i class="fa fa-lg fa-caret-square-o-up" slot="header"></i>
						<span>Slide</span>
					</group-item>
					<group-item :v-link='{"name": "image"}'>
						<i class="fa fa-lg fa-picture-o" slot="header"></i>
						<span>LazyImage</span>
					</group-item>
					<group-item :v-link='{"name": "carousel"}'>
						<i class="fa fa-lg fa-hourglass-start" slot="header"></i>
						<span>Carousel</span>
					</group-item>
					<group-item :v-link='{"name": "dropLoading"}'>
						<i class="fa fa-lg fa-balance-scale text-warning" slot="header"></i>
						<span>DropLoading</span>
					</group-item>
				</group>
				<group>
					<group-item :v-link='{"name": "thumbnail"}'>
						<i class="fa fa-lg fa-newspaper-o text-primary" slot="header"></i>
						<span>Thumbnail</span>
					</group-item>
					<group-item :v-link='{"name": "label"}'>
						<i class="fa fa-lg fa-tag text-success" slot="header"></i>
						<span>TextLabel</span>
					</group-item>
					<group-item :v-link='{"name": "date"}'>
						<i class="fa fa-lg fa-clock-o" slot="header"></i>
						<span>DatePicker</span>
					</group-item>
				</group>
			</content>
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
		</container>
	</div>
</template>


<script>
	import { Container, Content, Navbar, Group, GroupItem, GroupTitle, TabBottom, TabItem, DropLoading, Checkbox} from '../components/index.js';

	export default {
		components: {
			Container,
			Content,
			Navbar,
		    Group,
		    GroupItem,
		    GroupTitle,
		    TabBottom,
		    TabItem,
		    DropLoading,
		    Checkbox
		}
	};
</script>
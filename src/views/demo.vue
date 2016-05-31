<template>
	<div>
		<container>
			<navbar>
				<a v-link='{"name": "index"}'><icon type="arrow-left"></icon></a>
				<span class="split"></span>
				<span>组件</span>
				<span class="flex-item text-right">分享</span>
			</navbar>
			<content>
				<group-title>Layout</group-title>
				<group>
					<group-item :v-link='{"name": "navbar"}'>
						<icon type="home" size="lg" class="text-primary" slot="header"></icon>
						<span>Navbar</span>
					</group-item>
					<group-item :v-link='{"name": "footer"}'>
						<icon type="hdd-o" size="lg" class="text-muted" slot="header"></icon>
						<span>Footer</span>
					</group-item>
					<group-item :v-link='{"name": "group"}'>
						<icon type="sitemap" size="lg" class="text-muted" slot="header"></icon>
						<span>Group</span>
					</group-item>
					<group-item :v-link='{"name": "flex"}'>
						<icon type="th" size="lg" class="text-success" slot="header"></icon>
						<span>Flex</span>
					</group-item>
					<group-item :v-link='{"name": "tab"}'>
						<icon type="indent" size="lg" class="text-muted" slot="header"></icon>
						<span>Tab</span>
					</group-item>
					<group-item :v-link='{"name": "drawer"}'>
						<icon type="inbox" size="lg" class="text-muted" slot="header"></icon>
						<span>Drawer</span>
					</group-item>
					<group-item :v-link='{"name": "jumbotron"}'>
						<icon type="television" size="lg" class="text-muted" slot="header"></icon>
						<span>Jumbotron</span>
					</group-item>
				</group>
				<group-title>Form</group-title>
				<group>
					<group-item :v-link='{"name": "button"}'>
						<icon type="hand-pointer-o" size="lg" class="text-primary" slot="header"></icon>
						<span>Button</span>
					</group-item>
					<group-item :v-link='{"name": "input"}'>
						<icon type="text-height" size="lg" class="text-warning" slot="header"></icon>
						<span>Input</span>
					</group-item>
					<group-item :v-link='{"name": "number"}'>
						<icon type="plus-circle" size="lg" class="text-primary" slot="header"></icon>
						<span>Number</span>
					</group-item>
					<group-item :v-link='{"name": "textarea"}'>
						<icon type="file-text-o" size="lg" slot="header"></icon>
						<span>Textarea</span>
					</group-item>
					<group-item :v-link='{"name": "inputSelect"}'>
						<icon type="angle-down" size="lg" slot="header"></icon>
						<span>InputSelect</span>
					</group-item>
				</group>
				<group>
					<group-item :v-link='{"name": "switch"}'>
						<icon type="toggle-on" size="lg" class="text-success" slot="header"></icon>
						<span>Switch</span>
					</group-item>
					<group-item :v-link='{"name": "checkbox"}'>
						<icon type="check-square" size="lg" class="text-primary" slot="header"></icon>
						<span>Checkbox</span>
					</group-item>
					<group-item :v-link='{"name": "radio"}'>
						<icon type="dot-circle-o" size="lg" class="text-primary" slot="header"></icon>
						<span>Radio</span>
					</group-item>
					<group-item :v-link='{"name": "selector"}'>
						<icon type="check" size="lg" class="text-success" slot="header"></icon>
						<span>Selector</span>
					</group-item>
					<group-item :v-link='{"name": "inlineSelector"}'>
						<icon type="flag-o" size="lg" class="text-success" slot="header"></icon>
						<span>InlineSelector</span>
					</group-item>
				</group>
				<group-title>Tips</group-title>
				<group>
					<group-item :v-link='{"name": "toast"}'>
						<icon type="exclamation-circle" size="lg" class="text-muted" slot="header"></icon>
						<span>Toast</span>
					</group-item>
					<group-item :v-link='{"name": "alert"}'>
						<icon type="bolt" size="lg" class="text-warning" slot="header"></icon>
						<span>Alert</span>
					</group-item>
					<group-item :v-link='{"name": "confirm"}'>
						<icon type="question-circle" size="lg" class="text-primary" slot="header"></icon>
						<span>Confirm</span>
					</group-item>
					<group-item :v-link='{"name": "loading"}'>
						<icon type="spinner" size="lg" slot="header"></icon>
						<span>Loading</span>
					</group-item>
				</group>
				<group>
					<group-item :v-link='{"name": "menu"}'>
						<icon type="list-ol" size="lg" slot="header"></icon>
						<span>Menu</span>
					</group-item>
					<group-item :v-link='{"name": "slide"}'>
						<icon type="caret-square-o-up" size="lg" slot="header"></icon>
						<span>Slide</span>
					</group-item>
					<group-item :v-link='{"name": "image"}'>
						<icon type="picture-o" size="lg" slot="header"></icon>
						<span>LazyImage</span>
					</group-item>
					<group-item :v-link='{"name": "carousel"}'>
						<icon type="hourglass-start" size="lg" slot="header"></icon>
						<span>Carousel</span>
					</group-item>
					<group-item :v-link='{"name": "dropLoading"}'>
						<icon type="balance-scale" size="lg" class="text-warning" slot="header"></icon>
						<span>DropLoading</span>
					</group-item>
				</group>
				<group>
					<group-item :v-link='{"name": "thumbnail"}'>
						<icon type="newspaper-o" size="lg" class="text-primary" slot="header"></icon>
						<span>Thumbnail</span>
					</group-item>
					<group-item :v-link='{"name": "label"}'>
						<icon type="tag" size="lg" class="text-success" slot="header"></icon>
						<span>TextLabel</span>
					</group-item>
					<group-item :v-link='{"name": "date"}'>
						<icon type="clock-o" size="lg" slot="header"></icon>
						<span>DatePicker</span>
					</group-item>
				</group>
			</content>
			<tab-bottom :style="style" cascade>
				<tab-item>
					<icon type="phone" size="lg"></icon>电话
				</tab-item>
				<tab-item selected>
					<icon type="comment" size="lg"></icon>短信
				</tab-item>
				<tab-item>
					<icon type="user" size="lg"></icon>我
				</tab-item>
				<tab-item>
					<icon type="camera" size="lg"></icon>照相
				</tab-item>
			</tab-bottom>
		</container>
	</div>
</template>


<script>
	import { Container, Content, Navbar, Icon, Group, GroupItem, GroupTitle, TabBottom, TabItem, DropLoading, Checkbox} from '../components/index.js';

	export default {
		components: {
			Container,
			Content,
			Navbar,
			Icon,
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
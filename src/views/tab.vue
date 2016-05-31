<template>
	<div>
		<container>
			<navbar>
				<a v-link='{"name":"demo"}'><icon type="arrow-left"></icon></a>
				<span class="split"></span>
				<span>Tab</span>
			</navbar>
			<content>
				<tab :on-select="tabChangeHandle">
					<tab-item event-key="科技">科技</tab-item>
					<tab-item event-key="财经">财经</tab-item>
					<tab-item event-key="体育">体育</tab-item>
				</tab>

				<group-title>Default selected</group-title>
				<tab :on-select="tabChangeHandle">
					<tab-item event-key="头条">头条</tab-item>
					<tab-item event-key="热点" selected>热点</tab-item>
					<tab-item event-key="段子">段子</tab-item>
				</tab>
				<group-title>Icon tab</group-title>
				<tab :on-select="tabChangeHandle">
					<tab-item event-key="1"><icon type="qq" size="lg" class="text-primary"></icon></tab-item>
					<tab-item event-key="2"><icon type="weixin" size="lg" class="text-success"></icon></tab-item>
					<tab-item event-key="3" selected><icon type="weibo" size="lg" class="text-warning"></icon></tab-item>
				</tab>
			</content>
		</container>
	</div>
</template>


<script>
	import { Container, Content, GroupTitle, Group, GroupItem, Tab, TabItem, Navbar, Icon } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	Content,
		    GroupTitle,
		    Group,
		    GroupItem,
		    Tab,
		    TabItem,
		    Navbar,
		    Icon
		},
		methods: {
			tabChangeHandle(key){
				console.log(`${key}：被点击了！！！`);
			}
		}
	};
</script>
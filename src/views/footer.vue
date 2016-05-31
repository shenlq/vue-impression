<template>
	<div>
		<container>
			<navbar>
				<a v-link='{"name":"demo"}'><icon type="arrow-left"></icon></a>
				<span class="split"></span>
				<span>Tab bottom</span>
			</navbar>
			<tab-bottom :on-select="tabChangeHandle" :style="style1">
				<tab-item event-key="电话">电话</tab-item>
				<tab-item event-key="短信">短信</tab-item>
				<tab-item event-key="我">我</tab-item>
				<tab-item event-key="照相">照相</tab-item>
			</tab-bottom>

			<tab-bottom :on-select="tabChangeHandle" :style="style2">
				<tab-item event-key="1"><icon type="phone" size="lg"></icon></tab-item>
				<tab-item event-key="2"><icon type="comment" size="lg"></icon></tab-item>
				<tab-item event-key="3" selected><icon type="user" size="lg"></icon></tab-item>
				<tab-item event-key="4"><icon type="camera" size="lg"></icon></tab-item>
			</tab-bottom>

			<tab-bottom :on-select="tabChangeHandle" :style="style3" split>
				<tab-item event-key="电话">电话</tab-item>
				<tab-item event-key="短信">短信</tab-item>
				<tab-item event-key="我">我</tab-item>
				<tab-item event-key="照相">照相</tab-item>
			</tab-bottom>

			<tab-bottom :on-select="tabChangeHandle" :style="style" cascade>
				<tab-item event-key="1-电话">
					<icon type="phone" size="lg"></icon>
					<span>电话</span>
				</tab-item>
				<tab-item event-key="2-短信" selected>
					<icon type="comment" size="lg"></icon>
					<span>短信</span>
				</tab-item>
				<tab-item event-key="3-我">
					<icon type="user" size="lg"></icon>
					<span>我</span>
				</tab-item>
				<tab-item event-key="4-照相">
					<icon type="camera" size="lg"></icon>
					<span>照相</span>
				</tab-item>
			</tab-bottom>
		</container>
	</div>
</template>


<script>
	import { Container, GroupTitle, Navbar, TabBottom, TabItem, Icon } from '../components/index.js';

	export default {
		components: {
			Container,
		    GroupTitle,
		    Navbar,
		    TabBottom,
		    TabItem,
		    Icon
		},
		data(){
			return {
				style1: {
					top: '70px'
				},
				style2: {
					top: '175px'
				},
				style3: {
					top: '255px'
				}
			}
		},
		methods: {
			tabChangeHandle(key){
				console.log(`${key}:被选中了！`);
			}
		}
	};
</script>
<template>
	<div>
		<container>
			<navbar>
				<a v-link='{"name":"demo"}'><icon type="arrow-left"></icon></a>
				<span class="split"></span>
				<span>InlineSelector</span>
			</navbar>
			<content>
				<group-title>
					单选列表
				</group-title>
				<group>
					<group-item>
						<span slot="header">尺码：</span>
						<inline-selector :options="sizeOptions" :on-select="onSelectHandle"></inline-selector>
					</group-item>
				</group>
				<group-title>
					多选列表
				</group-title>
				<group>
					<group-item>
						<span slot="header">颜色：</span>
						<inline-selector :options="colorOptions" multiple :on-select="onSelectHandle"></inline-selector>
					</group-item>
				</group>
				<group-title>
					secondary风格
				</group-title>
				<group>
					<group-item>
						<span slot="header">颜色：</span>
						<inline-selector :options="colorOptions" multiple style="secondary" :on-select="onSelectHandle"></inline-selector>
					</group-item>
				</group>
			</content>
		</container>
	</div>
</template>


<script>
	import { Container, Content, Navbar, GroupTitle, Group, GroupItem, InlineSelector, Icon } from '../components/index.js';

	export default {
		  components: {
		  	Container,
		  	Content,
		  	Navbar,
		    GroupTitle,
		    Group,
		    GroupItem,
		    InlineSelector,
		    Icon
		},
		data(){
			return {
				sizeOptions: ['均码', 'X码', 'XL码'],
				colorOptions: ['红', '橙', '黄', '绿', '青', '蓝', '紫'],
				multipleValues: ['b', 'c']
			};
		},
		methods: {
			onSelectHandle(value, index){
				console.log(value, index);
			}
		}
	};
</script>
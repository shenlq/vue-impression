<template>
	<div>
		<container>
			<navbar>
				<a v-link='{"name": "demo"}'><i class="fa fa-arrow-left"></i></a>
				<span class="split"></span>
				<span>Slide</span>
				<span class="pull-right">
				</span>
			</navbar>
			<content>
				<group>
					<group-item @click="showSlideup('up')">
						slideUp
					</group-item>
				</group>
				<group>
					<group-item @click="showSlideup('down')">
						slideDown
					</group-item>
				</group>
				<slide :direction="direction" :show.sync="show" closeable>
					<span class="text-danger" slot="header">请选择取货地址</span>
					<selector :options="zones" dispatch="slideup:hide"></selector>
				</slide>
			</content>
		</container>
	</div>
</template>


<script>
	import { Container, Content, Group, GroupTitle, GroupItem, Navbar, Selector, Slide } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	Content,
		    Group,
		    GroupTitle,
		    GroupItem,
		    Navbar,
		    Selector,
		    Slide
		},
		created(){
		},
		data(){
			return {
				zones: ['福州', '厦门', '泉州', '北京', '上海', '杭州', '海宁', '广州', '深圳'],
				show: false,
				direction: 'up'
			};
		},
		methods: {
			showSlideup(direction){
				console.log(direction);
				this.show = true;
				this.direction = direction;
			}
		}
	};
</script>
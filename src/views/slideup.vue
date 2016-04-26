<template>
	<div>
		<navbar>
			<a v-link='{"name": "demo"}'><i class="fa fa-arrow-left"></i></a>
			<span class="split"></span>
			<span>SlideUp</span>
			<span class="pull-right">
			</span>
		</navbar>
		<container>
			<group>
				<group-item @click="showSlideup">
					选择收货地址
				</group-item>
			</group>
			<slideup :show.sync="show" closeable>
				<span class="text-danger" slot="heading">请选择取货地址</span>
				<selector :options="zones" dispatch="slideup:hide"></selector>
			</slideup>
		</container>
	</div>
</template>


<script>
	import { Container, Group, GroupTitle, GroupItem, Navbar, Selector, Slideup } from '../components/index.js';

	export default {
		components: {
		  	Container,
		    Group,
		    GroupTitle,
		    GroupItem,
		    Navbar,
		    Selector,
		    Slideup
		},
		created(){
		},
		data(){
			return {
				zones: ['福州', '厦门', '泉州', '北京', '上海', '杭州', '海宁', '广州', '深圳'],
				show: false
			};
		},
		methods: {
			showSlideup(){
				this.show = true;
			}
		}
	};
</script>
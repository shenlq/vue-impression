<template>
	<navbar>
		<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
		<span class="split"></span>
		<span>InputSelect</span>
	</navbar>
	<container>
		<group-title></group-title>
		<input-select :default-value="city" @click="showSlideupHandle" placeholder="请选择城市">
			<label slot>城市:</label>
		</input-select>
		<input-select :default-value="city" @click="showSlideupHandle">
			<label slot>默认值:</label>
		</input-select>
	</container>
	<slideup :show.sync="show">
		<span class="text-danger" slot="heading">请选择取货地址</span>
		<selector :options="zones" dispatch="slideup:hide" :value.sync="city"></selector>
	</slideup>
</template>


<script>
	import { Container, Navbar, Group, GroupItem, GroupTitle, InputSelect, Slideup, Selector } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	Navbar,
		    Group,
		    GroupItem,
		    GroupTitle,
		    InputSelect,
		    Slideup,
		    Selector
		},
		data(){
			return {
				city: {},
				show: false,
				zones: ['福州', '厦门', '泉州', '北京', '上海', '杭州', '海宁', '广州', '深圳'],
			}
		},
		methods: {
			showSlideupHandle(){
				this.show = true;
			},
			onSelectHandle(value, index){
				this.city = value;
			}
		}
	};
</script>
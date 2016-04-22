<template>
	<navbar>
		<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
		<span class="split"></span>
		<span>Input</span>
	</navbar>
	<container>
		<group-title></group-title>
		<input-text default-value="peter">
			<label slot>username:</label>
		</input-text>
		<input-text type="password" placeholder="请输入密码">
			<label slot>password:</label>
		</input-text>

		<group-title>disabled</group-title>
		<input-text placeholder="disabled" :disabled="true" value="这是只读输入框">
			<label slot>不可编辑:</label>
		</input-text>

		<group-title>clear icon</group-title>
		<input-text placeholder="可以清除内容" clearable>
			<label slot>clear:</label>
		</input-text>

		<group-title>status</group-title>
		<input-text state='success'>
			<label slot>success:</label>
		</input-text>
		<input-text state='warning'>
			<label slot>warning:</label>
		</input-text>
		<input-text state='error'>
			<label slot>error:</label>
		</input-text>

		<group-title>multiple icon</group-title>
		<input-text state='warning' clearable>
			<label slot>warning:</label>
		</input-text>

		<group-title>onchange</group-title>
		<input-text :on-change="onChangeHandle">
			<label slot>input:</label>
		</input-text>
	</container>
</template>


<script>
	import { Container, Navbar, Group, GroupItem, GroupTitle, InputText } from '../components/index.js';

	export default {
		components: {
		  	Container,
		  	Navbar,
		    Group,
		    GroupItem,
		    GroupTitle,
		    InputText
		},
		methods: {
			onChangeHandle(event, value){
				console.log(event, value);
			}
		}
	};
</script>
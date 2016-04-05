<template>
	<navbar>
		<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
		<span class="split"></span>
		<span>Input</span>
	</navbar>
	<container>
		<group-title></group-title>
		<input-text value="peter">
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
		<input-text placeholder="可以清除内容" clear>
			<label slot>clear:</label>
		</input-text>

		<group-title>status</group-title>
		<input-text is-success>
			<label slot>success:</label>
		</input-text>
		<input-text is-warning>
			<label slot>warning:</label>
		</input-text>
		<input-text is-error>
			<label slot>error:</label>
		</input-text>

		<group-title>multiple icon</group-title>
		<input-text is-warning clear>
			<label slot>warning:</label>
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
		  }
	};
</script>
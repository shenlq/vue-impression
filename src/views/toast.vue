<template>
	<container>
		<navbar>
			<i class="fa fa-arrow-left"></i>
			<span class="split"></span>
			<span>Toast</span>
		</navbar>
		<container-body>
			<group>
				<group-item>
					<span slot="body">默认</span>
					<switch slot="footer"></switch>
				</group-item>
				<group-item>
					<span slot="body">自定义时间</span>
					<switch slot="footer"></switch>
				</group-item>
			</group>
			<toast>操作成功</toast>
		</container-body>
	</container>
</template>


<script>
	import { Container, ContainerBody, Group, GroupItem, Navbar, Switch, Toast } from '../components/index.js';

	export default {
		  components: {
		  	Container,
		  	ContainerBody,
		    Group,
		    GroupItem,
		    Navbar,
		    Switch,
		    Toast
		  }
	};
</script>
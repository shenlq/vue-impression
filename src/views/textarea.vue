<template>
	<div>
		<container>
			<navbar>
				<a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
				<span class="split"></span>
				<span>Textarea</span>
			</navbar>
			<content>
				<group-title></group-title>
				<input-area value="这是一个textarea。" placeholder="请输入内容"></input-area>
				<group-title>带计数器</group-title>
				<input-area is-counter value="这是一个带计数器的textarea。" placeholder="请输入内容"></input-area>
			</content>
		</container>
	</div>
</template>


<script>
	import { Container, Content, Navbar, GroupTitle, InputArea } from '../components/index.js';

	export default {
		  components: {
		  	Container,
		  	Content,
		  	Navbar,
		    GroupTitle,
		    InputArea
		  }
	};
</script>
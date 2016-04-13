<template>
    <div class="drawer flexbox">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		//给drawer-item添加索引属性
		ready(){
			this.$children.forEach((child, index) => {
				child.$el.setAttribute("data-index", ++ index);
			});
		},
		events: {
			//点击事件
		    selected(index) {
		      	this.$children.forEach(child => {
					child.selected = false;
				});
				index != -1 && (this.$children[index - 1].selected = true);
		    }
	  	},
	  	methods: {
	  		//重置
	  		reset(){
	  			this.$children.forEach(child => {
					child.selected = false;
				});
	  		}
	  	}
	}
</script>
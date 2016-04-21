<template>
    <div class="drawer flexbox">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: {
			onSelect: {
				type: Function
			}
		},
		//给drawer-item添加索引属性
		ready(){
			this.$children.forEach((child, index) => {
				child.$el.setAttribute("data-index", ++ index);
			});
		},
		events: {
			//点击事件
		    selected(index, key, flag) {
		      	this.$children.forEach(child => {
					child.selected = false;
				});
				index != -1 && (this.$children[index - 1].selected = true);
				//触发事件
				this.onSelect && this.onSelect(key, flag);
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
<template>
    <div :class="['tab','tab-bottom',class]" :style="style">
        <slot></slot>
    </div>
</template>

<script>
	export default {
		props:{
			style: {
				type: Object
			},
			'class': {
				type: String,
				default: ''
			}
		},
		data(){
			return {
				selectedIndex: 1
			}
		},
		//给tab-item添加索引属性
		ready(){
			this.tabItemCount = this.$children.length;

			this.$children.forEach((child, index) => {
				child.$el.setAttribute("data-index", ++ index);
				child.selected && (this.selectedIndex = index);
			});

			this.$children[this.selectedIndex - 1].selected = true;
		},
		events: {
			//选中事件
		    selected(index){
		      	this.selectedIndex = index;

		      	this.$children.forEach(child => {
					child.selected = false;
				});
				this.$children[this.selectedIndex - 1].selected = true;
		    }
	  	},
	}
</script>
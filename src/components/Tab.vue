<template>
    <div :class="['tab','flexbox', bordered?'tab-bordered':'']">
		<slot></slot>
		<div class="tab-bar" :style="{left: barLeft, width: barWidth}"></div>
	</div>
</template>

<script>
	export default {
		props: {
			bordered: {
				type: Boolean,
				default: false
			}
		},
		data(){
			return {
				selectedIndex: 1,
				tabItemCount: 0
			}
		},
		//给tab-item添加索引属性
		ready(){
			this.tabItemCount = this.$children.length;
			this.barWidth = `${100/this.tabItemCount}%`;

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
	  	computed: {
	  		barLeft(){
	  			return `${(this.selectedIndex - 1) * (100 / this.tabItemCount)}%`;
	  		}
	  	}
	}
</script>
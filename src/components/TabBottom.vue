<template>
    <div :class="class" :style="style">
        <slot></slot>
    </div>
</template>

<script>
	export default {
		props:{
			style: {
				type: Object
			},
			class: {
				type: Array,
				default: '',
				coerce(val){
					let result = ['tab','tab-bottom', 'flexbox', 'flex-align-center'];
					val &&  (result = result.concat(val.split(' ')));
					return result;
				}
			},
			cascade: {
				type: Boolean,
				default: false
			},
			split: {
				type: Boolean,
				default: false
			}
		},
		ready(){
			//给tab-item添加索引属性
			this.tabItemCount = this.$children.length;

			this.$children.forEach((child, index) => {
				child.$el.setAttribute("data-index", ++ index);
				child.selected && (this.selectedIndex = index);
			});

			this.selectedIndex && (this.$children[this.selectedIndex - 1].selected = true);
			//层叠
			this.cascade && (this.class = [...this.class, 'tab-cascade']);
			//分隔
			this.split && (this.class = [...this.class, 'tab-split']);
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
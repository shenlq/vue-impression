<template>
	<div class="liftloading" v-show="display">
    	<div class="liftloading-heading">
    		<slot name="desc"></slot>
    	</div>
    	<div class="liftloading-image">
			<slot></slot>
    	</div>
    	<div class="liftloading-footer">
    		{{ touchGuide[guideIndex] }}
    	</div>
	</div>
</template>

<script type="text/babel">
	import Checkbox from './Checkbox';

	export default  {
		components: {
			Checkbox
		},
		props: {
			touchGuide: {
				type: Array,
				default(){
					return ['↓ 下拉加载', '↑ 释放加载', '正在加载...'];
				}
			},
			refresh: {
				type: Function
			}
		},
		data(){
			return {
				guideIndex: 0,
				display: false
			};
		},
		events: {
			['LiftLoading:stage'](index){
				this.guideIndex = index;
				let that = this;
				this.guideIndex == 2 && (new Promise(resolve => {
					console.log(that.$el);
					this.display = true;
				  	this.refresh && this.refresh(resolve);
				}).then(() => {
					this.display = false;
					this.$dispatch('LiftLoading:end');
				}));
				return true;
			}
		}
	}
</script>
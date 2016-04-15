<template>
	<div class="droploading">
    	<div class="droploading-heading">
    		<slot name="desc"></slot>
    	</div>
    	<div class="droploading-image">
			<slot></slot>
    	</div>
    	<div class="droploading-footer">
    		{{ touchGuide[guideIndex] }}
    	</div>
	</div>
</template>

<script>
	import Checkbox from './Checkbox';

	export default  {
		components: {
			Checkbox
		},
		props: {
			touchGuide: {
				type: Array,
				default(){
					return ['↓ 下拉刷新', '↑ 释放刷新', '正在刷新...'];
				}
			},
			refresh: {
				type: Function
			}
		},
		data(){
			return {
				guideIndex: 0
			};
		},
		events: {
			['DropLoading:stage'](index){
				this.guideIndex = index;
				this.guideIndex == 2 && (new Promise(resolve => {
				  	this.refresh && this.refresh(resolve);
				}).then(() => {
					this.$dispatch('DropLoading:end');
				}));
				return true;
			}
		}
	}
</script>
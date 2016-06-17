<template>
	<div class="liftloading">
        <stick>{{messages[stepIndex]}}</stick>
	</div>
</template>

<script>
	import Stick from './Stick';
	export default  {
		components: {
			Stick
		},
		props: {
			messages: {
				type: Array,
				default(){
					return ['↑ 加载更多', '↓ 释放加载', '正在加载中...', '没有更多数据了'];
				}
			},
			steps: {
				type: Array,
				default(){
					return [15, 30];
				}
			},
			refresh: {
				type: Function
			}
		},
		data(){
			return {
				stepIndex: 0,
				show: true
			};
		},
		methods: {
			resetStep(isNoMore){
				!isNoMore && (this.stepIndex = 0);
				isNoMore && (this.stepIndex = 3);
			}
		},
		events: {
			['LiftLoading:stage'](distance){
				let tmpIndex = 0;
				this.steps.forEach((step, index) => {
					distance >= step && (tmpIndex = index);
				});

				this.stepIndex = tmpIndex;
				return true;
			},
			['LiftLoading:refresh'](){
				if(this.stepIndex === 1 && this.refresh){
					this.stepIndex = 2;
					this.refresh(this.resetStep);
				}else{
					this.resetStep();
				}
			}
		}
	}
</script>
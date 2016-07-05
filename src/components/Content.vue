<template>
    <div class="content"  @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
        <slot></slot>
    </div>
</template>

<script>
	export default {
		props: {
			//是否支持下拉刷新
			touch: {
				type: Boolean,
				default: false
			},
			//下拉阶梯
			dropStage: {
				type: Array,
				default(){
					return [110, 172];
				}
			},
		},
		ready(){
			this.ceiling = false; //是否触顶
			this.floor = false;   //是否触底
		},
		methods: {
			// 开始touch
			touchstart(event){
				if(!this.touch){
					return false;
				}

				//起触点Y坐标
				this._touchStartY = event.touches[0].screenY;
			},
			// touch过程中
			touchmove(event){
				if(!this.touch){
					return false;
				}

				this._scrollTop = getScrollTop(this.$el);
				let touchY = event.touches[0].screenY;
				this._touchRange = touchY - this._touchStartY;
				// 下拉

				//上拉
				console.log(isTouchFloor(this.$el) , this._touchRange < 0);
				if(isTouchFloor(this.$el) && this._touchRange < 0){
					event.preventDefault();
					if(!this.floor){
						this._touchStartY = touchY;
						this._touchRange = 0;
						this.floor = true;
					}
					this.$el.style.top = this._touchRange;
					this.liftStageBroadcast(-this._touchRange);
				}else if (this.floor && this._touchRange >= 0){
					this.floor = false;
				}
			},
			touchend(event){
				if(!this.touch){
					return false;
				}
				// 下拉
				// if(this.ceiling){
				// 	this.$el.style.marginTop = 0;
				// 	// this.dropBroadcast(2);
				// 	this.ceiling = false;
				// }

				//上拉
				if(this.floor){
					this.$el.style.top = 0;
					this.floor = false;
					this.liftRefreshBroadcast();
				}
			},
			//通知dropLoading组件
			dropBroadcast(index){
				this.$broadcast("DropLoading:stage", index);
			},
			//通知dropLoading组件
			liftStageBroadcast(distance){
				this.$broadcast("LiftLoading:stage", distance);
			},
			//通知dropLoading组件
			liftRefreshBroadcast(){
				this.$broadcast("LiftLoading:refresh");
			},
		},
		events: {
			['DropLoading:end'](){
				this.dropBroadcast(0);
				if(this.$el){
					this.$el.style.overflow = 'scroll';
					this.$el.style.marginTop = 0;
				}
			},
		}
	};
	//滚动条位置
	let getScrollTop = element => {
		if (element === window) {
			return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
		}

		return element.scrollTop;
	};
	//是否上拉到底部
	let isTouchFloor = element => {
		return element.scrollHeight - (element.offsetHeight + element.scrollTop) < 5;
	};
</script>
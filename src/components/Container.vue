<template>
    <div :class="['container', bottom?'container-sm':'']"  @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
        <slot></slot>
    </div>
</template>

<script>
	export default {
		props: {
			//是否包含底部栏
			bottom: {
				type: Boolean,
				default: false
			},
			//是否支持下拉刷新
			touch: {
				type: Boolean,
				default: false
			},
			//下拉阶梯
			touchStage: {
				type: Array,
				default(){
					return [110, 172];
				}
			}
		},
		ready(){
			this.ceiling = false; //是否触顶
			this.floor = false;   //是否触底
		},
		methods: {
			touchstart(event){
				if(!this.touch){
					return false;
				}
				this._touchStartY = event.touches[0].screenY;
			},
			touchmove(event){
				if(!this.touch){
					return false;
				}
				this._scrollTop = getScrollTop(this.$el);
				let touchY = event.touches[0].screenY;
				this._touchRange = touchY - this._touchStartY;
				if(this._scrollTop == 0 && this._touchRange > 0){
					event.preventDefault();
					if(!this.ceiling){
						this._touchStartY = touchY;
						this._touchRange = 0;
						this.ceiling = true;
					}
					this.$el.style.overflow = 'visible';
					this._touchRange >= this.touchStage[0] && (this.dropBroadcast(1));
					this._touchRange <= this.touchStage[1] && (this.$el.style.marginTop = this._touchRange);
				}else if (this.ceiling && this._touchRange <= 0){
					this.ceiling = false;
					this.$el.style.overflow = 'scroll';
				}
				if(isTouchFloor(this.$el) && this._touchRange < 0){
					event.preventDefault();
					if(!this.floor){
						this._touchStartY = touchY;
						this._touchRange = 0;
						this.floor = true;
					}
					-this._touchRange >= this.touchStage[0] && (this.liftBroadcast(1));
					(-this._touchRange <= this.touchStage[1]&&this._scrollTop!=0) && (this.$el.style.paddingBottom = -this._touchRange);
					(-this._touchRange <= this.touchStage[1]&&this._scrollTop==0) && (this.$el.style.marginTop = this._touchRange);
				}else if (this.floor && this._touchRange >= 0){
					this.floor = false;
				}
			},
			touchend(event){
				if(!this.touch){
					return false;
				}
				if(this.ceiling){
					this._touchRange > this.touchStage[0] && (this.$el.style.marginTop = this.touchStage[0]);
					if(this._touchRange < this.touchStage[0] && this._touchRange > 0){
						this.$el.style.overflow = 'scroll';
						this.$el.style.marginTop = 0;
						this.ceiling = false;
						return false;
					}
					this.dropBroadcast(2);
					this.ceiling = false;
				}
				if(this.floor){
					(-this._touchRange > this.touchStage[0]&&this._scrollTop!=0) && (this.$el.style.paddingBottom = this.touchStage[0]);
					(-this._touchRange > this.touchStage[0]&&this._scrollTop==0) && (this.$el.style.marginTop = -this.touchStage[0]);
					if(-this._touchRange < this.touchStage[0] && this._touchRange < 0){
						this._scrollTop!=0 && (this.$el.style.paddingBottom = 0);
						this._scrollTop==0 && (this.$el.style.marginTop = 0);
						this.floor = false;
						return false;
					}
					this.liftBroadcast(2);
					this.floor = false;
				}
			},
			//通知dropLoading组件
			dropBroadcast(index){
				this.$broadcast("DropLoading:stage", index);
			},
			//通知dropLoading组件
			liftBroadcast(index){
				this.$broadcast("LiftLoading:stage", index);
			}
		},
		events: {
			['DropLoading:end'](){
				this.dropBroadcast(0);
				if(this.$el){
					this.$el.style.overflow = 'scroll';
					this.$el.style.marginTop = 0;
				}

			},
			['LiftLoading:end'](){
				this.liftBroadcast(0);
				if(this.$el){
					this._scrollTop!=0 && (this.$el.style.paddingBottom = 0);
					this._scrollTop==0 && (this.$el.style.marginTop = 0);
				}

			}
		}
	};
	var getScrollTop = function (element) {
		if (element === window) {
			return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
		}

		return element.scrollTop;
	};
	var isTouchFloor = function (element){
		return element.offsetHeight + element.scrollTop == element.scrollHeight
	};
</script>
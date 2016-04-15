<template>
	<div>
	    <div :class="['container', bottom?'container-sm':'']" v-if="touch"  @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
	        <slot></slot>
	    </div>
	    <div :class="['container', bottom?'container-sm':'']"  v-else>
	        <slot></slot>
	    </div>
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
			this._touchTarget = this.$el.querySelectorAll(".container")[0];
		},
		methods: {
			touchstart(event){
				event.preventDefault();
				this._touchStartY = event.touches[0].screenY;
			},
			touchmove(event){
				event.preventDefault();
				this._touchTarget.style.overflow = 'visible';
				let touchY = event.touches[0].screenY;
				this._touchRange = touchY - this._touchStartY;
				this._touchRange >= this.touchStage[0] && (this.broadcast(1));
				this._touchRange <= this.touchStage[1] && (this._touchTarget.style.marginTop = this._touchRange);
			},
			touchend(event){
				event.preventDefault();
				this._touchRange > this.touchStage[0] && (this._touchTarget.style.marginTop = this.touchStage[0]);
				if(this._touchRange < this.touchStage[0]){
					this._touchTarget.style.overflow = 'scroll';
					this._touchTarget.style.marginTop = 0;
					return false;
				}
				this.broadcast(2);
			},
			//通知dropLoading组件
			broadcast(index){
				this.$broadcast("DropLoading:stage", index);
			}
		},
		events: {
			['DropLoading:end'](){
				this.broadcast(0);
				if(this._touchTarget){
					this._touchTarget.style.overflow = 'scroll';
					this._touchTarget.style.marginTop = 0;
				}

			}
		}
	};
</script>
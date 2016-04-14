<template>
    <div :class="['container', bottom?'container-sm':'']"  @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
        <slot></slot>
	    <div class="droploading">
	    	<div class="droploading-heading">
	    		<checkbox checked circle outline>
					全场包邮
				</checkbox>
				<checkbox checked circle outline>
					达达品质
				</checkbox>
				<checkbox checked circle outline>
					7天包退
				</checkbox>
	    	</div>
	    	<div class="droploading-image">
				<img src="../images/loading.gif">
	    	</div>
	    	<div class="droploading-footer">
	    		{{ TOUCH_GUIDE[guide] }}
	    	</div>
		</div>
    </div>
</template>

<script>
	import Checkbox from './Checkbox';

	export default {
		components: {
			Checkbox
		},
		props: {
			bottom: {
				type: Boolean,
				default: false
			}
		},
		data(){
			return {
				guide: 0,
				TOUCH_GUIDE: ['↓ 下拉刷新', '↑ 释放刷新', '正在刷新...']
			};
		},
		methods: {
			touchstart(event){
				this._touchStartY = event.touches[0].screenY;
			},
			touchmove(event){
				this.$el.style.overflow = 'visible';
				let touchY = event.touches[0].screenY;
				this._touchRange = touchY - this._touchStartY;
				this._touchRange >= 110 && (this.guide = 1);
				this._touchRange <= 172 && (this.$el.style.marginTop = this._touchRange);
			},
			touchend(event){
				this._touchRange > 110 && (this.$el.style.marginTop = 110);
				if(this._touchRange < 110){
					this.$el.style.overflow = 'scroll';
					this.$el.style.marginTop = 0;
					return false;
				}
				this.guide = 2;
				setTimeout(() => {
					this.$el.style.overflow = 'scroll';
					this.$el.style.marginTop = 0;
					this.guide = 0;
				}, 1500);
			}
		}
	};
</script>
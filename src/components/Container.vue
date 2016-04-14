<template>
    <div :class="['container', bottom?'container-sm':'']"  @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
        <slot></slot>
	    <div class="droploading">
	    	<p>
				<img src="../images/loading.gif">
	    	</p>
			<p>↓ 下拉刷新</p>
		</div>
    </div>
</template>

<script>
	export default {
		props: {
			bottom: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			touchstart(event){
				this._touchStartY = event.touches[0].screenY;
				console.log(this);
			},
			touchmove(event){
				this.$el.style.overflow = 'visible';
				let touchY = event.touches[0].screenY;
				let marginTop = touchY - this._touchStartY;
				marginTop <= 100 && (this.$el.style.marginTop =marginTop);
			},
			touchend(event){
				setTimeout(() => {
					this.$el.style.overflow = 'scroll';
					this.$el.style.marginTop = 0;
				}, 2000);
			}
		}
	};
</script>
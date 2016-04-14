<template>
    <div :class="['container', bottom?'container-sm':'']"  @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
        <slot></slot>
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
				let touchY = event.touches[0].screenY;
				let marginTop = touchY - this._touchStartY;
				marginTop <= 120 && (this.$el.style.marginTop =marginTop);
			},
			touchend(event){
				this.$el.style.marginTop = 0;
			}
		}
	};
</script>
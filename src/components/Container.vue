<template>
    <div :class="['container', bottom?'container-sm':'']"  @touchstart.self="touchstart" @touchmove.self="touchmove" @touchend.self="touchend">
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
			},
			touchmove(event){
				let touchY = event.touches[0].screenY;
				let marginTop = touchY - this._touchStartY;
				marginTop <= 38 && (event.target.style.marginTop =marginTop);
			},
			touchend(event){
				event.target.style.marginTop = 0;
			}
		}
	};
</script>
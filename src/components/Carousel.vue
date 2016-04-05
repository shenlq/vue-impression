<template>
	<div class="carousel">
		<div :class="['carousel-item',
			index==activeIndex?'active':'',
			(index - activeIndex + images.length)%images.length == 1?'next':'',
			(index - activeIndex + images.length)%images.length == 2?'prev':'',
			action=='next' && index==activeIndex?'left':'',
			action=='prev' && index==activeIndex?'right':'',
			action=='next' && (index - activeIndex + images.length)%images.length == 1?'left':'',
			action=='prev' && (index - activeIndex + images.length)%images.length == 2?'right':''
			]" v-for="(index, item) in images">
			<img class='carousel-img' :src="item"/>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			interval: {
				type: Number,
				default: 3000
			},
			images: {
				type: Array
			},
			debounce: {
				default: 600
			}
		},
		data(){
			return {
				activeIndex: 0,
				action: 'none'
			};
		},
		created(){
			this.intervalCarousel = setInterval(() => {
				this.prev();
			}, this.interval);
		},
		destroyed(){
			clearInterval(this.intervalCarousel);
		},
		methods: {
			//下一个
			next(){
				this.action = 'next';
				setTimeout(() => {
					this.activeIndex = (this.activeIndex + 1) % this.images.length;
					this.action = 'none';
				}, this.debounce);
			},
			//前一个
			prev(){
				this.action = 'prev';
				setTimeout(() => {
					this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
					this.action = 'none';
				}, this.debounce);
			}
		}
	};
</script>
<template>
	<div class="carousel">
		<ol class="carousel-indicators" v-if="images.length > 1">
			<li :class="{'active': index == activeIndex}" v-for="(index, item) in images"></li>
		</ol>
		<div @touchstart="touchstart" @touchend="touchend"
			:class="['carousel-item',
			index==activeIndex?'active':'',
			(index - activeIndex + images.length)%images.length == 1?'next':'',
			(index - activeIndex + images.length)%images.length == 2?'prev':'',
			action=='next' && index==activeIndex?'left':'',
			action=='prev' && index==activeIndex?'right':'',
			action=='next' && (index - activeIndex + images.length)%images.length == 1?'left':'',
			action=='prev' && (index - activeIndex + images.length)%images.length == 2?'right':''
			]" v-for="(index, item) in images">
			<a v-if="item.href" :href="item.href" target="_blank">
				<img class='carousel-img' :src="item.src"/>
			</a>
			<img v-else class='carousel-img' :src="item.src"/>
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
				type: Array,
				coerce(val){
					return val.map((item, index) => {
						if("[object Object]" == Object.prototype.toString.call(item)){
							return item;
						}else{
							return {src: item};
						};
					});
				}
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
			this.addInterval();
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
			},
			addInterval(){
				this.images.length > 1 && (this.intervalCarousel = setInterval(() => {
					this.next();
				}, this.interval));
			},
			touchstart(e){
				this._touchStartX = e.targetTouches[0].pageX;
				this.intervalCarousel && clearInterval(this.intervalCarousel);
			},
			touchend(e){
				let touchStartX = e.changedTouches[0].pageX;
				if(touchStartX > this._touchStartX){
					this.prev();
				}else{
					this.next();
				}
				this.addInterval();
			}
		}
	};
</script>
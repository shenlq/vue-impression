<template>
	<div class="image-laze">
		<image>
		<div class="image-laze-bg"></div>
	</div>
</template>


<script>
	export default {
		props: {
			src: {
				type: String
			}
		},
		data(){
			return {
				isRender: false,
				listenView: undefined
			}
		},
		ready(){
			this.initView();
			this.render();
			this.addListener();
			this.removeListener();
		},
		methods: {
			//设置侦听容器
			initView(){
				let containers = document.body.querySelectorAll('.content');
				this.listenView = containers.length ? containers[0]: document.body;
			},
			//判断元素是否隐藏（隐藏就不显示）
			isHidden(){
    			return this.$el.offsetParent === null;
			},
			//判断元素是否在屏幕可视区域
			inView(){
				let view = {
			      	bottom: this.listenView.clientHeight + this.listenView.scrollTop
			    };
				if (this.isHidden()) {
			      	return false;
			    }
    			return (view.bottom >= this.$el.getBoundingClientRect().top);
			},
			//渲染
			render(){
				let that = this;
				if(!this.inView()){
					return false;
				}
				let imgs = this.$el.querySelectorAll("img");
				imgs[0].src = this.src;
				this.isRender = true;
			},
			//添加侦听
			addListener(){
				if(!this.isRender){
					this.listenView.addEventListener('scroll', this.render, false);
				}
			},
			//移除侦听
			removeListener(){
				this.$watch('isRender', (isRender) => {
					isRender && this.listenView.removeEventListener('scroll', this.render);
				});
			}
		}
	};
</script>
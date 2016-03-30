<template>
	<div class="image-laze">
		<image>
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
				isRender: false
			}
		},
		ready(){
			this.render();
			//添加侦听
			document.addEventListener('scroll', () => {
				if(this.isRender){
					// this.render();

				}else{
					this.render();
				}
			}, false);
		},
		methods: {
			//判断元素是否隐藏（隐藏就不显示）
			isHidden(){
    			return this.$el.offsetParent === null;
			},
			//判断元素是否在屏幕可视区域
			inView(){
				let view = {
			      l: 0,
			      t: 0,
			      b: (document.body.clientHeight + document.body.scrollTop),
			      r: (window.scrollX || document.body.scrollWidth)
			    };
				if (this.isHidden()) {
			      	return false;
			    }
			    console.log(document.body.scrollHeight ,document.body.clientHeight , document.body.scrollTop);
    			return (view.b >= this.$el.offsetTop);
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
			}
		}
	};
</script>
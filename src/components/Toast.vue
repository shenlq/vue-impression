<template>
	<div :class="['toast',class, hiddenClass]">
		<div class="toast-body">
			<i :class="['fa','fa-2x','toast-addon',addonClass]"></i>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
      			twoWay: true
			},
	      	class: {
		        type: String
	      	},
	      	type: {
	      		type: String,
	      		default: "success"
	      	},
	      	duration: {
	      		type: Number,
	      		default: 1000
	      	}
	    },
	    computed: {
	    	addonClass(){
	    		switch(this.type){
	    			case "warning":
	    				return "fa-exclamation-triangle";
	    			case "error":
	    				return "fa-exclamation-circle"
	    			default:
	    				return "fa-check";
	    		}
	    	},
	    	hiddenClass(){
	    		return this.show ? '': 'hidden';
	    	}
	    },
	    watch: {
		    show() {
				if(this.show){
					setTimeout(() => {
						this.show = false;
					}, this.duration);
				}
		  	}
		}
	}
</script>
<template>
    <div :class="['tab-item', selected?'active':'']" @click="clickHandle">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: {
	      	selected: {
		        type: Boolean
	      	}
	    },
		methods: {
			clickHandle(){
				if(this.selected){
					return false;
				}

        		this.$dispatch('selected', this.$el.getAttribute('data-index'))
			}
		}
	}
</script>
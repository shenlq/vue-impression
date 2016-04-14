<template>
    <div :class="['tab-item', 'flex-item', selected?'active':'']" @click="clickHandle">
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
        		!this.selected && this.$dispatch('selected', this.$el.getAttribute('data-index'));
			}
		}
	}
</script>
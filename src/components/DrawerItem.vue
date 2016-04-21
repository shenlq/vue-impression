<template>
	<div :class="['drawer-item', 'flex-item', selected?'active':'']" @click="clickHandle">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: {
	      	selected: {
		        type: Boolean
	      	},
		    eventKey: {},
	    },
		methods: {
			clickHandle(){
				let index = this.$el.getAttribute('data-index');
				this.selected && (index = -1);
        		this.$dispatch('selected', index, this.eventKey, !this.selected);
			}
		}
	}
</script>
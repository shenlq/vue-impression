<template>
	<div class="group">
		<div class="group-item">
	  	    <div class="groupt-item-heading" v-if="_slotContents.default">
	            <slot></slot>
	       	</div>
	      	<div class="group-item-body">
				<input class="input" :type="type"/>
	      	</div>
	  	</div>
	</div>
</template>

<script>
	export default {
		props: {
            type: {
                type: String
            }
        },
		data(){
			return {
				type: this.type || 'text'
			}
		},
		created(){
			console.log(this);
		}
	};
</script>
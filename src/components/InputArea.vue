<template>
	<div class="textarea">
		<textarea rows="3" v-model="value"></textarea>
		<div class="textarea-counter" v-if="isCount">
			{{count}}/{{max}}
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			value: {
		      	type: String,
		      	default: '',
		      	twoWay: true
		    },
            isCount: {
                type: Boolean
            },
            max: {
            	type: Number
            }
        },
        computed: {
		    count: function () {
		    	(this.value.length > this.max) && (this.value = this.value.slice(0, this.max));
		      	return this.value.length;
		    }
		},
		created(){
			this.max = this.max || 200;
		}
	};
</script>
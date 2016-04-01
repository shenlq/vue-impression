<template>
	<div class="textarea">
		<textarea rows="3" v-model="value" :placeholder="placeholder" :disabled="disabled"></textarea>
		<div class="textarea-counter" v-if="isCounter">
			{{count}}/{{max}}
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			placeholder: {
				type: String
			},
			value: {
		      	type: String,
		      	default: '',
		      	twoWay: true
		    },
            isCounter: {
                type: Boolean
            },
            max: {
            	type: Number
            },
            disabled: {
            	type: Boolean,
            	default: false
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
<template>
	<div class="group">
		<div class="group-item">
	  	    <div class="groupt-item-heading" v-if="_slotContents.default">
	            <slot></slot>
	       	</div>
	      	<div class="group-item-body">
				<input class="input" :type="dtype" v-model="dValue"/>
	      	</div>
	      	<div class="group-item-footer">
	      		<a href="javascript:void(0);" class="text-muted" @click="clearHandle" v-if="clear">
	      			<i class="fa fa-times"></i>
	      		</a>
	      		<i class="fa fa-exclamation-triangle text-warning" v-if="isWarning"></i>
	      		<i class="fa fa-exclamation-circle text-danger" v-if="isError"></i>
	      		<i class="fa fa-check text-success" v-if="isSuccess"></i>
	      	</div>
	  	</div>
	</div>
</template>

<script>
	export default {
		props: {
            dtype: {
                type: String
            },
            clear: {
            	type: Boolean
            },
            dValue: {
            	type: String
            },
            isSuccess: {
            	type: Boolean
            },
            isWarning: {
            	type: Boolean
            },
            isError: {
            	type: Boolean
            }
        },
		data(){
			return {
				type: this.type || 'text'
			}
		},
		methods: {
			//清空
			clearHandle(){
				this.dValue = "";
				this.isSuccess = this.isWarning = this.isError = false;
			}
		},
		created(){
			console.log(this.isSuccess, this.isWarning, this.isError);
		}
	};
</script>
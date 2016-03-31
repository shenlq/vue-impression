<template>
	<div class="input-item">
  	    <div class="group-item-heading" v-if="_slotContents.default">
            <slot></slot>
       	</div>
      	<div class="group-item-body">
			<input class="input" :type="type" v-model="value" :placeholder="placeholder"/>
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
</template>

<script>
  export default {
    props: {
            placeholder: {
                type: String
            },
            type: {
                type: String,
                default: 'text'
            },
            clear: {
                type: Boolean
            },
            value: {
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
    methods: {
        //清空
        clearHandle(){
            this.value = "";
            this.isSuccess = this.isWarning = this.isError = false;
        }
    }
  };
</script>
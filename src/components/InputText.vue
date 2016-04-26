<template>
	<div class="input-item flexbox">
  	    <div class="group-item-heading" v-if="_slotContents.default">
            <slot></slot>
       	</div>
      	<div class="group-item-body">
			<input class="input" v-if="onChange" @change="onChange($event, defaultValue)" :type="type" :disabled="disabled" v-model="defaultValue" :placeholder="placeholder"/>
            <input class="input" :type="type" :disabled="disabled" v-model="defaultValue" :placeholder="placeholder" v-else/>
      	</div>
      	<div class="group-item-footer">
    		<a href="javascript:void(0);" class="text-muted" @click="clear" v-show="showClearBtn">
    			<i class="fa fa-times"></i>
    		</a>
    		<i class="fa fa-exclamation-triangle text-warning" v-if="state == 'warning'"></i>
    		<i class="fa fa-exclamation-circle text-danger" v-if="state == 'error'"></i>
    		<i class="fa fa-check text-success" v-if="state == 'success'"></i>
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
        clearable: {
            type: Boolean
        },
        defaultValue: {
            default: ''
        },
        state: {
            type: String,
            default: 'default'
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        onChange: {
            type: Function
        }
    },
    computed: {
        //是否显示清除按钮
        showClearBtn(){
            return this.clearable && this.defaultValue !== '';
        }
    },
    methods: {
        //取值
        getValue(){
            return this.defaultValue;
        },
        //设值
        setValue(value){
            this.defaultValue = value;
        },
        //清空
        clear(){
            this.defaultValue = '';
            this.state = 'default';
        }
    }
  };
</script>
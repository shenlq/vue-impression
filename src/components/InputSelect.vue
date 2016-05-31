<template>
	  <div class="input-item flexbox">
  	    <div class="group-item-header" v-if="_slotContents.default">
            <slot></slot>
       	</div>
      	<div class="group-item-body">
			<input class="input" :type="type" disabled :value="defaultValue.name" :placeholder="placeholder" readonly/>
      	</div>
      	<div class="group-item-footer">
            <span class="arrow arrow-right text-muted"></span>
      	</div>
  	</div>
</template>

<script>
    export default {
        props: {
            placeholder: {
                type: String
            },
            defaultValue: {
                default(){
                    return {};
                },
                coerce(val){
                    if("[object Object]" == Object.prototype.toString.call(val)){
                        return val;
                    }else{
                        return {
                            name: val,
                            value: val
                        }
                    };
                }
            },
        },
        methods: {
            //取值
            getValue(){
                return this.defaultValue.value;
            },
            //设值
            setValue(value){
                if("[object Object]" != Object.prototype.toString.call(value)){
                    value = {
                        name: value,
                        value: value
                    }
                };
                this.defaultValue = value;
            }
        }
    };
</script>
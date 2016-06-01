<template>
	<div class="input-item flexbox">
  	    <div class="group-item-header" v-if="_slotContents.default">
            <slot></slot>
       	</div>
      	<div class="group-item-body">
			<input class="input" @keyup="keyupHandle" @keypress="keypressHandle" @change="changeHandle" :type="type" :disabled="disabled" v-model="defaultValue" :placeholder="placeholder"/>
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
    import * as CodeUtils from '../utils/KeyCode';

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
            //change侦听
            changeHandle(event){
                this.onChange && this.onChange(event);
            },
            //keyup侦听
            keyupHandle(event){
                let code = event.keyCode,
                    target = event.target,
                    value = event.target.value.trim(),
                    currentInput = value[value.length - 1];

                switch(this.type){
                case 'phone':
                    //箭头
                    if(CodeUtils.ARROW.hasOwnProperty(code)){
                        return false;
                    }
                    //超过最大长度
                    if(value.length >= 13){
                        return false;
                    }

                    if(!CodeUtils.NUMBER.hasOwnProperty(code) && !CodeUtils.ARROW.hasOwnProperty(code)){
                        return false;
                    }
                    //非1开头
                    if(value.length === 0 && CodeUtils.NUMBER[code] !== 1){
                        return false;
                    }

                    value = target.value = `${value}${CodeUtils.NUMBER[code]}`;

                    //自动分隔
                    if(value.length === 3 || value.length === 8){
                        target.value = `${value}-`;
                    }
                    break;
                }
            },
            //按键按下处理
            keypressHandle(event){
                switch(this.type){
                case 'phone':
                    event.preventDefault();
                    break;
                }
            },
            //清空
            clear(){
                this.defaultValue = '';
                this.state = 'default';
            }
        }
    };
</script>
<template>
    <div :class="class" v-if="!vLink" @click="click">
        <span class="group-item-heading" v-if="_slotContents.heading">
            <slot name="heading"></slot>
        </span>
        <span class="group-item-body">
            <slot></slot>
        </span>
        <span class="group-item-footer">
            <slot name="footer"></slot>
        </span>
        <template v-else>
        </template>
        <span class="group-item-arrow" v-if="_events.click"></span>
    </div>

    <a :class="class" v-if="vLink" v-link="vLink">
        <span class="group-item-heading" v-if="_slotContents.heading">
            <slot name="heading"></slot>
        </span>
        <span class="group-item-body">
            <slot></slot>
        </span>
        <span class="group-item-footer">
            <slot name="footer"></slot>
        </span>
        <span class="group-item-arrow"></span>
    </a>
</template>

<script>
    export default {
        props: {
            vLink: Object,
            class: {
                type: Array,
                default: '',
                coerce(val){
                    let result = ['group-item'];
                    val &&  (result = result.concat(val.split(' ')));
                    return result;
                }
            }
        },
        methods: {
            click(){
                if(!this._events || !this._events.click || this._events.click.length < 1){
                    return false;
                }
                this._events.click.forEach((fn, index) => {
                    fn();
                });
            }
        },
    }
</script>
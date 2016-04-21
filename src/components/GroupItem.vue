<template>
    <a :class="class" :href="href" @click="vLinkClickHandle">
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
        <span class="group-item-arrow" v-if="href || vLink || _events.click"></span>
    </a>
</template>

<script>
    export default {
        props: {
            href: {
                type: String
            },
            vLink: {
                type: Object
            },
            class: {
                type: Array,
                default: '',
                coerce(val){
                    let result = ['group-item', 'flexbox', 'flex-align-center'];
                    val &&  (result = result.concat(val.split(' ')));
                    return result;
                }
            },
        },
        methods: {
            //v-link点击事件
            vLinkClickHandle(){
                this.vLink && this.$route.router.go(this.vLink);
            }
        }
    }
</script>
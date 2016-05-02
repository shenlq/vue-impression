<template>
    <a :class="className" :href="href" @click="vLinkClickHandle">
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
        <span class="arrow arrow-right text-muted" v-if="(href || vLink || _events.click) && !unclickable"></span>
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
                type: String,
            },
            pure: {
                type: Boolean,
                default: false
            },
            unclickable: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            className(){
                let result = ['group-item', 'flexbox', 'flex-align-center'];
                //自定义class
                this.class && (result = result.concat(val.split(' ')));
                //不带样式
                this.pure && result.push('group-item-pure');
                return result;
            }
        },
        methods: {
            //v-link点击事件
            vLinkClickHandle(){
                this.vLink && this.$route.router.go(this.vLink);
            }
        }
    }
</script>
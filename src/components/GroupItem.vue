<template>
  	<div class="group-item" v-if="!vLink" @click="!!click && click($event)">
  	    <span class="groupt-item-heading" v-if="_slotContents.heading">
            <slot name="heading"></slot>
       	</span>
      	<span class="group-item-body">
            <slot name="body"></slot>
      	</span>
      	<span class="group-item-footer">
            <slot name="footer"></slot>
        </span>
        <span class="groupt-item-arrow" v-if="click"></span>
  	</div>

    <a class="group-item" v-if="vLink" v-link="vLink">
        <span class="groupt-item-heading" v-if="_slotContents.heading">
            <slot name="heading"></slot>
        </span>
        <span class="group-item-body">
            <slot name="body"></slot>
        </span>
        <span class="group-item-footer">
            <slot name="footer"></slot>
        </span>
        <span class="groupt-item-arrow"></span>
    </a>
</template>

<script>
    export default {
        props: {
            vLink: {
                coerce(val) {
                    return val ? JSON.parse(val): "";
              }
            },
            click: {
                type: Function
            }
        }
    }
</script>
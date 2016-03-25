<template>
  	<div class="group-item" v-if="!vLink">
  	    <div class="groupt-item-heading" v-if="_slotContents.heading">
            <slot name="heading"></slot>
       	</div>
      	<div class="group-item-body">
            <slot name="body"></slot>
      	</div>
      	<div class="group-item-footer">
            <slot name="footer"></slot>
        </div>
  	</div>

    <a class="group-item" v-if="vLink" v-link="vLink" :href="vLink">
        <div class="groupt-item-heading" v-if="_slotContents.heading">
            <slot name="heading"></slot>
        </div>
        <div class="group-item-body">
            <slot name="body"></slot>
        </div>
        <div class="group-item-footer">
            <slot name="footer"></slot>
        </div>
        <div class="groupt-item-arrow"></div>
    </a>
</template>

<script>
    export default {
        props: {
            vLink: {
                type: String
            }
        }
    }
</script>
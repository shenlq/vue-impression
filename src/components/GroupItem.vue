<template>
  	<div class="group-item" v-if="!link">
  	    <div class="groupt-item-icon" v-if="_slotContents.icon">
            <slot name="icon"></slot>
       	</div>
      	<div class="group-item-body">
            <slot name="body"></slot>
      	</div>
      	<div class="group-item-desc">
            <slot name="desc"></slot>
        </div>
  	</div>

    <a class="group-item" v-if="link" v-link="link">
        <div class="groupt-item-icon" v-if="_slotContents.icon">
            <slot name="icon"></slot>
        </div>
        <div class="group-item-body">
            <slot name="body"></slot>
        </div>
        <div class="group-item-desc">
            <slot name="desc"></slot>
        </div>
        <div class="groupt-item-arrow"></div>
    </a>
</template>

<script>
  export default {

    props: {
      link: {
        type: String
      }
    }
  }
</script>
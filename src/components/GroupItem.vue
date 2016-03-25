<template>
  	<div class="group-item" v-if="!vLink">
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

    <a class="group-item" v-if="vLink" v-link="vLink" :href="vLink">
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
      vLink: {
        type: String
      }
    },
    created(){
      console.log(this);
    }
  }
</script>
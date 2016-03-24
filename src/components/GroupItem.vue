<template>
	<div class="group-item" v-if="!link">
    <slot name="icon"></slot>

  	<div class="group-item" :class="{'weui_cell_primary':primary==='title'}">
    	<p>
        {{title}}
        <slot name="after-title"></slot>
      </p>
    	<inline-desc>{{inlineDesc}}</inline-desc>
  	</div>

  	<div class="weui_cell_ft" :class="{'weui_cell_primary':primary==='content'}">
      {{{value}}}
      <slot name="value"></slot>
    </div>
	</div>

	<a class="weui_cell" :href="link" v-if="link" v-link="link">
    <div class="weui_cell_hd">
      <slot name="icon"></slot>
    </div>
    <div class="weui_cell_bd" :class="{'weui_cell_primary':primary==='title'}">
      <p>{{title}}</p>
      <inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
    </div>
    <div class="weui_cell_ft with_arrow" :class="{'weui_cell_primary':primary==='content'}">
      {{{value}}}
      <slot name="value"></slot>
    </div>
  </a>
</template>

<script>

export default {
  props: {
    title: {
      type: String
    },
    value: {
      type: String
    },
    link: {
      type: String
    },
    inlineDesc: {
      type: String
    },
    primary: {
      type: String,
      default: 'title'
    }
  }
}
</script>

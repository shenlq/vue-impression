<template>
	<div class="group-title flexbox">
        <slot name="header"></slot>
        <span class="flex-item">
		    <slot></slot>
        </span>
        <slot name="footer"></slot>
	</div>
</template>
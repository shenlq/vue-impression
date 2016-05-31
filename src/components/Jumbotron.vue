<template>
    <div class="jumbotron">
        <div class="jumbotron-body">
            <slot></slot>
        </div>
        <div class="jumbotron-footer" v-if="_slotContents.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
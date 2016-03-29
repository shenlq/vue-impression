<template>
	<a class="dropdown-menu-item" v-link="vLink" @click="selected">
		<slot></slot>
	</a>
</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			},
            vLink: {
                coerce(val) {
                    return val ? JSON.parse(val): "";
              	}
            },
            click: {
                type: Function
            }
		},
		methods: {
			selected(){
				this.$dispatch('selected');
				this.click && this.click();
			}
		}
	}
</script>
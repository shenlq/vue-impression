<template>
    <div :class="class">
        <slot></slot>
    </div>
</template>

<script>
	export default {
		props: {
			class: {
				type: Array,
				default: '',
				coerce(val){
					let result = ['group'];
					val &&  (result = result.concat(val.split(' ')));
					return result;
				}
			}
		}
	}
</script>
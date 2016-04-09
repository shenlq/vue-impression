<template>
	<a :class="class" v-link="vLink">
		<image-lazy :src="src" v-if="lazy"></image-lazy>
		<img :src="src" v-else>
		<div class="caption">
			<slot></slot>
		</div>
	</a>
</template>

<script>
	import ImageLazy from './ImageLazy';

	export default {
		components: {
			ImageLazy
		},
		props: {
			src: {
				type: String,
				required: true
			},
			lazy: {
				type: Boolean,
				default: false
			},
			class: {
				type: Array,
				default: '',
				coerce(val){
					let result = ['thumbnail'];
					val &&  (result = result.concat(val.split(' ')));
					return result;
				}
			},
			vLink: {

			}
		}
	}
</script>
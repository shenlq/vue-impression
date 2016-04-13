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
					let result = ['flexbox'];
					val &&  (result = result.concat(val.split(' ')));
					return result;
				}
			},
			justify: {
				type: String,
				default: ''
			},
			wrap: {
				type: String,
				default: ''
			}
		},
		created(){
			//对齐
			switch(this.justify){
				case 'between':
					this.class.push('flex-justify-between');
					break;
				case 'center':
					this.class.push('flex-justify-center');
					break;
			}
			//换行
			switch(this.wrap){
				case 'wrap':
					this.class.push('flex-wrap');
					break;
			}
		}
	}
</script>
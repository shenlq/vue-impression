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
			align: {
				type: String,
				default: 'center'
			},
			wrap: {
				type: String,
				default: ''
			}
		},
		created(){
			//水平对齐
			switch(this.justify){
				case 'between':
					this.class.push('flex-justify-between');
					break;
				case 'center':
					this.class.push('flex-justify-center');
					break;
			}

			//垂直对齐
			switch(this.align){
				case 'center':
					this.class.push('flex-align-center');
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
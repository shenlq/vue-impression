<template>
	<div :class="['inline-selector', `inline-selector-${style}`]">
		<text-label @click="itemSelectedHandle(index)" class="inline-selector-label" v-for="(index, item) in items" :type="selectedIndexs.indexOf(index) !=-1?style:'default'" outline>
			{{item.name}}
		</text-label>
	</div>
</template>

<script>
	import TextLabel from './TextLabel';

	export default {
		components:{
			TextLabel
		},
		props: {
			options: {
				type: Array,
				required: true
			},
			multiple: {
				type: Boolean,
				default: false
			},
			value: {
				twoWay: true
			},
			style: {
				type: String,
				default: 'primary'
			},
			onSelect: {
				type: Function
			}
		},
		data(){
			return {
				selectedIndexs: [],
			};
		},
		computed: {
			items(){
				return this.options.map(item => {
					let newItem = {};
					if(typeof item == 'string'){
						newItem['name'] = item;
						newItem['value'] = item;
					}else if(typeof item == 'object'){
						Object.assign(newItem, item);
						if(newItem['name'] == undefined){
							newItem['name'] = newItem['value'];
						}
						if(newItem['value'] == undefined){
							newItem['value'] = newItem['name'];
						}
					}
					return newItem;
				});
			}
		},
		watch:{
			items(){
				//初始化已选中
				if(this.value){
					if(typeof this.value == 'string'){
						this.items.forEach((item, index) => {
							if(this.value == item.value){
								this.selectedIndexs.push(index);
							}
						});
					}else{
						this.items.forEach((item, index) => {
							this.value.indexOf(item.value) != -1 && this.selectedIndexs.push(index);
						});
					}
				}
			}
		},
		methods: {
			//选中
			itemSelectedHandle(index){
				//多选
				if(this.multiple){
					//去掉选中
					if(this.selectedIndexs.indexOf(index) != -1){
						this.selectedIndexs = this.selectedIndexs.filter(item => item != index);
					}else{
						this.selectedIndexs.push(index);
					}
					this.value = this.items.filter((item, _index) => this.selectedIndexs.indexOf(_index) != -1);
					this.onSelect && this.onSelect(this.value, this.selectedIndexs);
				}else{
					this.selectedIndexs = [index];
					this.value = {...this.items[index]};
					this.onSelect && this.onSelect(this.value, index);
				}
			}
		}
	}
</script>
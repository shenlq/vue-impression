<template>
	<div class="radio-list">
		<div @click="selected(index)" :class="['radio-list-item','clearfix',selectedIndexs.includes(index)?'active':'']" v-for="(index, item) in items">
			<div class="radio-list-item-body">{{item.name}}</div>
			<div class="radio-list-item-addon"></div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			options: {
				type: Array,
				required: true
			},
			value: {
				type: String
			},
			multiple: {
				type: Boolean,
				default: false
			},
			value: {
				type: Object,
				twoWay: true
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
		methods: {
			//选择
			selected(index){
				//多选
				if(this.multiple){
					//去掉选中
					if(this.selectedIndexs.includes(index)){
						this.selectedIndexs = this.selectedIndexs.filter(item => item != index);
					}else{
						this.selectedIndexs.push(index);
					}
					this.value = this.items.filter((item, _index) => this.selectedIndexs.includes(_index));
				}else{
					this.selectedIndexs = [index];
					this.value = {...this.items[index]};
				}
			}
		}
	}
</script>
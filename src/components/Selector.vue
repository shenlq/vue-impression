<template>
	<div class="selector">
		<div @click="selected(index)" :class="['selector-item','clearfix',selectedIndexs.indexOf(index)!=-1?'active':'']" v-for="(index, item) in items">
			<div class="selector-item-body">{{item.name}}</div>
			<div class="selector-item-addon"></div>
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
			multiple: {
				type: Boolean,
				default: false
			},
			value: {
				twoWay: true
			},
			dispatch: {
				type: String
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
		watch: {
			items(){
				// 初始化已选中
				if(this.value){
					if(typeof this.value == 'string'){
						this.items.forEach((item, index) => {
							this.value == item.value && this.selectedIndexs.push(index);
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
			selected(index){
				//多选
				if(this.multiple){
					//去掉选中
					if(this.selectedIndexs.indexOf(index) != -1){
						this.selectedIndexs = this.selectedIndexs.filter(item => item != index);
					}else{
						this.selectedIndexs.push(index);
					}
					this.value = this.items.filter((item, _index) => this.selectedIndexs.indexOf(_index) != -1);
				}else{
					this.selectedIndexs = [index];
					this.value = {...this.items[index]};
					//派发事件
        			this.dispatch && this.$dispatch(this.dispatch);
				}
			}
		}
	}
</script>
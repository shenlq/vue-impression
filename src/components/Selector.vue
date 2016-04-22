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
			defaultValue: {
			},
			dispatch: {
				type: String
			},
			onSelect: {
				type: Function
			},
			syncComponent: {

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
				if(this.defaultValue){
					if(typeof this.defaultValue == 'string'){
						this.items.forEach((item, index) => {
							this.defaultValue == item.value && this.selectedIndexs.push(index);
						});
					}else{
						Object.prototype.toString.call(this.defaultValue) === "[object Array]" &&
						this.items.forEach((item, index) => {
							this.defaultValue.indexOf(item.value) != -1 && this.selectedIndexs.push(index);
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
					this.defaultValue = this.items.filter((item, _index) => this.selectedIndexs.indexOf(_index) != -1);
					//回调
					this.onSelect && this.onSelect(this.defaultValue, this.selectedIndexs);
					//同步组件
					this.syncComponent && this.syncComponent.setValue(this.defaultValue);
				}else{
					this.selectedIndexs = [index];
					this.defaultValue = {...this.items[index]};
					//回调
					this.onSelect && this.onSelect(this.defaultValue, index);
					//派发事件
        			this.dispatch && this.$dispatch(this.dispatch);
        			//同步组件
					this.syncComponent && this.syncComponent.setValue(this.defaultValue);
				}
			}
		}
	}
</script>
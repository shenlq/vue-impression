<template>
	<div class="radio-list">
		<div @click="selected(index)" :class="['radio-list-item','clearfix',index==selectedIndex?'active':'']" v-for="(index, item) in items">
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
			}
		},
		data(){
			return {
				selectedIndex: 1,
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
				this.selectedIndex = index;
			}
		}
	}
</script>
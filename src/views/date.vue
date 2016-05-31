<template>
    <div>
        <container>
            <navbar>
                <a v-link='{"name":"demo"}'><icon type="arrow-left"></icon></a>
                <span class="split"></span>
                <span>DatePicker</span>
            </navbar>
            <content>
                <input-select :default-value="date"  @click="showDatePickerHandle" v-ref:mydate>
                    <label slot>请选择时间:</label>
                </input-select>
            </content>
        </container>
        <date-picker :show.sync="show" :sync-component="$refs.mydate"><date-picker>
    </div>
</template>


<script>
    import { Container, Content, Navbar, Group, GroupItem, GroupTitle, InputSelect, DatePicker, Icon } from '../components/index.js';

    export default {
        components: {
            Container,
            Content,
            Navbar,
            Group,
            GroupItem,
            GroupTitle,
            InputSelect,
            DatePicker,
            Icon
        },
        data(){
            return {
                show: false,
                date: '2015-05-16'
            };
        },
        methods: {
            showDatePickerHandle(){
                this.show = true;
            }
        }
    };
</script>
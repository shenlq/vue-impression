<template>
    <div>
        <container>
            <navbar>
                <a v-link='{"name":"demo"}'><i class="fa fa-arrow-left"></i></a>
                <span class="split"></span>
                <span>DatePicker</span>
            </navbar>
            <content>
                <group-title>请选择时间：</group-title>
                <date-picker></date-picker>
            </content>
        </container>
    </div>
</template>


<script>
    import { Container, Content, Navbar, Group, GroupItem, GroupTitle, DatePicker} from '../components/index.js';

    export default {
        components: {
            Container,
            Content,
            Navbar,
            Group,
            GroupItem,
            GroupTitle,
            DatePicker,
        },
        methods: {
        }
    };
</script>
<template>
    <div>
        <container>
            <navbar>
                <a v-link='{"name":"demo"}'><icon type="arrow-left"></icon></a>
                <span class="split"></span>
                <span>Jumbotron</span>
            </navbar>
            <jumbotron>
                <img src="../images/logo.png" width="100px"/>
                <h1>peter</h1>
                <div slot="footer">
                    <flex class="flex-align-center">
                        <flex-item class="text-center">
                           个人主页
                        </flex-item>
                        <flex-item class="text-cente">
                            详细信息
                        </flex-item>
                    </flex>
                </div>
            </jumbotron>
        </container>
    </div>
</template>


<script>
    import { Container, Content, Navbar, Jumbotron, Flex, FlexItem, Icon } from '../components/index.js';

    export default {
        components: {
            Container,
            Content,
            Navbar,
            Jumbotron,
            Flex,
            FlexItem,
            Icon
        }
    }
</script>

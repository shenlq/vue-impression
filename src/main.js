import Vue from 'vue';
import VueRouter from 'vue-router';
import configRouter from './router';
import app from './views/app';
import transition from './transition';


//路由配置
Vue.config.debug = true;
Vue.use(VueRouter);

let router = new VueRouter({
	hashbang: true,
	history: false,
	saveScrollPosition: false,
	transitionOnLoad: true
});

configRouter(router);

const App = Vue.extend(app);
router.start(App, '#app');
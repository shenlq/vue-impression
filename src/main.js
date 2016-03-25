import Vue from 'vue'
import VueRouter from 'vue-router';

//路由配置
Vue.use(VueRouter);
let router = new VueRouter({
	hashbang: true,
	history: false,
	saveScrollPosition: false,
	transitionOnLoad: true
});

//路由配置
router.map({
	'*': {
    	component: require('./views/index.vue')
  	},
	'/demo': {
    	name: "demo",
        component: require('./views/demo.vue')
    },
    '/button': {
    	name: "button",
        component: require('./views/button.vue')
    },
});
router.start(Vue.extend({}), 'body');

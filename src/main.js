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
    // demo首页
	'/demo': {
    	name: "demo",
        component: require('./views/demo.vue')
    },
    // 按钮页
    '/button': {
        name: "button",
        component: require('./views/button.vue')
    },
    // 输入框页
    '/input': {
        name: "input",
        component: require('./views/input.vue')
    },
    // Textarea页
    '/textarea': {
    	name: "textarea",
        component: require('./views/textarea.vue')
    },
});
router.start(Vue.extend({}), 'body');

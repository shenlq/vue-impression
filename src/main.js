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
        name: "home",
    	component: require('./views/index.vue')
  	},
    '/index': {
        name: "index",
        component: require('./views/index.vue')
    },
    // demo首页
	'/demo': {
    	name: "demo",
        component: require('./views/demo.vue')
    },
    // Header页
    '/navbar': {
        name: "navbar",
        component: require('./views/navbar.vue')
    },
    // Footer页
    '/footer': {
        name: "footer",
        component: require('./views/footer.vue')
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
    // Switch页
    '/switch': {
    	name: "switch",
        component: require('./views/switch.vue')
    },
    // Checkbox页
    '/checkbox': {
        name: "checkbox",
        component: require('./views/checkbox.vue')
    },
    // Radio页
    '/radio': {
        name: "radio",
        component: require('./views/radio.vue')
    },
    // Tab页
    '/tab': {
        name: "tab",
        component: require('./views/tab.vue')
    },
    // Drawer页
    '/drawer': {
        name: "drawer",
        component: require('./views/drawer.vue')
    },
    // Toast页
    '/toast': {
        name: "toast",
        component: require('./views/toast.vue')
    },
    // Alert页
    '/alert': {
        name: "alert",
        component: require('./views/alert.vue')
    },
    // Confirm页
    '/confirm': {
        name: "confirm",
        component: require('./views/confirm.vue')
    },
});
router.start(Vue.extend({}), 'body');

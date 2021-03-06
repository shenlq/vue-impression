import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//创建router对象
const router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
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
    // Group页
    '/group': {
        name: "group",
        component: require('./views/group.vue')
    },
    // Flex页
    '/flex': {
        name: "flex",
        component: require('./views/flex.vue')
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
    // Number页
    '/number': {
        name: "number",
        component: require('./views/number.vue')
    },
    // InputSelect页
    '/inputSelect': {
        name: "inputSelect",
        component: require('./views/inputSelect.vue')
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
    // Loading页
    '/loading': {
        name: "loading",
        component: require('./views/loading.vue')
    },
    // Menu页
    '/menu': {
        name: "menu",
        component: require('./views/menu.vue')
    },
    // Image页
    '/image': {
        name: "image",
        component: require('./views/image.vue')
    },
    // Selector页
    '/selector': {
        name: "selector",
        component: require('./views/selector.vue')
    },
    // InlineSelector页
    '/inlineSelector': {
        name: "inlineSelector",
        component: require('./views/inlineSelector.vue')
    },
    // SlideUp
    '/slide': {
        name: "slide",
        component: require('./views/slide.vue')
    },
    // Carousel
    '/carousel': {
        name: "carousel",
        component: require('./views/carousel.vue')
    },
    // Thumbnail
    '/thumbnail': {
        name: "thumbnail",
        component: require('./views/thumbnail.vue')
    },
    // TextLabel
    '/label': {
        name: "label",
        component: require('./views/label.vue')
    },
    // DropLoading
    '/dropLoading': {
        name: "dropLoading",
        component: require('./views/dropLoading.vue')
    },
    // DatePicker
    '/date': {
        name: "date",
        component: require('./views/date.vue')
    },
    // Jumbotron
    '/jumbotron': {
        name: "jumbotron",
        component: require('./views/jumbotron.vue')
    },
});


export default router;
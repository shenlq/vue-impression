import Vue from 'vue';
import router from './router';
import app from './views/app';
import transition from './transition';


//路由配置
Vue.config.debug = true;
router.start(Vue.extend(app), '#app');
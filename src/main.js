import Vue from 'vue';
import router from './router';
import app from './containers/app';
import './transition';


//路由配置
Vue.config.debug = true;
router.start(Vue.extend(app), 'body');
import Vue from 'vue';


//动画
Vue.transition('fadeIn', {
    type: 'animation',
    enterClass: 'fadeInRight',
    leaveClass: 'fadeOutLeft'
});
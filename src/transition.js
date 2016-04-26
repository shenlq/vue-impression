import Vue from 'vue';


//动画
Vue.transition('slideIn', {
    type: 'animation',
    enterClass: 'slideInRight',
    leaveClass: 'slideOutLeft',
    beforeLeave: function (el) {
	    el.style.position = 'absolute';
	    el.style.width = '100%';
	},
});
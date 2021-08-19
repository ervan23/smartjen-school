// eslint-disable-next-line no-undef
require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import { Loading, Message, MessageBox } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap';

import router from './Router/index';
import store from './Store/index';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(Loading.directive);

Vue.prototype.$message = Message;
Vue.prototype.$msgBox = MessageBox;

router.beforeEach((to, from, next) => {
	const loggedin = window.localStorage.getItem('loggedin') == 1;

	if(to.matched.some(data => data.meta.auth)) {
		if(!loggedin) {
			next({ name: 'login' });
		} else {
			next();
		}
	} else {
		next();
	}
});

// eslint-disable-next-line no-unused-vars
const app = new Vue({
	el: '#smartjen',
	router,
	store,
	components: { App }
});

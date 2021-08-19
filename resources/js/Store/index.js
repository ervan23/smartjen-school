import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import { Role } from '../Helpers/auth';

Vue.use(Vuex);

//Add persistence to presist the data
const vuexPersist = new VuexPersistence({
	storage: window.localStorage
});

const store = new Vuex.Store({
	state: {
		auth: {
			isLoggedIn: false,
			user: null,
			token: null
		},
		role: {
			isAdmin: false,
			isTeacher: false,
			isStudent: false
		}
	},
	mutations: {
		SET_AUTH_USER(state, data) {
			state.auth.user = data;
			state.role.isAdmin = data.role == Role.ADMIN;
			state.role.isTeacher = data.role == Role.TEACHER;
			state.role.isStudent = data.role == Role.STUDENT;
		},
		SET_LOGGEDIN_TOKEN(state, data) {
			state.auth.isLoggedIn = true;
			state.auth.token = data;
		},
		RESET_AUTH_DATA(state, data) {
			state.auth = {
				isLoggedIn: false,
				user: data,
				token: null
			};
		}
	},
	actions: {
		setAuthData({commit}, payload) {
			commit('SET_AUTH_USER', payload.user);
			commit('SET_LOGGEDIN_TOKEN', payload.token);
			window.localStorage.setItem('loggedin', 1);
			window.localStorage.setItem('auht__token', payload.token);
		},
		setAuthLogout({commit}) {
			commit('RESET_AUTH_DATA', null);

			window.localStorage.removeItem('loggedin');
			window.localStorage.removeItem('auht__token');
		}
	},
	plugins: [vuexPersist.plugin]
});

export default store;
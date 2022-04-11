import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		msg: 'hello from Vuex',
	},
	getters: {
		msg(state) {
			return state.msg;
		},
	},
	mutations: {},
	actions: {},
});

export default store;

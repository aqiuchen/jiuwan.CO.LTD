import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import music from './music.js';//引入music.js
import date from './date.js';//引入date.js
import zsTest from './zsTest.js';//引入zsTest.js
import dtTest from './dtTest.js';//引入dtTest.js
import ksTest from './ksTest.js';//引入ksTest.js

export default new Vuex.Store({
  state: {
    btnShow: true, //显示隐藏底部固定div
  },
  modules: {
    music: music,
    date: date,
    zsTest: zsTest,
    dtTest: dtTest,
    ksTest: ksTest,
  },
  getters: {

  },
  mutations: {
	//修改底部固定div的状态
	btnShows(state, value){
		state.btnShow = value;
	}
  },
  actions: {

  },
  commit: {

  }
});

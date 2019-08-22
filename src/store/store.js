import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    btnShow: true,  //显示隐藏底部固定div
    musicImg: '', //播放音乐的封面
    musicTitle: '',  //播放音乐的名字
  },
  getters: {

  },
  mutations: {
    btnShows(state,v){
      state.btnShow = v
    },
    // 播放音乐传值
    playMusic(state,object){
      state.musicImg = object.tjgqImg;
      state.musicTitle = object.tjgqTitle;
    }
  },
  actions: {

  },
  commit: {

  }
});

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    btnShow: true, //显示隐藏底部固定div
    musicImg: '', //播放音乐的封面
    musicTitle: '', //播放音乐的名字
    musicId: '', //播放音乐的id
    musicStop: true, //暂停播放按钮显示隐藏
    musicPlay: false, //开始播放按钮显示隐藏
    musicThis: [],  //播放当前歌曲信息
    musicList: [], //所有歌曲信息
    istransformMusic: false,  //底部歌曲封面是否加载动画
    isanimationMusic: false,  //滚动歌曲是否加载动画
  },
  getters: {

  },
  mutations: {
    // 底部固定div显示隐藏
    btnShows(state, value) {
      state.btnShow = value
    },
    // 获取所有歌曲信息
    musicList(state, value) {
      state.musicList = value
    },
    // 播放音乐传值
    playMusic(state, object) {
      state.musicThis = object;
      state.musicImg = object.tjgqImg;
      state.musicTitle = object.tjgqTitle;
      state.musicId = object.musicId;
      state.musicStop = object.isbtnStop;
      state.musicPlay = object.isbtnPlay;
    },
    // 列表播放歌曲
    bfMusic(state,index) {
      state.musicPlay = !state.musicList[index].isbtnPlay;
      state.musicStop = !state.musicList[index].isbtnStop;
      for (let i=0; i<state.musicList.length; i++) {
        if (state.musicList[i].musicId === state.musicId) {
          state.musicPlay = !state.musicList[index].isbtnPlay;
          state.musicStop = !state.musicList[index].isbtnStop;
          state.musicList[index].isbtnPlay = state.musicPlay;
          state.musicList[index].isbtnStop = state.musicStop;
        } else {
          state.musicList[i].isbtnPlay = false;
          state.musicList[i].isbtnStop = true;
        }
      }
    },
    // 底部组件播放按钮控制
    btnMusic(state) {
      state.musicPlay = !state.musicPlay;
      state.musicStop = !state.musicStop;
      for (let i=0; i<state.musicList.length; i++) {
        if (state.musicList[i].musicId === state.musicId) {
          state.musicPlay = !state.musicList[i].isbtnPlay;
          state.musicStop = !state.musicList[i].isbtnStop;
          state.musicList[i].isbtnPlay = state.musicPlay;
          state.musicList[i].isbtnStop = state.musicStop;
        } else {
          state.musicList[i].isbtnPlay = false;
          state.musicList[i].isbtnStop = true;
        }
      }
    },
    // 底部组件上一曲
    beforeMusic(state) {
      state.musicPlay = true;
      state.musicStop = false;
      for (let i=0; i<state.musicList.length; i++) {
        if (state.musicList[i].musicId === state.musicId) {
          state.musicList[i].isbtnPlay = false;
          state.musicList[i].isbtnStop = true;
          if (i == 0) {
            i = state.musicList.length;
            state.musicList[i - 1].isbtnPlay = true;
            state.musicList[i - 1].isbtnStop = false;
            state.musicImg = state.musicList[i - 1].tjgqImg;
            state.musicTitle = state.musicList[i - 1].tjgqTitle;
            state.musicId = state.musicList[i-1].musicId;
            i--;
          }else{
            state.musicList[i - 1].isbtnPlay = true;
            state.musicList[i - 1].isbtnStop = false;
            state.musicImg = state.musicList[i - 1].tjgqImg;
            state.musicTitle = state.musicList[i - 1].tjgqTitle;
            state.musicId = state.musicList[i-1].musicId;
            i--;
          }
        }
      }
    },
    // 底部组件下一曲
    afterMusic(state) {
      state.musicPlay = true;
      state.musicStop = false;
      for (let i=0; i<state.musicList.length; i++) {
        if (state.musicList[i].musicId == state.musicId) {
          state.musicList[i].isbtnPlay = false;
          state.musicList[i].isbtnStop = true;
          if (i == state.musicList.length-1) {
            i = 0;
            state.musicList[i].isbtnPlay = true;
            state.musicList[i].isbtnStop = false;
            state.musicImg = state.musicList[i].tjgqImg;
            state.musicTitle = state.musicList[i].tjgqTitle;
            state.musicId = state.musicList[i].musicId;
            i++;
          }else{
            state.musicList[i+1].isbtnPlay = true;
            state.musicList[i+1].isbtnStop = false;
            state.musicImg = state.musicList[i+1].tjgqImg;
            state.musicTitle = state.musicList[i+1].tjgqTitle;
            state.musicId = state.musicList[i+1].musicId;
            i++;
          }
        }
      }
    },
    // 歌曲名字滚动
    musicTitle(state){
      if(state.musicPlay){
        // 添加css动画
        state.isanimationMusic = true;
        state.istransformMusic = true;
      }else{
        state.isanimationMusic = false;
        state.istransformMusic = false;
      }
    },
  },
  actions: {

  },
  commit: {

  }
});

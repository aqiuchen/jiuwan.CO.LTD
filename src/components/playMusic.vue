<template>
  <div class="playMusic">
    <!-- 左侧封面 -->
    <div class="playMusic_left">
      <img :src="musicImg" :class="{transformMusic: istransformMusic}" alt="歌曲封面">
    </div>
    <div class="playMusic_right">
      <!-- 右侧上部进度条 -->
      <div class="playMusic_top">
        <span></span>
      </div>
      <!-- 右侧下部 -->
      <div class="playMusic_bottom">
        <!-- 滚动歌曲信息 -->
        <div class="playMusic_p">
          <p :class="{animationMusic: isanimationMusic}">{{musicTitle}}</p>
        </div>
        <!-- 音频/音频格式 -->
        <!-- 按钮信息 -->
        <div class="playMusic_btn">
          <img src="../../static/images/music/pmBefore.png" alt="上一曲" @click="pmBefore">
          <img src="../../static/images/music/pmStop.png" alt="暂停" @click="pmPlay" v-show="musicStop">
          <img src="../../static/images/music/pmPlay.png" alt="播放" @click="pmPlay" v-show="musicPlay">
          <img src="../../static/images/music/pmAfter.png" alt="下一曲" @click="pmAfter">
          <img src="../../static/images/music/pmMore.png" alt="更多" @click="pmMore">
        </div>
      </div>
      <audio :src="musicFrom" id="audio" autoplay controls v-show="isAudio" loop></audio>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions,
    mapGetters
  } from 'vuex';
  export default {
    data() {
      return {
        isAudio: false,
      }
    },
    mounted() {

    },
    computed: {
      ...mapState({
        musicList: state => state.musicList,
        musicImg: state => state.musicImg,
        musicTitle: state => state.musicTitle,
        musicFrom: state => state.musicFrom,
        musicStop: state => state.musicStop,
        musicPlay: state => state.musicPlay,
        isanimationMusic: state => state.isanimationMusic,
        istransformMusic: state => state.istransformMusic,

      }),
      // 获取底部播放暂停按钮的状态，用于监听判断
      audioPlays() {
        let musicPlay = this.$store.state.musicPlay;
        return musicPlay;
      }
    },
    methods: {
      // 上一曲
      pmBefore() {
        // 调用store中的方法
        this.$store.commit('beforeMusic');
        // 调用css动画
        this.$store.commit('musicTitle');
      },
      // 播放/暂停
      pmPlay() {
        // 调用store中的方法
        this.$store.commit('btnMusic');
        // 调用css动画
        this.$store.commit('musicTitle');

      },
      // 下一曲
      pmAfter() {
        // 调用store中的方法
        this.$store.commit('afterMusic');
        // 调用css动画
        this.$store.commit('musicTitle');
      },
      // 更多
      pmMore() {
        console.log("更多");
      }
    },
    watch: {
      // 监听播放暂停按钮状态，根据状态调用播放暂停事件
      audioPlays: {
        handler(audioPlays){
          let audio = document.querySelector('#audio');
          console.log(audioPlays);
          if (audioPlays) {
            audio.play();
            console.log("开始播放");
          } else {
            audio.pause();
            console.log("暂停播放");
          }
          // this.musicEnded();
        },
        // immediate: true,
        // deep: true
      }
    }
  }
</script>

<style>
  .playMusic {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: white;
    border-top: 0.02rem solid #dddddf;
    overflow: hidden;
    width: 96%;
    padding: 0.1rem 2%;
    display: flex;
    justify-content: space-between;
  }

  .playMusic audio {
    width: 6rem;
    /* position: absolute; */
    top: 0;
    opacity: 0.1;
  }

  .playMusic_left img {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    box-shadow: 0 0 0.02rem #999999;
  }

  .playMusic_right {
    width: 6rem;
  }

  .playMusic_top {
    width: 100%;
    height: 0.2rem;
  }

  .playMusic_top span {
    display: block;
    width: 100%;
    height: 0.06rem;
    background-color: #42B983;
    /* background-color: #1296db; */
    margin: 0.07rem 0;
  }

  .playMusic_bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .playMusic_p {
    width: 2.8rem;
    overflow: hidden;
    position: relative;
  }

  .playMusic_p p {
    white-space: nowrap;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.24rem;
    position: absolute;
    left: 0;
    top: 0;
  }

  .animationMusic {
    animation: musicPlay 15s linear infinite alternate;
  }

  /* 封面旋转 */
  .transformMusic {
    animation: imgPlay 10s linear infinite;
  }

  /* 动画 */
  @keyframes imgPlay {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(90deg);
    }

    50% {
      transform: rotate(180deg);
    }

    75% {
      transform: rotate(270deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes musicPlay {
    0% {
      left: -1rem;
      top: 0;
    }

    25% {
      left: 1.4rem;
      top: 0;
    }

    50% {
      left: 2.8rem;
      top: 0;
    }

    75% {
      left: 1.4rem;
      top: 0;
    }

    100% {
      left: -1rem;
      top: 0;
    }
  }

  .playMusic_btn {
    width: 3rem;
    display: flex;
    justify-content: space-between;
    margin-left: 0.2rem;
  }

  .playMusic_btn img {
    width: 0.6rem;
    height: 0.6rem;
  }
</style>

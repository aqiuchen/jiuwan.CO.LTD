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
          <img src="../../static/images/music/pmBefore.png" alt="上一曲" @click="btnBefore">
          <img src="../../static/images/music/pmStop.png" alt="暂停" @click="btnPlay" v-show="musicStop">
          <img src="../../static/images/music/pmPlay.png" alt="播放" @click="btnPlay" v-show="musicPlay">
          <img src="../../static/images/music/pmAfter.png" alt="下一曲" @click="btnAfter">
          <img src="../../static/images/music/pmMore.png" alt="更多" @click="btnMore">
        </div>
      </div>
      <audio :src="musicFrom" id="audio" controls autoplay v-show="isAudio"></audio>
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
      // this.musicPlays = this.$store.state.musicPlay;
    },
    computed: {
      ...mapState({
        musicList: state => state.music.musicList,
        musicImg: state => state.music.musicImg,
        musicTitle: state => state.music.musicTitle,
        musicFrom: state => state.music.musicFrom,
        musicId: state => state.music.tjgqId,
        musicStop: state => state.music.musicStop,
        musicPlay: state => state.music.musicPlay,
        isanimationMusic: state => state.music.isanimationMusic,
        istransformMusic: state => state.music.istransformMusic,
      })
    },
    methods: {
      // 上一曲
      btnBefore() {
        // 调用store中的方法
        this.$store.commit('beforeMusic');
        // 调用css动画
        this.$store.commit('musicTitle');
      },
      // 播放/暂停按钮
      btnPlay() {
        // 调用store中的方法
        this.$store.commit('btnMusic');
        // 调用css动画
        this.$store.commit('musicTitle');
        this.playPause();
      },
      //播放暂停歌曲
      playPause(){
        let audio = document.querySelector('#audio');
        let musicPlay = this.$store.state.music.musicPlay;
        if(musicPlay){
          audio.play();
          // 监听是否播放完毕
          audio.addEventListener("ended",()=>{
            // 调用自动播放下一首
            this.$store.commit('lastMusic');
          },false)
        }else{
          audio.pause();
        }
      },
      // 下一曲
      btnAfter() {
        // 调用store中的方法
        this.$store.commit('afterMusic');
        // 调用css动画
        this.$store.commit('musicTitle');
      },
      // 更多
      btnMore() {
        console.log("更多");
      }
    },
    watch: {

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

  .playMusic iframe {
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

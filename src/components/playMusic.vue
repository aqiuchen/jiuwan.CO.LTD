<template>
  <div class="playMusic">
    <!-- 左侧封面 -->
    <div class="playMusic_left">
      <img :src="musicImg" alt="歌曲封面">
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
          <p>{{musicTitle}}</p>
        </div>
        <!-- 按钮信息 -->
        <div class="playMusic_btn">
          <img src="../../static/images/music/pmBefore.png" alt="上一曲" @click="pmBefore">
          <img src="../../static/images/music/pmStop.png" alt="暂停" @click="pmPlay" v-show="ispmStop">
          <img src="../../static/images/music/pmPlay.png" alt="播放" @click="pmPlay" v-show="ispmPlay">
          <img src="../../static/images/music/pmAfter.png" alt="下一曲" @click="pmAfter">
          <img src="../../static/images/music/pmMore.png" alt="更多" @click="pmMore">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions, mapGetters} from 'vuex';
  export default{
    data(){
      return{
        ispmStop: false,
        ispmPlay: true,
      }
    },
    mounted() {

    },
    computed:{
      ...mapState({
        musicImg:state => state.musicImg,
        musicTitle:state => state.musicTitle,
      })
    },
    methods:{
      // 上一曲
      pmBefore(){
        console.log("上一曲");
      },
      // 播放/暂停
      pmPlay(){
        if(this.ispmStop){
          this.ispmStop = false;
          this.ispmPlay = true;
          console.log("播放");
        }else{
          this.ispmStop = true;
          this.ispmPlay = false;
          console.log("暂停");
        }
      },
      // 下一曲
      pmAfter(){
        console.log("下一曲");
      },
      // 更多
      pmMore(){
        console.log("更多");
      }
    }
  }
</script>

<style>
  .playMusic{
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: white;
    border-top: 0.01rem solid #dddddf;
    overflow: hidden;
    width: 96%;
    padding: 0.1rem 2%;
    display: flex;
    justify-content: space-between;
  }
  .playMusic_left{

  }
  .playMusic_left img{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    box-shadow: 0 0 0.02rem #999999;
  }
  .playMusic_right{
    width: 6rem;
  }
  .playMusic_top{
    width: 100%;
    height: 0.2rem;
  }
  .playMusic_top span{
    display: block;
    width: 100%;
    height: 0.06rem;
    background-color: #42B983;
    margin: 0.07rem 0;
  }
  .playMusic_bottom{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .playMusic_p{
    width: 2.8rem;
    overflow: hidden;
  }
  .playMusic_p p{
    white-space: nowrap;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.24rem;
  }
  .playMusic_btn{
    width: 3rem;
    display: flex;
    justify-content: space-between;
    margin-left: 0.2rem;
  }
  .playMusic_btn img{
    width: 0.6rem;
    height: 0.6rem;
  }
</style>

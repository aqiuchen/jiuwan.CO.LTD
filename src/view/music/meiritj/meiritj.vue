<template>
  <div class="meiritj">
    <go-back :homeTitle="homeTitle"></go-back>
    <div class="meiritj_main">
      <div class="meiritj_main_top">
        <img src="../../../../static/images/static/details-xqtp.png" alt="顶部封面">
      </div>
      <!-- 歌曲列表 -->
      <div class="meiritj_main_content">
        <div class="meiritj_content_top" @click="bfAll">
          <img src="../../../../static/images/music/music_stop.png" alt="封面">
          <h5>播放全部</h5>
        </div>
        {{tjgqError}}
        <div class="meiritj_content_list" v-for="(tjgq,index) in tjgqs" :key="index">
          <img :src="tjgq.tjgqImg" alt="封面">
          <div class="meiritj_list_main">
            <p>{{tjgq.tjgqTitle}}</p>
            <span>{{tjgq.tjgqName}}</span>
          </div>
          <div class="meiritj_list_right">
            <img :src="tjgq.tjgqStopimg" alt="暂停按钮" @click="bfBtn(index)" v-show="tjgq.isbtnStop">
            <img :src="tjgq.tjgqPlayimg" alt="播放按钮" @click="bfBtn(index)" v-show="tjgq.isbtnPlay">
            <img src="../../../../static/images/music/music_more.png" alt="更多选项" @click="bfMore(index)">
          </div>
        </div>
      </div>
    </div>
    <play-music v-if="isplayMusic"></play-music>
  </div>
</template>

<script>
  import goBack from '../../../components/goBack.vue';
  import playMusic from '../../../components/playMusic.vue';
  export default {
    data() {
      return {
        homeTitle: '',
        tjgqError: '',
        tjgqs: [],
        isplayMusic: false,
      }
    },
    mounted() {
      this.homeTitle = this.$route.query.title;
      this.axios({
        url: 'http://localhost:8081/static/aq.json',
        // url: 'https://mi.dyfeiyu.com/static/aq.json',
        method: 'GET'
      }).then(res => {
        this.tjgqs = res.data.tjgqs;
      }).catch(error => {
        this.tjgqError = '请求数据失败！';
      });
    },
    methods: {
      // 播放全部
      bfAll() {
        console.log("开始播放全部歌曲");
      },
      // 点击播放当前歌曲
      bfBtn(index) {
        // 显示底部播放组件
        this.isplayMusic = true;
        // 传递所有推荐歌曲的信息到store
        this.$store.commit('musicList', this.tjgqs);
        // 将当前点击歌曲信息传递到store
        this.$store.commit('playMusic', this.tjgqs[index]);
        // 调用播放歌曲时的方法
        this.$store.commit('bfMusic',index);
      },
      // 当前歌曲更多操作
      bfMore(index) {
        console.log("当前歌曲更多操作：" + this.tjgqs[index].tjgqTitle);
      }
    },
    computed: {

    },
    components: {
      goBack,
      playMusic,
    },
    watch: {

    }
  }
</script>

<style>
  @import '../../../assets/css/music/meiritj.css';
</style>

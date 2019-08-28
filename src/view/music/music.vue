music.vue<template>
  <div class="vueone_music">
    <!-- 头部轮播图 -->
    <div class="music_banner">
      <index-banner></index-banner>
    </div>
    <!-- 上部列表导航 -->
    <div class="music_nav">
      <router-link class="music_nav_list" v-for="(musicNav,index) in musicNavs"
        :to="{path:musicNav.navPath, query:{title:musicNav.navTitle}}" :key="index">
        <img :src="musicNav.navImg" alt="">
        <p>{{musicNav.navTitle}}</p>
      </router-link>
    </div>
    <!-- 推荐歌单 -->
    <div class="music_recommend">
      <!-- 标题栏 -->
      <div class="music_recommend_top">
        <h5>推荐歌单</h5>
        <router-link to="/music/gedan?title=歌单">歌单广场</router-link>
      </div>
      <!-- 歌单列表 -->
      <div class="music_recommend_main">
        {{reMusicsErr}}
        <router-link class="music_recommend_list" v-for="(reMusic,index) in reMusics" :to="reMusic.rePath" :key="index">
          <!-- 封面 -->
          <div class="recommend_list_content">
            <!-- 浮层 -->
            <div class="recommend_list_top">
              <img :src="reMusic.topImg" alt="" v-if="isTop" class="list_top_one">
              <i>万</i>
              <span>{{reMusic.reNumber}}</span>
              <img src="../../../static/images/home/home-wdsc.png" alt="" class="list_top_two">
            </div>
            <img :src="reMusic.reImg" alt="">
          </div>
          <!-- 标题 -->
          <div class="recommend_list_title">{{reMusic.reTitle}}</div>
        </router-link>
      </div>
    </div>
    <!-- 热门排行 -->
    <div class="music_recommend">
      <!-- 标题栏 -->
      <div class="music_recommend_top">
        <h5>热门排行</h5>
        <router-link to="/music/paihb?title=排行榜">更多排行</router-link>
      </div>
      <!-- 歌单列表 -->
      <div class="music_recommend_main">
        {{rsMusicsErr}}
        <router-link class="music_recommend_list" v-for="(rsMusic,index) in rsMusics" :to="rsMusic.rsPath" :key="index">
          <!-- 封面 -->
          <div class="recommend_list_content">
            <!-- 浮层 -->
            <div class="recommend_list_top">
              <img :src="rsMusic.topImg" alt="" v-if="isTop" class="list_top_one">
              <i>万</i>
              <span>{{rsMusic.rsNumber}}</span>
              <img src="../../../static/images/home/home-wdsc.png" alt="" class="list_top_two">
            </div>
            <img :src="rsMusic.rsImg" alt="">
          </div>
          <!-- 标题 -->
          <div class="recommend_list_title">{{rsMusic.rsTitle}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import indexBanner from '../../components/indexBanner.vue'
  export default {
    data() {
      return {
        musicNavs: [{
          navPath: '/music/meiritj',
          navImg: require('../../../static/images/music/music_tj.png'),
          navTitle: '每日推荐'
        }, {
          navPath: '/music/gedan',
          navImg: require('../../../static/images/music/music_gd.png'),
          navTitle: '歌单'
        }, {
          navPath: '/music/paihb',
          navImg: require('../../../static/images/music/music_ph.png'),
          navTitle: '排行榜'
        }, {
          navPath: '/music/diantai',
          navImg: require('../../../static/images/music/music_dt.png'),
          navTitle: '电台'
        }, {
          navPath: '/music/paobu',
          navImg: require('../../../static/images/music/music_pb.png'),
          navTitle: '跑步'
        }],
        isTop: true,
        reMusics: [],
        reMusicsErr: '',
        rsMusics: [],
        rsMusicsErr: ''
      }
    },
    // 生命周期钩子函数  （创建前）
    beforeCreate() {
      // el 和data并未初始化  （el为渲染数据{{message}}）
      //此处可添加loading事件
    },
    // 生命周期钩子函数 页面初始化使用（创建后）
    created() {
      //完成了data数据的初始化，el没有
      //结束loading
    },
    // 生命周期钩子函数 （载入前）
    beforeMount() {
      //完成了el和data初始化
    },
    // 生命周期钩子函数 （载入后）
    mounted() {
      //使用axios请求数据
      {
        const that = this;
        // that.axios.get('http://localhost:8081/static/aq.json')
        // that.axios.get('http://192.168.1.4:8081/static/aq.json')
        that.axios.get('https://mi.dyfeiyu.com/static/aq.json')
          .then(response => {
            that.reMusics = response.data.reMusics;
            that.rsMusics = response.data.rsMusics;
          })
          .catch(error => {
            that.reMusicsErr = that.rsMusicsErr = '请求数据失败！';
          })
      }
    },
    // 生命周期钩子函数 （更新前）
    beforeUpdate() {

    },
    // 生命周期钩子函数 （更新后）
    updated() {

    },
    // 生命周期钩子函数 （销毁前）
    beforeDestroy() {
      //你确认删除XX吗
    },
    // 生命周期钩子函数 （销毁后）
    destroyed() {
      //当前组件已被删除，清空相关内容
    },
    // 计算属性，所有涉及到复杂逻辑计算的都写在这里面，基于依赖缓存，只有相关依赖发生改变时才重新计算
    computed: {

    },
    // 组件引用
    components: {
      indexBanner,
    },
    // 事件，重新渲染时总会执行函数，而计算属性只要数据未改变都不会计算，直接获取缓存值
    methods: {

    },
    // 监听数据发生变化时操作
    watch: {

    }
  }
</script>
<style>
  @import '../../assets/css/music/music.css'
</style>

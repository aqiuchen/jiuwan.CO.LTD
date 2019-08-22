<template>
  <div class="vueone_nav" v-show="btnShow">
    <!-- 绑定计算属性aq,为了控制导航点击对应页面显示对应的颜色和图片 -->
    {{aq}}

    <router-link v-for="(nav,index) in navs" :to="nav.path" @click.native="clicknav(index)" class="vueone_nav_list"
      :key="index">
      <div>
        <img :src="nav.img">
      </div>
      <h5 :class="nav.isColor">{{ nav.title }}</h5>
    </router-link>
  </div>
</template>
<script>
  import {mapState, mapActions, mapGetters} from 'vuex';
  export default {
    data() {
      return {
        navs: [{
          path: '/index',
          img: '',
          img1: require('../../static/images/nav/index_2.png'),
          img2: require('../../static/images/nav/index_1.png'),
          title: '首页',
          isColor: { //定义两个class，用于控制title的颜色
            dianji: false,
            nodianji: true
          }
        }, {
          path: '/news',
          img: '',
          img1: require('../../static/images/nav/news_2.png'),
          img2: require('../../static/images/nav/news_1.png'),
          title: '新闻',
          isColor: {
            dianji: false,
            nodianji: true
          }
        }, {
          path: '/music',
          img: '',
          img1: require('../../static/images/nav/music_2.png'),
          img2: require('../../static/images/nav/music_1.png'),
          title: '音乐',
          isColor: {
            dianji: false,
            nodianji: true
          }
        }, {
          path: '/video',
          img: '',
          img1: require('../../static/images/nav/video_2.png'),
          img2: require('../../static/images/nav/video_1.png'),
          title: '视频',
          isColor: {
            dianji: false,
            nodianji: true
          }
        }, {
          path: '/home',
          img: '',
          img1: require('../../static/images/nav/home_2.png'),
          img2: require('../../static/images/nav/home_1.png'),
          title: '我的',
          isColor: {
            dianji: false,
            nodianji: true
          }
        }],
      }
    },
    // 生命周期钩子函数  （创建前）
    beforeCreate() {
      // el 和data并未初始化  （el为渲染数据{{message}}）
      //此处可添加loading事件
    },
    // 生命周期钩子函数 页面初始化使用（创建后）
    created() {

    },
    // 生命周期钩子函数 （载入前）
    beforeMount() {
      //完成了el和data初始化
    },
    // 生命周期钩子函数 （载入后）
    mounted() {

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
      // 获取当前路由与对应的导航路由是否一致,一致就显示点击后的效果
      aq() {
        let that = this;
        // 获取当前路由
        let thispath = that.$route.path;
        // 遍历navs数组
        for (let i in that.navs) {
          let obj = that.navs[i];
          //如果当前路由和navs中对应的路由相同，则显示点击后的图标
          if (thispath == obj.path) {
            obj.img = obj.img2;
            obj.isColor.dianji = true;
            obj.isColor.nodianji = false;
            continue;
          } else {
            obj.img = obj.img1; //否则显示未点击时的图标
            obj.isColor.dianji = false;
            obj.isColor.nodianji = true; //显示黑色
          }
        }
      },
      ...mapState({
        btnShow:state => state.btnShow,
      })
    },
    // 组件引用
    components: {

    },
    // 事件，重新渲染时总会执行函数，而计算属性只要数据未改变都不会计算，直接获取缓存值
    methods: {
      // 点击改变图标和字体颜色
      clicknav(index) {
        let that = this;
        for (let i in that.navs) {
          let obj = that.navs[i];
          if (i == index) {
            obj.img = obj.img2;
            obj.isColor.dianji = true;
            obj.isColor.nodianji = false;
          } else {
            obj.img = obj.img1;
            obj.isColor.dianji = false;
            obj.isColor.nodianji = true;
          }
        }
      }
    },
    // 监听数据发生变化时操作
    watch: {

    }
  }
</script>
<style>
  @import '../assets/css/nav/myNav.css'
</style>

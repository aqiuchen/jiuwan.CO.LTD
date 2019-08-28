<template>
  <div id="app">
    <!-- 顶部搜索框 -->
    <div class="search" v-show="isSearch">
      <search></search>
    </div>

    <!-- APP默认渲染视图 -->
    <router-view />

    <!-- 底部导航 -->
    <div class="app_nav" v-show="isNav">
      <!-- 上方绑定show方法用于通过子组件调用该方法控制nav导航是否显示 -->
      <!-- 下方新定义isNaver用于绑定方法来判断是否加载nav导航 -->
      <my-nav>{{isNaver}}</my-nav>
    </div>
  </div>
</template>
<script>
  import myNav from './components/myNav.vue';
  import search from './components/search.vue';
  import pops from './components/pops.vue';
  export default {
    name: 'App',
    data() {
      return {
        isNav: true,
        clientHeight: '', //原始屏幕高度
        watchHeight: '', //实时屏幕高度
        clientWidth: '', //原始屏幕宽度
        watchWidth: '', //实时屏幕宽度
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
      // 加载页面时获取屏幕原始高度
      this.clientHeight = document.documentElement.clientHeight;
      // 加载页面时获取屏幕原始宽度-如果超过768跳转PC页面
      this.clientWidth = document.documentElement.clientWidth;
      if (this.clientWidth > 768) {
        this.$router.replace('/pcIndex');
      }else{
        this.$router.replace('/index');
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
      // 重构isNaver方法来判断是否加载nav导航
      isNaver() {
        const that = this;
        if (that.$route.path == '/index' || that.$route.path == '/news' || that.$route.path == '/music' || that.$route.path ==
          '/video' || that.$route.path == '/home') {
          that.isNav = true;
        } else {
          that.isNav = false;
        };
        // 监听窗口尺寸变化
        window.onresize = () => {
          const that = this;
          return (() => {
            //实时屏幕高度
            that.watchHeight = document.documentElement.clientHeight;
            //实时屏幕宽度
            that.watchWidth = document.documentElement.clientWidth;
          })()
        }
      },
      // 判断哪些路由加载search搜索框
      isSearch() {
        const that = this;
        // 如果当前路由包含以下路由，则显示search
        if (that.$route.path == '/index' || that.$route.path == '/news' || that.$route.path == '/music' || that.$route.path ==
          '/video') {
          return true;
        } else {
          return false;
        }
      },
    },
    // 组件引用
    components: {
      myNav,
      search,
    },
    // 事件，重新渲染时总会执行函数，而计算属性只要数据未改变都不会计算，直接获取缓存值
    methods: {

    },
    // 监听数据发生变化时操作
    watch: {
      // 监听实时屏幕高度变化
      watchHeight() {
        const that = this;
        // 如果实时屏幕高度小于原始屏幕高度，表示键盘弹出，此时隐藏底部导航
        if (that.watchHeight < that.clientHeight && that.watchHeight > that.clientHeight / 4) {
          that.$store.commit('btnShows', false);
        } else {
          that.$store.commit('btnShows', true);
        }
      },
      // 监听实时屏幕宽度变化-如果超过768跳转PC页面
      watchWidth() {
        const that = this;
        if (that.watchWidth > 768) {
          that.$router.replace('/pcIndex');
        } else if (that.watchWidth == that.clientWidth) {

        } else {
          that.$router.replace('/index');
        }
      }
    }
  }
</script>
<style>
  @import './assets/css/static.css';
</style>

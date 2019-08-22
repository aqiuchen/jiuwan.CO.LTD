<template>
  <div class="vueone_index">
    <!-- 头部轮播图 -->
    <div class="index_banner">
      <index-banner></index-banner>
    </div>
    <!-- 功能板块 -->
    <div class="index_mod">
      <router-link v-for="(mod,index) in mods" :to="{path:mod.modPath, query:{title:mod.modTitle}}" :key="index">
        <img :src="mod.modImg" alt="">
        <p>{{mod.modTitle}}</p>
      </router-link>
    </div>
    <!-- 今日热点 -->
    <div class="now_hot">
      <!-- 标题栏 -->
      <div class="now_hot_top">
        <h5>今日热点</h5>
        <router-link to="/music">更多热点</router-link>
      </div>
      <!-- 热点列表 -->
      <div class="now_hot_main">
        <!-- 绑定数据用于请求数据失败时接收失败提示！ -->
        {{hotsErr}}
        <router-link class="now_hot_list" v-for="(hot,index) in hots" :to="hot.hotPath" :key="index">
          <!-- 封面 -->
          <div class="hot_list_content">
            <!-- 浮层 -->
            <div class="hot_list_top">
              <img :src="hot.topImg" alt="" v-if="isHot" class="list_top_one">
              <i>万</i>
              <span>{{hot.hotNumber}}</span>
              <img src="../../../static/images/home/home-wdsc.png" alt="" class="list_top_two">
            </div>
            <img :src="hot.hotImg" alt="">
          </div>
          <!-- 标题 -->
          <div class="hot_list_title">{{hot.hotTitle}}</div>
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
        mods: [{
          modPath: '/index/qiandao',
          modImg: require('../../../static/images/index/index_qd.png'),
          modTitle: '签到'
        }, {
          modPath: '/index/yundong',
          modImg: require('../../../static/images/index/index_yd.png'),
          modTitle: '运动'
        }, {
          modPath: '/index/bianqian',
          modImg: require('../../../static/images/index/index_bq.png'),
          modTitle: '便签'
        }, {
          modPath: '/index/dushu',
          modImg: require('../../../static/images/index/index_ds.png'),
          modTitle: '读书'
        }, {
          modPath: '/index/changge',
          modImg: require('../../../static/images/index/index_cg.png'),
          modTitle: '唱歌'
        }, {
          modPath: '/index/xuexi',
          modImg: require('../../../static/images/index/index_xx.png'),
          modTitle: '学习'
        }],
        isHot: true,
        hots: [],
        hotsErr: ''
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
        that.axios.get('https://mi.dyfeiyu.com/static/aq.json')
          .then(response => {
            that.hots = response.data.hots;
          })
          .catch(error => {
            that.hotsErr = "请求数据失败！"
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
  @import '../../assets/css/index/index.css'
</style>

news.vue<template>
  <div class="vueone_news">
    <!-- 头部轮播图 -->
    <div class="news_banner">
      <index-banner></index-banner>
    </div>
    <!-- 新闻列表 -->
    <div class="news_main">
      {{newsrErr}}
      <router-link v-for="(news,index) in newsr" :to="{path:news.newsPath,query:{Id:news.newsId}}" class="news_list"
        :key="index">
        <div class="news_list_left">
          <!-- 新闻标题 -->
          <p class="news_list_title">{{news.newsTitle}}</p>
          <!-- 底部信息--来源、评论数、时间 -->
          <div class="news_list_bottom">
            <span>{{news.newsSource}}</span>
            <span>{{news.newsReview}}评论</span>
            <span>{{news.newsTime}}</span>
          </div>
        </div>
        <!-- 新闻图片 -->
        <div class="news_list_img">
          <img :src="news.newsImg" alt="">
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import indexBanner from '../../components/indexBanner.vue'
  export default {
    data() {
      return {
        newsr: [],
        newsrErr: ''
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
        this.axios({
          url: 'http://localhost:8081/static/aq.json',
          // url: 'http://172.20.10.3:8081/static/aq.json',
          // url: 'https://mi.dyfeiyu.com/static/aq.json',
          method: 'GET',
        }).then( response => {
          this.newsr = response.data.newsr;
        }).catch( error => {
            this.newsrErr = '请求数据失败！';
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
  @import '../../assets/css/news/news.css'
</style>

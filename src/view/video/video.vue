<template>
  <div class="vueone_video">
    <!-- 头部轮播图 -->
    <div class="video_banner">
      <index-banner></index-banner>
    </div>
    <div class="video_main">
      {{videosErr}}
      <div class="video_list" v-for="(video,index) in videos" :key="index">
        <!-- 视频+视频上方标题 -->
        <div class="video_list_show">
          <p>{{ video.videoTitle }}</p>
          <!-- 视频/视频格式 -->
          <video :src="video.videoFrom" controls="controls">您的浏览器不支持 video 标签。</video>
        </div>
        <!-- 视频底部信息 -->
        <div class="video_list_bottom">
          <!-- 视频来源 -->
          <div class="video_list_name">
            <router-link :to="video.namePath">
              <!-- 上传者头像 -->
              <img :src="video.nameImg" alt="">
              <!-- 上传者名字 -->
              <b>{{ video.videoName }}</b>
            </router-link>
          </div>
          <!-- 关注 -->
          <span @click="attention" class="video_list_attention">{{gz}}</span>
          <!-- 评论 -->
          <div class="video_list_review">
            <router-link :to="video.videoPath">
              <!-- 评论图标 -->
              <img src="../../../static/images/video/review.png" alt="">
              <!-- 评论数 -->
              <p>{{ video.videoReview }}</p>
            </router-link>
            <!-- 分享 -->
            <b @click="searchVideo">. . .</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import indexBanner from '../../components/indexBanner.vue'
  export default {
    data() {
      return {
        gz: '关注',
        videos: [],
        videosErr: ''
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
        that.axios.get('http://localhost:8081/static/aq.json')
        // that.axios.get('https://mi.dyfeiyu.com/static/aq.json')
          .then(response => {
            that.videos = response.data.videos;
          })
          .catch(error => {
            that.videosErr = '请求数据失败！';
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
      attention() {
        this.gz = '已关注';
      },
      searchVideo() {
        alert("分享成功")
      }
    },
    // 监听数据发生变化时操作
    watch: {

    }
  }
</script>
<style>
  @import '../../assets/css/video/video.css'
</style>

<template>
  <div class="vueone_home">
    <div>
      <!-- 头像-已登录 -->
      <div class="home_isLogin" v-if="isLogin">
        <img :src="nameImg" alt="">
        <b>{{homeName}}</b>
        <router-link @click="homeNames" to="/home"></router-link>
      </div>
      <!-- 头像-未登录 -->
      <div class="home_noLogin" v-if="noLogin">
        <router-link to="/login" @click.native="sign">登录</router-link>
      </div>
    </div>
    <!-- 头部 -->
    <div class="home_header">
      <router-link v-for="(header,index) in headers" :to="{path:header.path, query:{title:header.title}}" :key="index">
        <img :src="header.img">
        <p>{{header.title}}</p>
      </router-link>
    </div>
    <!-- 内容部分 -->
    <div class="home_list">
      <div class="list_top">
        <router-link v-for="(top,index) in tops" :to="{path:top.path, query:{title:top.title}}" :key="index">
          <h5>{{top.title}}</h5>
          <img src="../../../static/images/home/home_rights.png">
        </router-link>
      </div>
      <div class="list_main">
        <router-link v-for="(main,index) in mains" :to="{path:main.path, query:{title:main.title}}" :key="index">
          <h5>{{main.title}}</h5>
          <img src="../../../static/images/home/home_rights.png">
        </router-link>
      </div>
      <div class="list_down">
        <router-link v-for="(down,index) in downs" :to="{path:down.path, query:{title:down.title}}" :key="index">
          <h5>{{down.title}}</h5>
          <img src="../../../static/images/home/home_rights.png">
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isLogin: false, //登录
        noLogin: true, //未登录
        nameImg: require('../../../static/images/home/home_name.png'),
        homeName: ' ',
        //头部
        headers: [{
          path: '/home/myshoucang',
          img: require('../../../static/images/home/home_sc.png'),
          title: '我的收藏'
        }, {
          path: '/home/mypinglun',
          img: require('../../../static/images/home/home_pl.png'),
          title: '我的评论'
        }, {
          path: '/home/mydianzan',
          img: require('../../../static/images/home/home_dz.png'),
          title: '我的点赞'
        }, {
          path: '/home/mylishi',
          img: require('../../../static/images/home/home_ls.png'),
          title: '浏览历史'
        }],
        //内容上部
        tops: [{
          path: '/home/myqianbao',
          title: '我的钱包',
        }, {
          path: '/home/myxiaoxi',
          title: '消息通知',
        }, {
          path: '/home/mysixin',
          title: '私信',
        }],
        //内容中部
        mains: [{
          path: '/home/myzuopin',
          title: '作品管理',
        }, {
          path: '/home/myshujia',
          title: '我的书架',
        }, {
          path: '/home/mydingdan',
          title: '我的订单',
        }, {
          path: '/home/mysaoma',
          title: '扫一扫',
        }],
        //内容下部
        downs: [{
          path: '/home/myfankui',
          title: '用户反馈',
        }, {
          path: '/home/myshezhi',
          title: '系统设置',
        }]
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
      // 获取当前路由判断是否登录
      {
        let info = JSON.parse(localStorage.getItem('account'));
        // 如果当前路由有name属性，则表示登录
        if (info == null || info == undefined || info == ' ') {
          this.isLogin = false;
          this.noLogin = true;
        } else {
          this.isLogin = true;
          this.noLogin = false;
          this.homeName = info.phoneNumber;
        }
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

    },
    // 事件，重新渲染时总会执行函数，而计算属性只要数据未改变都不会计算，直接获取缓存值
    methods: {
      homeNames() {
        alert("禁止进入！");
      },
      sign() {
        // this.isLogin = true;
        // this.noLogin = false;
      }
    },
    // 监听数据发生变化时操作
    watch: {

    }
  }
</script>
<style>
  @import '../../assets/css/home/home.css'
</style>

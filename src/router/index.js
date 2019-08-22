import Vue from 'vue'
import Router from 'vue-router'

// 首页
import pcIndex from '@/view//index/pcIndex'//PC端首页
import index from '@/view//index/index'//移动端首页
import qiandao from '@/view//index/qiandao/qiandao' //签到
import yundong from '@/view//index/yundong/yundong' //运动
import bianqian from '@/view//index/bianqian/bianqian' //便签
import dushu from '@/view//index/dushu/dushu' //读书
import changge from '@/view//index/changge/changge' //唱歌
import xuexi from '@/view//index/xuexi/xuexi' //学习

// 新闻
import news from '@/view/news/news'
import newsmain from '@/view/news/newsmain/newsmain' //新闻内容页

// 音乐
import music from '@/view/music/music'
import meiritj from '@/view/music/meiritj/meiritj' //每日推荐
import gedan from '@/view/music/gedan/gedan' //歌单
import paihb from '@/view/music/paihb/paihb' //排行榜
import diantai from '@/view/music/diantai/diantai' //电台
import paobu from '@/view/music/paobu/paobu' //跑步

// 视频
import video from '@/view/video/video'
import videomain from '@/view/video/videomain/videomain' //视频内容页

// 我的
import home from '@/view/home/home'
import myshoucang from '@/view/home/myshoucang/myshoucang' //我的收藏
import mypinglun from '@/view/home/mypinglun/mypinglun' //我的评论
import mydianzan from '@/view/home/mydianzan/mydianzan' //我的点赞
import mylishi from '@/view/home/mylishi/mylishi' //浏览历史

import myqianbao from '@/view/home/myqianbao/myqianbao' //我的钱包
import myxiaoxi from '@/view/home/myxiaoxi/myxiaoxi' //消息通知
import mysixin from '@/view/home/mysixin/mysixin' //我的私信
import myzuopin from '@/view/home/myzuopin/myzuopin' //作品管理
import myshujia from '@/view/home/myshujia/myshujia' //我的书架
import mydingdan from '@/view/home/mydingdan/mydingdan' //我的订单
import mysaoma from '@/view/home/mysaoma/mysaoma' //扫一扫
import myfankui from '@/view/home/myfankui/myfankui' //用户反馈
import myshezhi from '@/view/home/myshezhi/myshezhi' //系统设置
import about from '@/view/home/myshezhi/about' //系统设置

// 登录
import login from '@/view/login/login' //登录
import sign from '@/view/login/sign' //注册

Vue.use(Router)

export default new Router({
  mode: 'history', // 去除初始进入路由后面的#
  routes: [{
    path: '/',
    redirect: '/index', // 初始路由'/'重定向至'/index'
  }, {
    path: '/index',
    name: '首页',
    component: index
  }, {
    path: '/pcIndex',
    name: 'PC端首页',
    component: pcIndex
  }, {
    path: '/index/qiandao',
    name: '签到',
    meta: {
      requireAuth: true,  //添加该字段，表示进入这个路由需要登录
    },
    component: qiandao
  }, {
    path: '/index/yundong',
    name: '运动',
    component: yundong
  }, , {
    path: '/index/bianqian',
    name: '便签',
    component: bianqian
  }, {
    path: '/index/dushu',
    name: '读书',
    component: dushu
  }, {
    path: '/index/changge',
    name: '唱歌',
    component: changge
  }, {
    path: '/index/xuexi',
    name: '学习',
    component: xuexi
  }, {
    path: '/news',
    name: '新闻',
    component: news
  }, {
    path: '/news/newsmain',
    name: '新闻内容页',
    component: newsmain
  }, {
    path: '/music',
    name: '音乐',
    component: music
  }, {
    path: '/music/meiritj',
    name: '每日推荐',
    meta: {
      requireAuth: true,  //添加该字段，表示进入这个路由需要登录
    },
    component: meiritj
  }, {
    path: '/music/gedan',
    name: '歌单',
    component: gedan
  }, {
    path: '/music/paihb',
    name: '排行榜',
    component: paihb
  }, {
    path: '/music/diantai',
    name: '电台',
    component: diantai
  }, {
    path: '/music/paobu',
    name: '跑步',
    component: paobu
  }, {
    path: '/video',
    name: '视频',
    component: video
  }, {
    path: '/video/videomain',
    name: '视频内容页',
    component: videomain
  }, {
    path: '/home',
    name: '我的',
    component: home
  }, {
    path: '/home/myshoucang',
    name: '我的收藏',
    meta: {
      requireAuth: true,  //添加该字段，表示进入这个路由需要登录
    },
    component: myshoucang
  }, {
    path: '/home/mypinglun',
    name: '我的评论',
    meta: {
      requireAuth: true,  //添加该字段，表示进入这个路由需要登录
    },
    component: mypinglun
  }, {
    path: '/home/mydianzan',
    name: '我的点赞',
    meta: {
      requireAuth: true,  //添加该字段，表示进入这个路由需要登录
    },
    component: mydianzan
  }, {
    path: '/home/mylishi',
    name: '浏览历史',
    meta: {
      requireAuth: true,  //添加该字段，表示进入这个路由需要登录
    },
    component: mylishi
  }, {
    path: '/home/myqianbao',
    name: '我的钱包',
    meta: {
      requireAuth: true,  //添加该字段，表示进入这个路由需要登录
    },
    component: myqianbao
  }, {
    path: '/home/myxiaoxi',
    name: '消息通知',
    meta: {
      requireAuth: true,  //添加该字段，表示进入这个路由需要登录
    },
    component: myxiaoxi
  }, {
    path: '/home/mysixin',
    name: '我的私信',
    meta: {
      requireAuth: true,  //添加该字段，表示进入这个路由需要登录
    },
    component: mysixin
  }, {
    path: '/home/myzuopin',
    name: '作品管理',
    meta: {
      requireAuth: true,  //添加该字段，表示进入这个路由需要登录
    },
    component: myzuopin
  }, {
    path: '/home/myshujia',
    name: '我的书架',
    meta: {
      requireAuth: true,  //添加该字段，表示进入这个路由需要登录
    },
    component: myshujia
  }, {
    path: '/home/mydingdan',
    name: '我的订单',
    meta: {
      requireAuth: true,  //添加该字段，表示进入这个路由需要登录
    },
    component: mydingdan
  }, {
    path: '/home/mysaoma',
    name: '扫一扫',
    component: mysaoma
  }, {
    path: '/home/myfankui',
    name: '用户反馈',
    meta: {
      requireAuth: true,  //添加该字段，表示进入这个路由需要登录
    },
    component: myfankui
  }, {
    path: '/home/myshezhi',
    name: '系统设置',
    component: myshezhi
  }, {
    path: '/home/myshezhi/about',
    name: '关于我们',
    component: about
  },{
    path: '/login',
    name: '登录',
    component: login
  }, {
    path: '/sign',
    name: '注册',
    component: sign
  }]
})

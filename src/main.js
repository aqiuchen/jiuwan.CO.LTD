import Vue from 'vue'
import App from './App'
import router from './router'

// 使用vuex
import Vuex from 'vuex'
import store from './store/store' //引入store

// 使用axios
import axios from 'axios'
// import '../config/axios' //引入axios拦截器
// import VueAxios from 'vue-axios'
import qs from 'qs' //qs是axios库中带的，直接引入就可以
Vue.prototype.axios = axios; //全局注册，使用方法为:this.axios
Vue.prototype.qs = qs; //全局注册，使用方法为:this.qs

// 全局注册使用移动端布局的rem公共js
import './assets/js/rem-taobao-vue.js'

// 全局挂载swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, Vuex, router, axios)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

/*
  to: 即将要进入的目标 路由对象
  from: 当前导航正要离开的路由
  next: 函数，一定要调用该方法来resolve这个钩子
  next(): 进行管道中的下一个钩子
  next(false): 中断当前的导航
  next('/'): 或next({path:'/'})，当前导航被中断，然后进行一个新的导航
*/
router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  if (to.meta.requireAuth) { //判断该路由是否需要登录权限
    if (localStorage.getItem('account')) { //判断本地是否存在存储的账户
      next();
    } else {
      if (to.path === '/login') {
        next();
      } else {
        next({
          path: '/login',
        })
      }
    }
  } else {
    next();
  };

  // 如果本地存在token则不允许直接跳转到登录页面
  if (to.fullPath == '/login') {
    if (localStorage.getItem('account')) {
      next({
        path: from.fullPath
      })
    } else {
      next();
    }
  }
})

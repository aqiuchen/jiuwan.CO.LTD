import axios from 'axios'

// 配置默认的host,假如你的API host是:http://api.htmlx.club

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    if (window.localStorage.getItem('access-token')) {
      config.headers.Authorization = window.localStorage.getItem('access-token');
    }
    console.log('access-token: ' + window.localStorage.getItem('access-token'));

    // 判断当前路由是否需要登录，若需要登录则跳转登录页面，同时携带当前页面信息通过路由传递，登录后直接跳转回当前页面
    /* if(this.$route.path == '/home'){
      router.replace({
        path: '/login',
        query: {redirect: router.currentRoute.fullPath}
      })
    } */

    /* if(store.state.token){  //判断是否存在token，若存在，则每个http header都加上token
      config.headers.Authorization = `token $(store.state.token)`
    } */
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response;
  },
  error => {
    // 对响应错误做点什么
    /* if(error.response){
      switch(error.response.status){
        case 401:
          // 返回401清除token信息并跳转到登录页面
          store.commit(types.LOGOUT);
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    return Promise.reject(error.response.data)  //返回接口返回的错误信息 */

    return Promise.reject(error)
  });

  export default axios

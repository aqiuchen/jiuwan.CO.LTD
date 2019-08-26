# 九湾科技

> A Vue.js project

## Build Setup

``` bash
完整项目流程：

全局安装部分（这部分属于全局安装，只需要装一次就好了）

1、安装node.js
下载地址：https://nodejs.org/zh-cn/

2、安装淘宝镜像
npm install cnpm --registry=https://registry.npm.taobao.org -g

3、安装vue
npm install vue

4、安装 vue-cli
cnpm install --global vue-cli

局部安装部分（安装到你的项目文件夹下）

1、创建项目
vue init webpack vueTest

2、进入项目文件目录
cd vueTest

3、安装依赖
cnpm install

4、安装vuex
cnpm install vuex
main.js引入
----------
import Vuex from 'vuex'
Vue.use(Vuex)

5、安装vue-router（安装vue时直接提示是否安装，选择是后则不再执行此命令）
cnpm install vue-router

6、安装axios
cnpm install axios    //生产环境
npm install qs.js --save　　//它的作用是能把json格式的直接转成data所需的格式
main.js引入
--------------
import axios from 'axios'
import qs from 'qs'

Vue.prototype.axios = axios    //全局注册，使用方法为:this.axios
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs

7、安装swiper（选装）
cnpm install vue-awesome-swiper --save （目前使用该安装demo才能生效，专门针对vue开发的swiper）

8、淘宝rem布局 lib-flexible（选装）
cnpm i lib-flexible --save-dev
main.js引入
-----------------
import 'lib-flexible'

9、运行项目
npm run dev

10、打包项目
npm run build
```

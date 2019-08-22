<template>
  <div class="myshezhi">
    <!-- 返回组件 -->
    <go-back :homeTitle="homeTitle"></go-back>
    <!-- 弹窗组件 -->
    <pops v-show="isPops" @popsBtnFalse="popsBtnFalse" @popsBtnTrue="popsBtnTrue" :popsMessage="popsMessage"></pops>
    <div class="myshezhi_main">
      <!-- 上部 -->
      <div class="myshezhi_main_top">
        <router-link v-for="(myshezhi,index) in myshezhis" :to="myshezhi.shezhiPath" :key="index">
          <h5>{{myshezhi.shezhiTitle}}</h5>
          <img src="../../../../static/images/home/home_rights.png" alt="向右">
        </router-link>
      </div>
      <!-- 中部 -->
      <div class="myshezhi_main_content">
        <div class="myshezhi_content_list">
          <h5>夜间模式</h5>
          <div class="myshezhi_content_radio">
            <input type="checkbox" v-model="radioModel1" @click="checkClick1()">
            <img :src="ckImg1" alt="选择图标">
          </div>
        </div>
        <div class="myshezhi_content_list">
          <h5>清除缓存</h5>
          <img src="../../../../static/images/home/home_rights.png" alt="向右">
        </div>
        <div class="myshezhi_content_list">
          <h5>字体大小</h5>
          <img src="../../../../static/images/home/home_rights.png" alt="向右">
        </div>
        <div class="myshezhi_content_list">
          <h5>提示音开关</h5>
          <div class="myshezhi_content_radio">
            <input type="checkbox" v-model="radioModel2" @click="checkClick2()">
            <img :src="ckImg2" alt="选择图标">
          </div>
        </div>
        <div class="myshezhi_content_list">
          <h5>非WIFI网络流量</h5>
          <img src="../../../../static/images/home/home_rights.png" alt="向右">
        </div>
        <div class="myshezhi_content_list">
          <h5>非WIFI网络播放提醒</h5>
          <div class="myshezhi_content_radio">
            <input type="checkbox" v-model="radioModel3" @click="checkClick3()">
            <img :src="ckImg3" alt="选择图标">
          </div>
        </div>
        <div class="myshezhi_content_list">
          <h5>H5广告过滤</h5>
          <div class="myshezhi_content_radio">
            <input type="checkbox" v-model="radioModel4" @click="checkClick4()">
            <img :src="ckImg4" alt="选择图标">
          </div>
        </div>
      </div>
      <!-- 下部 -->
      <div class="myshezhi_main_down">
        <router-link :to="{path:'/home/myshezhi/about', query:{title:'关于九湾科技'}}">
          <h5>关于九湾科技</h5>
          <img src="../../../../static/images/home/home_rights.png" alt="向右">
        </router-link>
      </div>
      <!-- 底部退出 -->
      <div class="myshezhi_out" @click="clickOut">{{out}}</div>
    </div>
  </div>
</template>

<script>
  import goBack from '../../../components/goBack.vue';
  import pops from '../../../components/pops.vue';
  export default {
    data() {
      return {
        isPops: false, //弹窗显示隐藏
        popsMessage: '', //弹窗内容
        myshezhis: [{
          shezhiPath: '/home/myshezhi',
          shezhiTitle: '编辑资料'
        }, {
          shezhiPath: '/home/myshezhi',
          shezhiTitle: '账号和隐私设置'
        }, {
          shezhiPath: '/home/myshezhi',
          shezhiTitle: '黑名单'
        }],
        homeTitle: '', //用于传递值到goBack组件
        radioModel1: false,
        radioModel2: false,
        radioModel3: false,
        radioModel4: false,
        ckImg1: require('../../../../static/images/home/home_close.png'),
        ckImg2: require('../../../../static/images/home/home_close.png'),
        ckImg3: require('../../../../static/images/home/home_close.png'),
        ckImg4: require('../../../../static/images/home/home_close.png'),
        checkboxImg: require('../../../../static/images/home/home_close.png'),
        checkboxImgs: require('../../../../static/images/home/home_open.png'),
        out: '退出登录',
      }
    },
    mounted() {
      //用于传递值到goBack组件，返回组件的title
      this.homeTitle = this.$route.query.title;

      // 如果当前未登录，底部显示登录，已登录则显示退出登录
      const dl = JSON.parse(localStorage.getItem('account'));
      if (dl == null || dl == undefined || dl == ' ') {
        this.out = '登录';
      } else {
        this.out = '退出登录';
      }

      //
    },
    computed: {

    },
    components: {
      goBack,
      pops
    },
    methods: {
      // 点击退出
      clickOut() {
        if (this.out == '登录') {
          this.$router.replace('/login');
        } else if (this.out == '退出登录') {
          // 弹出提示框
          this.isPops = true;
          // 将提示内容传递到提示框内
          this.popsMessage = '是否退出登录？退出登录后部分功能将不可用！';
        }
      },
      // 接收提示框组件取消按钮传递的值
      popsBtnFalse(data) {
        this.isPops = data;
      },
      // 将提示框组件确定按钮的方法传递过去
      popsBtnTrue() {
        // 清空localStorage中account的信息
        localStorage.removeItem('account');
        this.$router.replace('/home');
      },
      //点击复选框
      checkClick1(){
        if(this.radioModel1 == false){
          this.ckImg1 = this.checkboxImgs;
        }else{
          this.ckImg1 = this.checkboxImg;
        }
      },
      checkClick2(){
        if(this.radioModel2 == false){
          this.ckImg2 = this.checkboxImgs;
        }else{
          this.ckImg2 = this.checkboxImg;
        }
      },checkClick3(){
        if(this.radioModel3 == false){
          this.ckImg3 = this.checkboxImgs;
        }else{
          this.ckImg3 = this.checkboxImg;
        }
      },checkClick4(){
        if(this.radioModel4 == false){
          this.ckImg4 = this.checkboxImgs;
        }else{
          this.ckImg4 = this.checkboxImg;
        }
      }
    },
    watch: {

    }
  }
</script>

<style>
  @import '../../../assets/css/home/myshezhi.css';
</style>

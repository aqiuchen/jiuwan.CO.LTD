<template>
  <div class="zhishi">
    <go-back :homeTitle="homeTitle"></go-back>
    <div class="zhishi_main">
      <!-- 头部 -->
      <div class="zhishi_top">
        <h3>欢迎来到知识累计</h3>
        <p>您好：<strong>{{userName}}</strong></p>
        <p>选择类型：<b>{{zsType}}</b></p>
      </div>
      <div class="zhishi_btn">
        <!-- <button @click="clickZs" :disabled="isZsbtn" :class="zsBtnClass">{{zsBtn}}</button> -->
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import goBack from '../../../components/goBack.vue';
  import {mapState, mapActions, mapGetters} from 'vuex';
  export default{
    data(){
      return{
        homeTitle: '知识积累',
        userName: '',
        zsType: '',
      }
    },
    mounted() {
      // 获取登录信息
      let info = JSON.parse(localStorage.getItem('account'));
      if (info == null || info == undefined || info == ' ') {
        this.userName = '未登录';
      } else {
        this.userName = info.phoneNumber;
      };
      this.zsType = this.$route.query.title;
    },
    computed:{
      ...mapState({
        // zsTime:state => state.date.zsTime,
      }),
    },
    methods:{

    },
    components:{
      goBack,
    }
  }
</script>

<style>
.zhishi_main{
  padding: 1.1rem 4%;
}
/* 榜单 */
.zhishi_top{
  border: 0.05rem solid #42B983;
  border-radius: 0.2rem;
  padding: 0.1rem;
  margin-bottom: 0.3rem;
}
.zhishi_top h3{
  font-size: 0.36rem;
  text-align: center;
  margin-bottom: 0.2rem;
}
.zhishi_top p{
  margin-top: 0.1rem;
  font-size: 0.28rem;
}
.zhishi_top i{
  color: red;
}
.zhishi_btn{
  width: 100%;
  text-align: center;
  margin: 0.2rem 0;
}
.zhishi_btn>button{
  width: 5rem;
  height: 0.8rem;
  line-height: 0.8rem;
  color: white;
  font-size: 0.36rem;
  border: none;
  border-radius: 0.1rem;
}
.zhishiStop{
   background-color: #42B983;
}
.zhishiPlay{
  background-color: #999999;
}
</style>

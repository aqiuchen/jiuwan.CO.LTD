<template>
  <div class="kaoshi">
    <go-back :homeTitle="homeTitle"></go-back>
    <div class="kaoshi_main">
      <!-- 头部 -->
      <div class="kaoshi_top">
        <h3>欢迎来到考试系统</h3>
        <p>您好：<strong>{{userName}}</strong></p>
        <p>本次考试类型：<b>{{ksType}}</b></p>
        <p>本次考试时间：120分钟</p>
        <p>本次考试用时：<b>{{xxTime}}</b> 分钟</p>
        <p>本次考试得分：<i>{{ksScore}}</i> 分</p>
      </div>
      <div class="kaoshi_jsq">考试计时：{{timer}}</div>
      <div class="kaoshi_btn">
        <button @click="clickKs" :disabled="isKsbtn" :class="ksBtnClass">{{ksBtn}}</button>
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
        homeTitle: '考试系统',
        userName: '',
        ksType: '',
      }
    },
    mounted() {
      // 获取登录信息
      let info = JSON.parse(localStorage.getItem('account'));
      if (info == null || info == undefined || info == ' ') {
        this.userName = '未登录';
      } else {
        this.userName = info.phoneNumber;
      }
      this.ksType = this.$route.query.title;
    },
    computed:{
      ...mapState({
        timer:state => state.date.timer,
        xxTime:state => state.date.xxTime,
        ksBtn:state => state.ksTest.ksBtn,
        ksScore:state => state.ksTest.ksScore,
        isKsbtn:state => state.ksTest.isKsbtn,
        ksBtnClass:state => state.ksTest.ksBtnClass,
      }),
    },
    methods:{
      // 开始考试
      clickKs(){
        // 开始计时
        this.$store.commit('start');
        this.$store.commit('ksIsbtn',true);
        this.$store.commit('ksBtns','正在考试');
        this.$router.replace('/index/xuexi/kaoshi/ksTest');
      },
    },
    components:{
      goBack,
    }
  }
</script>

<style>
.kaoshi_main{
  padding: 1.1rem 4%;
}
/* 榜单 */
.kaoshi_top{
  border: 0.05rem solid #42B983;
  border-radius: 0.2rem;
  padding: 0.1rem;
  margin-bottom: 0.3rem;
}
.kaoshi_top h3{
  font-size: 0.36rem;
  text-align: center;
  margin-bottom: 0.2rem;
}
.kaoshi_top p{
  margin-top: 0.1rem;
  font-size: 0.28rem;
}
.kaoshi_top i{
  color: red;
}
.kaoshi_jsq{
  text-align: center;
  font-size: 0.3rem;
}
.kaoshi_btn{
  width: 100%;
  text-align: center;
  margin: 0.2rem 0;
}
.kaoshi_btn>button{
  width: 5rem;
  height: 0.8rem;
  line-height: 0.8rem;
  color: white;
  font-size: 0.36rem;
  border: none;
  border-radius: 0.1rem;
}
.kaoshiStop{
   background-color: #42B983;
}
.kaoshiPlay{
  background-color: #999999;
}
</style>

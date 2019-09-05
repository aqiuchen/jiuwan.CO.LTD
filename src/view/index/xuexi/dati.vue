<template>
  <div class="dati">
    <go-back :homeTitle="homeTitle"></go-back>
    <div class="dati_main">
      <!-- 头部 -->
      <div class="dati_top">
        <h3>欢迎来到答题比赛</h3>
        <p>您好：<strong>{{userName}}</strong></p>
        <p>本次答题类型：<b>{{dtType}}</b></p>
        <p>本次答题时间：120分钟</p>
        <p>本次答题用时：<b>{{xxTime}}</b> 分钟</p>
        <p>本次答题得分：<i>{{dtScore}}</i> 分</p>
      </div>
      <div class="dati_jsq">答题计时：{{timer}}</div>
      <div class="dati_btn">
        <button @click="clickDt" :disabled="isDtbtn" :class="dtBtnClass">{{dtBtn}}</button>
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
        homeTitle: '答题比赛',
        userName: '',
        dtType: '',
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
      this.dtType = this.$route.query.title;
    },
    computed:{
      ...mapState({
        timer:state => state.date.timer,
        xxTime:state => state.date.xxTime,
        dtBtn:state => state.dtTest.dtBtn,
        dtScore:state => state.dtTest.dtScore,
        isDtbtn:state => state.dtTest.isDtbtn,
        dtBtnClass:state => state.dtTest.dtBtnClass,
      }),
    },
    methods:{
      // 开始答题
      clickDt(){
        // 开始计时
        this.$store.commit('start');
        this.$store.commit('dtIsbtn',true);
        this.$store.commit('dtBtns','正在答题');
        this.$router.replace('/index/xuexi/dati/dtTest');
      },
    },
    components:{
      goBack,
    }
  }
</script>

<style>
.dati_main{
  padding: 1.1rem 4%;
}
/* 榜单 */
.dati_top{
  border: 0.05rem solid #42B983;
  border-radius: 0.2rem;
  padding: 0.1rem;
  margin-bottom: 0.3rem;
}
.dati_top h3{
  font-size: 0.36rem;
  text-align: center;
  margin-bottom: 0.2rem;
}
.dati_top p{
  margin-top: 0.1rem;
  font-size: 0.28rem;
}
.dati_top i{
  color: red;
}
.dati_jsq{
  text-align: center;
  font-size: 0.3rem;
}
.dati_btn{
  width: 100%;
  text-align: center;
  margin: 0.2rem 0;
}
.dati_btn>button{
  width: 5rem;
  height: 0.8rem;
  line-height: 0.8rem;
  color: white;
  font-size: 0.36rem;
  border: none;
  border-radius: 0.1rem;
}
.datiStop{
   background-color: #42B983;
}
.datiPlay{
  background-color: #999999;
}
</style>

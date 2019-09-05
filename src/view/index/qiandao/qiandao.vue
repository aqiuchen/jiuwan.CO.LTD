<template>
  <div class="qiandao">
    <go-back :homeTitle="homeTitle"></go-back>
    <div class="qiandao_main">
      <!-- 时间位置信息 -->
      <div class="qiandao_top">
        <span>当前位置: {{qiandaoDz}}</span>
        <span>当前时间: {{longTime}}</span>
      </div>
      <!-- 地图 -->
      <div class="qiandao_map">
        <img src="../../../../static/images/static/banner-app.png" alt="">
      </div>
      <!-- 签到按钮 -->
      <div class="qiandao_btn">
        <button @click="qiandaoClick" :disabled="isDisabled">{{qiandaoBtn}}</button>
      </div>
      <!-- 签到显示 -->
      <div class="qiandao_ts">
        <div>
          <p>签到时间：</p><span>{{qiandaoDate}}</span>
        </div>
        <div>
          <p>签到地点：</p><span>{{qiandaoDzs}}</span>
        </div>
      </div>
      <!-- 提醒信息 -->
      <div class="qiandao_tx">
        <p>按时签到，坚持自律，拥有健康好身体！</p>
      </div>
    </div>
  </div>
</template>

<script>
  import goBack from '../../../components/goBack.vue';
  import {mapState, mapActions, mapGetters} from 'vuex';
  export default {
    data() {
      return {
        homeTitle: '',
        qiandaoDz: '航天科技大厦',
        qiandaoBtn: '签到',
        isDisabled: false, //是否禁用按钮
        qiandaoDate: '未签到', //签到时间
        qiandaoDzs: '未签到', //用于存放签到地点
      }
    },
    mounted() {
      this.homeTitle = this.$route.query.title;

      // 调用时间函数
      setInterval(() => {
        this.$store.commit('dates');
      }, 1000)
    },
    computed: {
      ...mapState({
        shortTime:state => state.date.shortTime,
        longTime:state => state.date.longTime,
      }),
    },
    components: {
      goBack
    },
    methods: {
      // 点击签到
      qiandaoClick() {
        this.isDisabled = true;
        this.qiandaoBtn = '已签到';
        this.qiandaoDzs = this.qiandaoDz;
        this.qiandaoDate = this.$store.state.date.shortTime;
        this.$store.commit('dates');
      }
    }
  }
</script>

<style>
  .qiandao {
    width: 94%;
    padding: 1rem 3% 0.2rem;
  }

  .qiandao_top {
    width: 100%;
    font-size: 0.26rem;
    display: flex;
    justify-content: space-between;
  }

  .qiandao_map {
    margin: 0.3rem 0 0.5rem;
  }

  .qiandao_map img {
    width: 100%;
  }

  .qiandao_btn {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .qiandao_btn button {
    width: 2rem;
    height: 2rem;
    border: 0.02rem solid #17B3A3;
    background-color: #42B983;
    color: white;
    border-radius: 50%;
    font-size: 0.4rem;
  }

  .qiandao_ts {
    width: 100%;
    margin: 1rem 0;
  }

  .qiandao_ts>div {
    display: flex;
    height: 0.4rem;
    line-height: 0.4rem;
    margin: 0.2rem 0 0 0;
    font-size: 0.3rem;
  }

  .qiandao_ts span {
    color: #42B983;
  }

  .qiandao_tx {
    font-size: 0.34rem;
    text-align: center;
  }

  .qiandao_tx p {
    margin-top: 0.2rem;
    color: #42B983;
  }
</style>

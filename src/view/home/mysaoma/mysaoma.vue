<template>
  <div class="mysaoma">
    <go-back :homeTitle="homeTitle"></go-back>
    <div class="mysaoma_main">
      <p>发布地址二维码</p>
      <img src="../../../../static/images/home/ewm.png" alt="发布二维码">
      <span>保存图片后可通过微信、QQ、支付宝扫码体验</span>
    </div>
  </div>
</template>

<script>
  import goBack from '../../../components/goBack.vue';
  export default{
    data(){
      return{
        homeTitle: '',
      }
    },
    mounted() {
      this.homeTitle = this.$route.query.title;
    },
    components:{
      goBack
    }
  }
</script>

<style>
  .mysaoma_main{
    width: 92%;
    padding: 1rem 4%;
    text-align: center;
  }
  .mysaoma_main p{
    font-size: 0.4rem;
    margin: 0.5rem 0;
  }
  .mysaoma_main span{
    display: block;
    width: 100%;
    font-size: 0.3rem;
    margin-top: 0.3rem;
  }
</style>

<template>
  <div class="myfankui">
    <go-back :homeTitle="homeTitle"></go-back>
    <!-- 弹窗组件 -->
    <pops v-show="isPops" @popsBtnFalse="popsBtnFalse" @popsBtnTrue="popsBtnTrue" :popsMessage="popsMessage"></pops>
    <div class="myfankui_main">
      <h5>我们会在3个工作日内对您的反馈进行回复！</h5>
      <form action="">
        <textarea maxlength="300" v-model="fkMain" placeholder="限制300字"></textarea>
        <div class="myfankui_main_phone">
          <p>联系方式：</p>
          <input type="text" v-model="fkNumber" placeholder="邮箱/联系电话" maxlength="30">
        </div>
      </form>
      <span>{{fkTs}}</span>
      <button @click="fankuiSubmit">提交</button>
    </div>
  </div>
</template>

<script>
  import goBack from '../../../components/goBack.vue';
  import pops from '../../../components/pops.vue';
  export default {
    data() {
      return {
        homeTitle: '',
        isPops: false, //弹窗显示隐藏
        popsMessage: '', //弹窗内容
        fkMain: '',
        fkNumber: '',
        fkTs: '',
      }
    },
    mounted() {
      this.homeTitle = this.$route.query.title;
    },
    components: {
      goBack,
      pops
    },
    methods:{
      fankuiSubmit(){
        if(this.fkMain == null || this.fkMain == undefined || this.fkMain == ''){
          this.fkTs = '反馈内容不能为空';
        }else if(this.fkNumber == null || this.fkNumber == undefined || this.fkNumber == ''){
          this.fkTs = '联系方式不能为空';
        }else{
          this.fkTs = ' ';
          // 弹出提示框
          this.isPops = true;
          // 将提示内容传递到提示框内
          this.popsMessage = '提交成功，是否跳转到我的页面？';
        }
      },
      // 接收提示框组件取消按钮传递的值
      popsBtnFalse(data) {
        this.isPops = data;
        this.fkMain = this.fkNumber = '';
      },
      // 将提示框组件确定按钮的方法传递过去
      popsBtnTrue() {
        this.$router.replace('/home');
      }
    }
  }
</script>

<style>
  .myfankui {
    width: 94%;
    padding: 1.2rem 3% 0.2rem;
  }
  .myfankui_main{
    text-align: center;
  }
  .myfankui_main h5{
    font-size: 0.32rem;
  }
  .myfankui_main textarea{
    width: 96%;
    min-height: 5rem;
    padding: 0.1rem 2%;
    font-size: 0.3rem;
    margin: 0.4rem 0;
    line-height: 0.38rem;
    border: 0.02rem solid  #42B983;
  }
  .myfankui_main_phone{
    display: flex;
    padding: 0.2rem 0;
  }
  .myfankui_main_phone p{
    font-size: 0.32rem;
    height: 0.6rem;
    line-height: 0.6rem;
  }
  .myfankui_main_phone input{
    width: 5rem;
    border: 0.02rem solid #42B983;
    height: 0.6rem;
    font-size: 0.3rem;
    padding: 0 0.1rem;
  }
  .myfankui_main span{
    display: block;
    height: 0.4rem;
    width: 100%;
    color: red;
    font-size: 0.28rem;
    margin: 0.3rem 0 0.1rem 0;
  }
  .myfankui_main button{
    width: 80%;
    height: 0.8rem;
    background-color: #42B983;
    color: white;
    border: none;
    border-radius: 0.1rem;
    font-size: 0.36rem;
  }
</style>

<template>
  <div class="pops">
    <!-- 遮罩层 -->
    <div class="pops_zzc" @touchmove.prevent></div>
    <!-- 提示框 -->
    <div class="pops_main">
      <!-- 上部提示内容 -->
      <div class="pops_ts">{{popsMessage}}</div>
      <!-- 下部按钮 -->
      <div class="pops_btn">
        <span class="pops_cancel" @click="clickPcl">取消</span>
        <span class="pops_confirm" @click="clickPcm">确定</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // 此处存在bug，提示框虽然遮住了屏幕，但超出屏幕高度的内容还是能滑动，需禁止滑动
      }
    },
    mounted() {

    },
    methods: {
      // 取消
      clickPcl() {
        this.$emit('popsBtnFalse', false);
      },
      // 确定
      clickPcm() {
        this.$emit('popsBtnTrue');
      },
    },
    //接收父组件传递的提示内容
    props: ['popsMessage']
  }
</script>
<style>
  .pops {
    text-align: center;
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 30;
  }

  /* 遮罩层 */
  .pops_zzc {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 15;
    background-color: black;
    opacity: 0.5;
  }

  /* 提示框 */
  .pops_main {
    width: 4.2rem;
    height: 2.6rem;
    background-color: white;
    position: absolute;
    z-index: 20;
    border-radius: 0.05rem;
  }

  .pops_ts {
    height: 1.4rem;
    font-size: 0.3rem;
    line-height: 0.4rem;
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pops_btn {
    width: 90%;
    padding: 0.2rem 5%;
    border-top: 0.02rem solid #dddddf;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
  }

  .pops_btn span {
    width: 1.2rem;
    height: 0.6rem;
    line-height: 0.65rem;
    border: none;
    text-align: center;
    font-size: 0.28rem;
    border-radius: 0.1rem;
    color: white;
  }

  .pops_btn .pops_confirm {
    background-color: #17b3a3;
  }

  .pops_btn .pops_cancel {
    background-color: #17b3a3;
  }
</style>

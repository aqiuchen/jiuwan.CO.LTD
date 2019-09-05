<template>
  <div class="datiPops">
    <!-- 遮罩层 -->
    <div class="datiPops_zzc" @touchmove.prevent></div>
    <div class="datiPops_main">
      <!-- 上部提示内容 -->
      <div class="datiPops_ts">{{datiPopsTitle}}</div>
      <!-- 中部题目内容 -->
      <div class="datiPops_content">
        内容部分
      </div>
      <!-- 下部按钮 -->
      <div class="datiPops_btn">
        <span class="datiPops_last" @click="clickDpl">上一题</span>
        <span class="datiPops_next" @click="clickDpn">下一题</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        datiPopsTitle: '单选题',
      }
    },
    mounted(){

    },
    methods:{
      // 上一题
      clickDpl(){
        console.log("上一题");
      },
      // 下一题
      clickDpn(){
        console.log("下一题");
      },
    }
  }
</script>

<style>
.datiPops{
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
.datiPops_zzc {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 15;
  background-color: black;
  opacity: 0.1;
}
/* 内容部分 */
.datiPops_main {
    width: 6rem;
    height: 4rem;
    background-color: white;
    position: absolute;
    z-index: 20;
    border-radius: 0.05rem;
  }
</style>

<template>
  <div class="goBack">
    <div class="goBack_top" @click="clickGoBack">
      <img src="../../static/images/static/return.png" alt="返回图标" >
    </div>
    {{homeTitle}}
    <div class="goBack_share" @click="goBackShare">
      <img src="../../static/images/static/more.png" alt="分享">
    </div>
  </div>
</template>
<script>
  export default{
    props:['homeTitle'],
    data(){
      return{

      }
    },
    mounted(){

    },
    methods:{
      // 点击返回上一级
      clickGoBack(){
        this.$router.back(-1);
      },
      // 点击分享
      goBackShare(){
        console.log('顶部分享');
      }
    },
    computed:{

    }
  }
</script>

<style>
.goBack{
  width: 92%;
  padding: 0.2rem 4%;
  height: 0.4rem;
  line-height: 0.4rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  border-bottom: 0.02rem solid #dddddf;
  text-align: center;
  font-size: 0.32rem;
  z-index: 9;
}
.goBack img{
  width: 0.4rem;
  height: 0.4rem;
}
.goBack_top{
  float: left;
}
.goBack_share{
  float: right;
}
</style>

<template>
  <div class="videomain">
    <go-back :homeTitle="homeTitle"></go-back>
    <div>详细视频页面</div>
  </div>
</template>

<script>
  import goBack from '../../../components/goBack.vue';
  export default{
    data(){
      return{
        homeTitle: '视频',
      }
    },
    mounted() {

    },
    components:{
      goBack
    }
  }
</script>

<style>
</style>

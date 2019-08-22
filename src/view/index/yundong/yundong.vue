<template>
  <div>
    <go-back :homeTitle="homeTitle"></go-back>
    <div>运动</div>
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
</style>

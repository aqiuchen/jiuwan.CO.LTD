<template>
  <div class="zsShiti">
    <!-- 弹窗组件 -->
    <pops v-show="isPops" @popsBtnFalse="popsBtnFalse" @popsBtnTrue="popsBtnTrue" :popsMessage="popsMessage"></pops>
    <div class="zsShiti_main">
      {{errMassage}}
      <!-- <div class="zsShiti_btn">
        <button @click="dtbtnLast">上一题</button>
        <button @click="dtbtnNext">下一题</button>
        <button @click="dtbtnSubmit">交卷</button>
      </div> -->
    </div>
  </div>
</template>

<script>
  import pops from '../../../components/pops.vue';
  import {mapState, mapActions, mapGetters} from 'vuex';
  export default{
    data(){
      return{
        isPops: false, //弹窗显示隐藏
        popsMessage: '', //弹窗内容
        errMassage: '', //请求失败提示
      }
    },
    mounted(){
      this.axios({
        // url: 'http://localhost:8081/static/json/dt/dt-es6.json',
        url: 'http://192.168.1.6:8081/static/json/dt/dt-es6.json',
        method: 'GET'
      }).then(res => {
        console.log("data数据："+res.data)
        // this.$store.commit('dtLoding', res.data.Vue);
      }).catch(err => {
        this.errMassage = '数据请求失败！'
        console.log(err)
      })
    },
    computed:{
      ...mapState({
        /* dtType:state => state.dtTest.dtType,
        dtTitle:state => state.dtTest.dtTitle,
        dtId:state => state.dtTest.dtId,
        dtTs:state => state.dtTest.dtTs, */
      })
    },
    methods:{
      // 接收提示框组件取消按钮传递的值
      popsBtnFalse(data) {
        this.$router.replace('/index/xuexi/dati');
      },
      // 将提示框组件确定按钮的方法传递过去
      popsBtnTrue() {
        this.$router.replace('/index/xuexi/dati');
      }
    },
    components:{
      pops,
    }
  }
</script>

<style>
.zsShiti{
  border: 0.02rem solid #999999;
  padding: 0.2rem;
  border-radius: 0.2rem;
  /* height: 4rem; */
  box-shadow: 0 0 0.1rem #999999;;
}
.zsShiti_main{
  /* border: 1px solid red; */
}
.zsShiti_main h3{
  font-size: 0.3rem;
  border-bottom: 0.02rem solid #ddd;
  padding-bottom: 0.05rem;
}
.zsShiti_content{
  /* border: 1px solid red; */
}
.zsShiti_content h5{
  font-size: 0.3rem;
  margin: 0.1rem 0 0.2rem 0;
  font-weight: normal;
  color: #42B983;
}
.zsShiti_content input{
  width: 0.3rem;
  height: 0.3rem;
  float: left;
  margin: 0.06rem 0.1rem 0 0;
}
.zsShiti_content label{
  display: block;
  float: left;
  width: 6rem;
  font-size: 0.28rem;
  text-align: justify;
}
.zsShiti_content form>div{
  overflow: hidden;
  margin-top: 0.1rem;
}
.zsShiti_ts{
  width: 100%;
  height: 0.2rem;
  line-height: 0.2rem;
  text-align: center;
  font-size: 0.24rem;
  color: red;
  margin: 0.1rem 0;
}
.zsShiti_btn{
  margin-top: 0.2rem;
  display: flex;
  width: 90%;
  padding: 0 5%;
  justify-content: space-around;
}
.zsShiti_btn button{
  width: 1.4rem;
  height: 0.6rem;
  line-height: 0.6rem;
  background-color: #42B983;
  color: white;
  font-size: 0.28rem;
  border: none;
  border-radius: 0.1rem;
}
</style>

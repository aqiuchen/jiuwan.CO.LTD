<template>
  <div class="dtShiti">
    <!-- 弹窗组件 -->
    <pops v-show="isPops" @popsBtnFalse="popsBtnFalse" @popsBtnTrue="popsBtnTrue" :popsMessage="popsMessage"></pops>
    <div class="dtShiti_main">
      {{errMassage}}
      <h3>{{dtType}}</h3>
      <div class="dtShiti_content">
        <h5>{{dtTitle}}</h5>
        <form>
          <div v-for="(dt,index) in dtOption" :key="index">
            <input type="radio" :id="index" name="dtMain" :value="dtOption[index]" @click="getRadioVal(dtOption[index])"
              v-model="dtModel">
            <label :for="index">{{dtOption[index]}}</label>
          </div>
        </form>
      </div>
      <p class="dtShiti_ts">{{dtTs}}</p>
      <div class="dtShiti_btn">
        <button @click="dtbtnLast">上一题</button>
        <button @click="dtbtnNext">下一题</button>
        <button @click="dtbtnSubmit">交卷</button>
      </div>
    </div>
  </div>
</template>

<script>
  import pops from '../../../components/pops.vue';
  import {mapState, mapActions, mapGetters} from 'vuex';
  export default {
    data() {
      return {
        isPops: false, //弹窗显示隐藏
        popsMessage: '', //弹窗内容
        errMassage: '', //请求失败提示
        dtModel: [],
      }
    },
    mounted() {
      this.axios({
        // url: 'http://localhost:8081/static/json/dt/dt-vue.json',
        url: 'http://192.168.1.6:8081/static/json/dt/dt-vue.json',
        method: 'GET',
      }).then(res => {
        this.$store.commit('dtLoding', res.data.Vue);
      }).catch(err => {
        this.errMassage = '数据请求失败！'
        console.log(err)
      })
    },
    computed: {
      ...mapState({
        dtType: state => state.dtTest.dtType,
        dtTitle: state => state.dtTest.dtTitle,
        dtId: state => state.dtTest.dtId,
        dtTs: state => state.dtTest.dtTs,
        dtOption: state => state.dtTest.dtOption,
      })
    },
    methods: {
      // 获取当前选项的值
      getRadioVal(value) {
        // 将id和选择的值放进对象中传过去
        let obj = {
          dtId: this.$store.state.dtTest.dtId,
          dtValue: value
        };
        this.$store.commit('dtValues', obj);
      },
      // 上一题
      dtbtnLast() {
        this.$store.commit('dtAnswer', this.$store.state.dtTest.dtValue);
        this.$store.commit('dtLast');
      },
      // 下一题
      dtbtnNext() {
        this.$store.commit('dtAnswer', this.$store.state.dtTest.dtValue);
        this.$store.commit('dtNext');
      },
      // 交卷
      dtbtnSubmit() {
        // 再执行一次存值，因为可能最后一次选择答案不会再点击下一题，就导致最后一次选择不存值
        this.$store.commit('dtAnswer', this.$store.state.dtTest.dtValue);
        let dtSumValue = this.$store.state.dtTest.dtSumValue;
        dtSumValue = JSON.stringify(dtSumValue);
        console.log("最终选择答案：  "+dtSumValue)
        // 重置计时器
        this.$store.commit('reset');
         // 存取计时器时间
        this.$store.commit('toMinute');
        // 按钮可点击
        this.$store.commit('dtIsbtn',false);
        // 按钮文字更改
        this.$store.commit('dtBtns', '开始答题');
        // 弹出提示框
        this.isPops = true;
        // 将提示内容传递到提示框内
        this.popsMessage = '提交成功!';
        // 清空存取答案的变量
        this.$store.commit('clearDtSumValue');
      },
      // 提示框取消按钮操作
      popsBtnFalse(data) {
        this.$router.replace('/index/xuexi/dati');
      },
      // 提示框确认按钮操作
      popsBtnTrue() {
        this.$router.replace('/index/xuexi/dati');
      }
    },
    components: {
      pops,
    }
  }
</script>

<style>
  .dtShiti {
    border: 0.02rem solid #999999;
    padding: 0.2rem;
    border-radius: 0.2rem;
    /* height: 4rem; */
    box-shadow: 0 0 0.1rem #999999;
  }

  .dtShiti_main {
    /* border: 1px solid red; */
  }

  .dtShiti_main h3 {
    font-size: 0.3rem;
    border-bottom: 0.02rem solid #ddd;
    padding-bottom: 0.05rem;
  }

  .dtShiti_content {
    /* border: 1px solid red; */
  }

  .dtShiti_content h5 {
    font-size: 0.3rem;
    margin: 0.1rem 0 0.2rem 0;
    font-weight: normal;
    color: #42B983;
  }

  .dtShiti_content input {
    width: 0.3rem;
    height: 0.3rem;
    float: left;
    margin: 0.06rem 0.1rem 0 0;
  }

  .dtShiti_content label {
    display: block;
    float: left;
    width: 6rem;
    font-size: 0.28rem;
    text-align: justify;
  }

  .dtShiti_content form>div {
    overflow: hidden;
    margin-top: 0.1rem;
  }

  .dtShiti_ts {
    width: 100%;
    height: 0.2rem;
    line-height: 0.2rem;
    text-align: center;
    font-size: 0.24rem;
    color: red;
    margin: 0.1rem 0;
  }

  .dtShiti_btn {
    margin-top: 0.2rem;
    display: flex;
    width: 90%;
    padding: 0 5%;
    justify-content: space-around;
  }

  .dtShiti_btn button {
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

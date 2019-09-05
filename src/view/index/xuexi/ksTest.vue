<template>
  <div class="ksShiti">
    <!-- 弹窗组件 -->
    <pops v-show="isPops" @popsBtnFalse="popsBtnFalse" @popsBtnTrue="popsBtnTrue" :popsMessage="popsMessage"></pops>
    <div class="ksShiti_main">
      {{errMassage}}
      <h3>{{ksType}}</h3>
      <div class="ksShiti_content">
        <h5>{{ksTitle}}</h5>
        <form>
          <div v-for="(ks,index) in ksOption" :key="index">
            <input type="radio" :id="index" name="ksMain" :value="ksOption[index]" @click="getRadioValks(ksOption[index])"
              v-model="ksModel">
            <label :for="index">{{ksOption[index]}}</label>
          </div>
        </form>
      </div>
      <p class="ksShiti_ts">{{ksTs}}</p>
      <div class="ksShiti_btn">
        <button @click="ksbtnLast">上一题</button>
        <button @click="ksbtnNext">下一题</button>
        <button @click="ksbtnSubmit">交卷</button>
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
        ksModel: [],
      }
    },
    mounted() {
      this.axios({
        // url: 'http://localhost:8081/static/json/ks/ks-vue.json',
        url: 'http://192.168.1.6:8081/static/json/ks/ks-vue.json',
        method: 'GET',
      }).then(res => {
        this.$store.commit('ksLoding', res.data.Vue);
      }).catch(err => {
        this.errMassage = '数据请求失败！'
        console.log(err)
      })
    },
    computed: {
      ...mapState({
        ksType: state => state.ksTest.ksType,
        ksTitle: state => state.ksTest.ksTitle,
        ksId: state => state.ksTest.ksId,
        ksTs: state => state.ksTest.ksTs,
        ksOption: state => state.ksTest.ksOption,
      })
    },
    methods: {
      // 获取当前选项的值
      getRadioValks(value) {
        // 将id和选择的值放进对象中传过去
        let obj = {
          ksId: this.$store.state.ksTest.ksId,
          ksValue: value
        };
        this.$store.commit('ksValues', obj);
      },
      // 上一题
      ksbtnLast() {
        this.$store.commit('ksAnswer', this.$store.state.ksTest.ksValue);
        this.$store.commit('ksLast');
      },
      // 下一题
      ksbtnNext() {
        this.$store.commit('ksAnswer', this.$store.state.ksTest.ksValue);
        this.$store.commit('ksNext');
      },
      // 交卷
      ksbtnSubmit() {
        // 再执行一次存值，因为可能最后一次选择答案不会再点击下一题，就导致最后一次选择不存值
        this.$store.commit('ksAnswer', this.$store.state.ksTest.ksValue);
        let ksSumValue = this.$store.state.ksTest.ksSumValue;
        ksSumValue = JSON.stringify(ksSumValue);
        console.log("最终选择答案：  "+ksSumValue)
        // 重置计时器
        this.$store.commit('reset');
         // 存取计时器时间
        this.$store.commit('toMinute');
        // 按钮可点击
        this.$store.commit('ksIsbtn',false);
        // 按钮文字更改
        this.$store.commit('ksBtns', '开始考试');
        // 弹出提示框
        this.isPops = true;
        // 将提示内容传递到提示框内
        this.popsMessage = '提交成功!';
        // 清空存取答案的变量
        this.$store.commit('clearKsSumValue');
      },
      // 提示框取消按钮操作
      popsBtnFalse(data) {
        this.$router.replace('/index/xuexi/kaoshi');
      },
      // 提示框确认按钮操作
      popsBtnTrue() {
        this.$router.replace('/index/xuexi/kaoshi');
      }
    },
    components: {
      pops,
    }
  }
</script>

<style>
  .ksShiti {
    background-color: #FFFFFF;
    border: 0.02rem solid #999999;
    padding: 0.2rem;
    border-radius: 0.2rem;
    box-shadow: 0 0 0.1rem #999999;
  }

  .ksShiti_main {
    /* border: 1px solid red; */
  }

  .ksShiti_main h3 {
    font-size: 0.3rem;
    border-bottom: 0.02rem solid #ddd;
    padding-bottom: 0.05rem;
  }

  .ksShiti_content {
    /* border: 1px solid red; */
  }

  .ksShiti_content h5 {
    font-size: 0.3rem;
    margin: 0.1rem 0 0.2rem 0;
    font-weight: normal;
    color: #42B983;
  }

  .ksShiti_content input {
    width: 0.3rem;
    height: 0.3rem;
    float: left;
    margin: 0.06rem 0.1rem 0 0;
  }

  .ksShiti_content label {
    display: block;
    float: left;
    width: 6rem;
    font-size: 0.28rem;
    text-align: justify;
  }

  .ksShiti_content form>div {
    overflow: hidden;
    margin-top: 0.1rem;
  }

  .ksShiti_ts {
    width: 100%;
    height: 0.2rem;
    line-height: 0.2rem;
    text-align: center;
    font-size: 0.24rem;
    color: red;
    margin: 0.1rem 0;
  }

  .ksShiti_btn {
    margin-top: 0.2rem;
    display: flex;
    width: 90%;
    padding: 0 5%;
    justify-content: space-around;
  }

  .ksShiti_btn button {
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

<template class="vueone_login">
  <div class="login">
    <!-- 关闭按钮 -->
    <div class="login_close">
      <router-link to="/index">
        <img src="../../../static/images/login/close.png" alt="关闭">
      </router-link>
    </div>
    <!-- 标题 -->
    <div>
      <h5>探索新世界，登录更精彩！</h5>
    </div>
    <!-- 输入框 -->
    <form action="" class="login_form">
      <!-- 手机号 -->
      <div class="login_form_phone">
        <input type="number" v-model.lazy="phoneNumber" placeholder="手机号" oninput="if(value.length>11)value=value.slice(0,11)"
          @focus="phoneFocus" @blur="phoneBlur">
        <p>{{phoneTs}}</p>
      </div>
      <!-- 验证码 -->
      <div class="login_form_yzm">
        <input type="number" v-model="yzmNumber" placeholder="请输入验证码" oninput="if(value.length>6)value=value.slice(0,6)"
          :disabled="disyzm" @focus="yzmFocus" @blur="yzmBlur">
        <button type="button" :disabled="disyzmbtn" @click="clickYzm">{{yzm}}</button>
        <p>{{yzmTs}}</p>
      </div>
    </form>
    <!-- 登录按钮 -->
    <div class="login_submit">
      <input type="submit" value="进入新世界" @click="submits">
      <!-- 遮罩层 -->
      <p v-show="isZzc"></p>
    </div>
    <!-- 用户协议 -->
    <div class="login_deal">
      <p>点击查看
        <router-link to="/login">“用户协议”</router-link>
        和
        <router-link to="/login">“隐私政策”</router-link>
      </p>
    </div>
    <!-- 底部信息 -->
    <div class="login_btn" v-show="btnShow">
      <!-- 第三方登录 -->
      <div class="login_btn_san">
        <router-link v-for="(san,index) in sans" :to="san.loginPath" :key="index">
          <img :src="san.loginImg" alt="">
        </router-link>
      </div>
      <!-- 切换登录 -->
      <div class="login_btn_qh">
        <router-link v-for="(lgBt,index) in lgBts" :to="lgBt.lgPath" :key="index">
          {{lgBt.lgTitle}}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState, mapActions, mapGetters} from 'vuex';
  export default {
    data() {
      return {
        yzm: '发送验证码',
        phoneTs: ' ', //电话号码提示框
        yzmTs: ' ', //验证码提示框
        phoneNumber: ' ', //手机号码输入框值
        yzmNumber: ' ', //验证码输入框值
        disyzmbtn: false, //获取验证码按钮状态
        disyzm: true, //验证码输入框状态
        sans: [{
            loginPath: '/login',
            loginImg: require('../../../static/images/login/qq.png'),
          },
          {
            loginPath: '/login',
            loginImg: require('../../../static/images/login/wechat.png'),
          },
          {
            loginPath: '/login',
            loginImg: require('../../../static/images/login/sina.png'),
          },
          {
            loginPath: '/login',
            loginImg: require('../../../static/images/login/iphone.png'),
          }
        ],
        lgBts: [{
            lgPath: '/sign',
            lgTitle: '账号注册'
          },
          {
            lgPath: '/login',
            lgTitle: '密码登录'
          },
          {
            lgPath: '/login',
            lgTitle: '隐私设置'
          }
        ],
        isZzc: true, //遮罩层
      }
    },
    // 生命周期钩子函数  （创建前）
    beforeCreate() {
      // el 和data并未初始化  （el为渲染数据{{message}}）
      //此处可添加loading事件
    },
    // 生命周期钩子函数 页面初始化使用（创建后）
    created() {
      //完成了data数据的初始化，el没有
      //结束loading
    },
    // 生命周期钩子函数 （载入前）
    beforeMount() {
      //完成了el和data初始化
    },
    // 生命周期钩子函数 （载入后）
    mounted() {

    },
    // 生命周期钩子函数 （更新前）
    beforeUpdate() {

    },
    // 生命周期钩子函数 （更新后）
    updated() {

    },
    // 生命周期钩子函数 （销毁前）
    beforeDestroy() {
      //你确认删除XX吗
    },
    // 生命周期钩子函数 （销毁后）
    destroyed() {
      //当前组件已被删除，清空相关内容
    },
    // 计算属性，所有涉及到复杂逻辑计算的都写在这里面，基于依赖缓存，只有相关依赖发生改变时才重新计算
    computed: {
      ...mapState({
        btnShow:state => state.btnShow,
      })
    },
    // 组件引用
    components: {

    },
    // 事件，重新渲染时总会执行函数，而计算属性只要数据未改变都不会计算，直接获取缓存值
    methods: {
      /*
        先将各功能进行封装，然后在各事件中调用
      */
      // 封装-验证手机号
      phNumner() {
        const that = this;
        let value = that.phoneNumber;
        // 手机号码验证正则表达式
        let reg = !/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(that.phoneNumber);
        if (value == ' ' || value == null || value == undefined) {
          that.phoneTs = '手机号不能为空';
        } else if (reg) {
          that.phoneTs = '手机号格式不正确';
        } else {
          that.phoneTs = ''; //如果手机号正确，那么提示框文本为空
        }
      },
      // 封装-倒计时-计时器
      djs() {
        const that = this;
        // 倒计时-默认60s
        let djs = 60;
        let yzmNumbers = [];
        let to = setInterval(function() {
          djs--;
          if (djs == 0) { //如果计时器到0时的操作
            that.yzm = '发送验证码';
            clearInterval(to); //停止计时器
            that.disyzm = true; //禁用验证码输入框
            that.yzmNumber = ''; //清空验证码输入框的值
          } else {
            that.yzm = '重新发送(' + djs + 'S)';
            that.disyzm = false; //验证码输入框开放
            // 由于setInterval会导致input输入框的值每次刷新，需要push每秒添加值
            yzmNumbers.push(that.yzmNumber);
          }
        }, 1000)
      },
      // 封装-验证码判断的操作
      yzmOk() {
        const that = this;
        let value = that.yzmNumber;
        // 判断输入的验证码长度控制登录按钮是否可用
        if (value == ' ' || value == null || value.length < 6) {
          that.yzmTs = '验证码错误';
        } else if (value.length == 6) {
          that.yzmTs = ''; //清空提示框内容
        }
      },
      // 封装-根据验证码长度判断遮罩层显示隐藏
      zzcOK() {
        let value = this.yzmNumber;
        if (value.length < 6) {
          this.isZzc = true; //遮罩层显示
        } else if (value.length == 6) {
          this.isZzc = false; //遮罩层隐藏
          // 测试时发现输入6位数后在监听状态不会清空开始的提示信息，故此修复
          this.yzmTs = ''; //清空提示框内容
        }
      },
      // 封装-将通过验证的手机号和验证码存储在本地
      locals() {
        const info = {
          phoneNumber: this.phoneNumber,
          yzmNumber: this.yzmNumber
        };
        localStorage.setItem('account', JSON.stringify(info));
      },
      /*
        各功能在对应事件中进行调用上面的封装事件
      */
      // 手机号码输入框获取焦点事件
      phoneFocus() {},
      // 手机号码输入框失去焦点事件
      phoneBlur() {
        // 调用验证手机号
        this.phNumner();
      },
      // 点击获取验证码
      clickYzm() {
        const that = this;
        // 手机号码验证正则表达式
        let reg = !/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(that.phoneNumber);
        // 判断手机号码是否正确
        if (reg) {
          that.phoneTs = '手机号格式不正确';
        } else {
          // 调用倒计时函数
          that.djs();
          that.zzcOK();
        }
      },
      // 验证码输入框获取焦点事件
      yzmFocus() {

      },
      // 验证码输入框失去焦点事件
      yzmBlur() {
        // 调用封装验证码判断的操作
        this.yzmOk();
      },
      // 提交跳转路由
      submits() {
        if (this.yzmNumber == 123456) {
          // 调用-将通过验证的手机号数据存储在本地
          this.locals();
          // 跳转路由并传参
          this.$router.replace('/home');
        } else {
          this.yzmTs = '验证码错误';
        }
      }
    },
    // 监听数据发生变化时操作
    watch: {
      // 监听yzm的内容，即点击获取验证码后只有当名字再次为获取验证码才能点击
      yzm() {
        if (this.yzm != "发送验证码") {
          this.disyzmbtn = true;
        } else if (this.yzm == "发送验证码") {
          this.disyzmbtn = false;
        }
      },
      //根据验证码长度判断遮罩层显示隐藏
      yzmNumber() {
        // 调用对应的在上面封装好的方法
        this.zzcOK();
      },
      btnShow(){
        return this.$store.state.btnShow;
        console.log(11)
      }
    }
  }
</script>
<style>
  @import '../../assets/css/login/login.css'
</style>

export default {
  state: {
    years: 0, //年-当前
    months: 0, //月-当前
    datas: 0, //日-当前
    hours: 0, //时-当前
    minutes: 0, //分-当前
    seconds: 0, //秒-当前
    x: '', //中间变量存取时间-当前
    shortTime: '', //短时间格式
    longTime: '', //长时间格式
    hour: 0, //时-计时器
    minute: 0, //分-计时器
    second: 0, //秒-计时器
    millisecond: 0, //毫秒-计时器
    y: '', //中间变量存取时间-计时器
    // timer: '00:00:00:00', //计时器
    timer: '00:00:00', //计时器
    sumSecond: '', //总毫秒数-计时器
    xxTimes: '',  //存放答题用时的原始格式数据
    xxTime: '-',  //存放答题用时转换的分钟数
  },
  mutations: {
    // 封装时间
    dates(state) {
      let date = new Date();
      state.years = date.getFullYear(); //年
      state.months = date.getMonth() + 1; //月
      state.datas = date.getDate(); //日
      state.hours = date.getHours(); //时
      state.minutes = date.getMinutes(); //分
      state.seconds = date.getSeconds(); //秒

      this.commit('toDub',state.hours)
      state.hours = state.x;
      this.commit('toDub',state.minutes);
      state.minutes = state.x;
      this.commit('toDub',state.seconds);
      state.seconds = state.x;
      this.commit('toDub',state.months);
      state.months = state.x;
      this.commit('toDub',state.datas);
      state.datas = state.x;

      state.shortTime = state.hours + ':' + state.minutes + ':' + state.seconds;
      state.longTime = state.years + '/' + state.months + '/' + state.datas + ' ' + state.hours + ':' + state.minutes + ':' + state.seconds;
    },
    // 封装计时器
    // 开始
    start(state) {
      state.y = setInterval(() => {
        this.commit('jsq');
      }, 50);
    },
    // 暂停
    stop(state) {
      clearInterval(state.y);
      // 将重置前的时间存起来
      state.xxTimes = state.timer;
    },
    // 重置
    reset(state) {
      clearInterval(state.y);
      // 将重置前的时间存起来
      state.xxTimes = state.timer;
      state.hour = 0;
      state.minute = 0;
      state.second = 0;
      state.millisecond = 0;
      // state.timer = '00:00:00:00';
      state.timer = '00:00:00';
    },
    // 计时器
    jsq(state) {
      state.millisecond = state.millisecond + 50;
      if (state.millisecond >= 1000) {
        state.millisecond = 0;
        state.second = state.second + 1;
      }
      if (state.second >= 60) {
        state.second = 0;
        state.minute = state.minute + 1;
      }
      if (state.minute > 60) {
        state.minute = 0;
        state.hour = state.hour + 1;
      }

      /* this.commit('toDub',state.hour)
      state.hour = state.y;
      this.commit('toDub',state.minute);
      state.minute = state.y;
      this.commit('toDub',state.second);
      state.second = state.y;
      this.commit('toDub',state.millisecond);
      state.millisecond = state.y; */

      // state.timer = state.hour + ':' + state.minute + ':' + state.second + ':' + state.millisecond;
      state.timer = state.hour + ':' + state.minute + ':' + state.second;
      // 统计总共多少秒
      state.sumSecond = state.second + state.minute * 60 + state.hour * 3600;
    },
    // 处理格式问题
    toDub(state, n) {
      if (n < 10) {
        state.x = '0' + n;
      } else {
        state.x = '' + n;
      }
    },
    // 将答题用时转换为分钟
    toMinute(state){
      let time = state.xxTimes;
      let h = time.split(':')[0];
      let m = time.split(':')[1];
      let s = time.split(':')[2];
      // 四舍五入向上取整
      state.xxTime = Math.ceil(Number(h*60) + Number(m) + Number(s/60));
    }
  }
}

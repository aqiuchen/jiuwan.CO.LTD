export default{
  state:{
    ksBtn: '开始考试',
    isKsbtn: false,
    ksBtnClass: {
      kaoshiPlay: false,
      kaoshiStop: true,
    },
    ksType: '',
    ksId: '',
    ksTitle: '',
    ksOption: [], //选项列表
    ksList: [], //所有题汇总
    ksTs: '', //试题提示
    ksSumValue: [], //所有试题选择答案汇总
    ksValue: [],  //存放当前题选择的答案
    ksModel: '',  //存放model值
    ksScore: '-',  //考试得分
  },
  mutations: {
    // 控制考试按钮操作
    ksIsbtn(state, value){
      state.isKsbtn = value;
      state.ksBtnClass.kaoshiPlay = value;
      state.ksBtnClass.kaoshiStop = !state.ksBtnClass.kaoshiStop;
    },
    // 考试按钮文字改变
    ksBtns(state, value){
      state.ksBtn = value;
    },
    // 初始载入试题
    ksLoding(state, obj){
      state.ksList = obj;
      state.ksType = obj[0].ksType;
      state.ksId = obj[0].ksId;
      state.ksTitle = obj[0].ksTitle;
      state.ksOption = obj[0].ksOption;
    },
    // 存放当前题选择的答案
    ksValues(state, value){
      state.ksValue = value;
    },
    // 存放所有试题选择答案
    ksAnswer(state, value){
      if(state.ksSumValue.length == 0){
        state.ksSumValue.push(value);
      }else{
        // 判断ksValue是否有重复ksId，不重复则传入，重复则替换ksValue值");
        for(let i in state.ksSumValue){
          // 如果新传入的ksId在存入的值中已存在，则替换值
          if(state.ksSumValue[i].ksId == value.ksId){
            state.ksSumValue[i].ksValue = value.ksValue;
          }else{
            // 不存在重复，直接push
            state.ksSumValue.push(value);
          }
        }
      }
      // 数组去重
      state.ksSumValue = Array.from(new Set(state.ksSumValue));
      this.commit('qc');
    },
    // 上一题
    ksLast(state){
      for(let i in state.ksList){
        if(state.ksId == state.ksList[i].ksId){
          if(i == 0){
            state.ksTs = '已经是第一题了！';
          }else{
            i--;
            state.ksType = state.ksList[i].ksType;
            state.ksId = state.ksList[i].ksId;
            state.ksTitle = state.ksList[i].ksTitle;
            state.ksOption = state.ksList[i].ksOption;
            state.ksTs = '';
          }
        }
      }
    },
    // 下一题
    ksNext(state){
      for(let i in state.ksList){
        if(state.ksId == state.ksList[i].ksId){
          i++;
          if(i == state.ksList.length){
            state.ksTs = '已经是最后一题了！';
          }else{
            state.ksType = state.ksList[i].ksType;
            state.ksId = state.ksList[i].ksId;
            state.ksTitle = state.ksList[i].ksTitle;
            state.ksOption = state.ksList[i].ksOption;
            state.ksTs = '';
            return;
          }
        }
      }
    },
    // 数组去重
    qc(state){
      for(let i=0; i<state.ksSumValue.length; i++){
        for(let j=i+1; j<state.ksSumValue.length; j++){
          if(state.ksSumValue[i].ksId === state.ksSumValue[j].ksId){
            state.ksSumValue.splice(i,1)
          }
        }
      }
    },
    // 计算得分
    ksScores(state){

    },
    // 交卷后清空信息
    clearKsSumValue(state){
      state.ksSumValue = [];
      state.ksValue = [];
      state.ksTs = '';
      state.ksModel = '';
    },
  }
}

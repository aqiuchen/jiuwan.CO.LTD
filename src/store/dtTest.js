export default{
  state:{
    dtBtn: '开始答题',
    isDtbtn: false,
    dtBtnClass: {
      datiPlay: false,
      datiStop: true,
    },
    dtType: '',
    dtId: '',
    dtTitle: '',
    dtOption: [], //选项列表
    dtList: [], //所有题汇总
    dtTs: '', //试题提示
    dtSumValue: [], //所有试题选择答案汇总
    dtValue: [],  //存放当前题选择的答案
    dtModel: '',  //存放model值
    dtScore: '-',  //答题得分
  },
  mutations: {
    // 控制答题按钮操作
    dtIsbtn(state, value){
      state.isDtbtn = value;
      state.dtBtnClass.datiPlay = value;
      state.dtBtnClass.datiStop = !state.dtBtnClass.datiStop;
    },
    // 答题按钮文字改变
    dtBtns(state, value){
      state.dtBtn = value;
    },
    // 初始载入试题
    dtLoding(state, obj){
      state.dtList = obj;
      state.dtType = obj[0].dtType;
      state.dtId = obj[0].dtId;
      state.dtTitle = obj[0].dtTitle;
      state.dtOption = obj[0].dtOption;
    },
    // 存放当前题选择的答案
    dtValues(state, value){
      state.dtValue = value;
    },
    // 存放所有试题选择答案
    dtAnswer(state, value){
      if(state.dtSumValue.length == 0){
        state.dtSumValue.push(value);
      }else{
        // 判断dtValue是否有重复dtId，不重复则传入，重复则替换dtValue值");
        for(let i in state.dtSumValue){
          // 如果新传入的dtId在存入的值中已存在，则替换值
          if(state.dtSumValue[i].dtId == value.dtId){
            state.dtSumValue[i].dtValue = value.dtValue;
          }else{
            // 不存在重复，直接push
            state.dtSumValue.push(value);
          }
        }
      }
      // 数组去重
      state.dtSumValue = Array.from(new Set(state.dtSumValue));
      this.commit('qc');
    },
    // 上一题
    dtLast(state){
      for(let i in state.dtList){
        if(state.dtId == state.dtList[i].dtId){
          if(i == 0){
            state.dtTs = '已经是第一题了！';
          }else{
            i--;
            state.dtType = state.dtList[i].dtType;
            state.dtId = state.dtList[i].dtId;
            state.dtTitle = state.dtList[i].dtTitle;
            state.dtOption = state.dtList[i].dtOption;
            state.dtTs = '';
          }
        }
      }
    },
    // 下一题
    dtNext(state){
      for(let i in state.dtList){
        if(state.dtId == state.dtList[i].dtId){
          i++;
          if(i == state.dtList.length){
            state.dtTs = '已经是最后一题了！';
          }else{
            state.dtType = state.dtList[i].dtType;
            state.dtId = state.dtList[i].dtId;
            state.dtTitle = state.dtList[i].dtTitle;
            state.dtOption = state.dtList[i].dtOption;
            state.dtTs = '';
            return;
          }
        }
      }
    },
    // 数组去重
    qc(state){
      for(let i=0; i<state.dtSumValue.length; i++){
        for(let j=i+1; j<state.dtSumValue.length; j++){
          if(state.dtSumValue[i].dtId === state.dtSumValue[j].dtId){
            state.dtSumValue.splice(i,1)
          }
        }
      }
    },
    // 计算得分
    dtScores(state){

    },
    // 交卷后清空信息
    clearDtSumValue(state){
      state.dtSumValue = [];
      state.dtValue = [];
      state.dtTs = '';
      state.dtModel = '';
    },
  }
}

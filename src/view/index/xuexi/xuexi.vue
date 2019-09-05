<template>
  <div class="xuexi">
    <go-back :homeTitle="homeTitle"></go-back>
    <div class="xuexi_main">
      <!-- 头部 -->
      <div class="xuexi_top">
        <h3>告示</h3>
        <p>您好：<strong>{{dtName}}</strong></p>
        <p>为了提升大家的技术水平，提高大家的生活质量，学习系统应运而生。</p>
        <p>目前学习系统分为三大板块：</p>
        <p><b>知识积累：</b>对前端的热门框架进行知识积累，巩固基础知识。</p>
        <p><b>答题比赛：</b>对前端技术知识以答题方式进行巩固，并在每道题选择后进行解析。</p>
        <p><b>考试系统：</b>对前端技术知识进行综合测评，是骡子是马出拉来溜溜。</p>
        <p>快来展示你的实力吧！</p>
      </div>
      <!-- 知识积累 -->
      <div class="xuexi_doc">
        <h5>知识积累</h5>
        <div class="xuexi_doc_list">
          <router-link v-for="(doc,index) in docs" :to="{path:doc.docPath, query:{title:doc.docTitile}}" :key="index">
            <img :src="doc.docImg" alt="封面">
            <span>{{doc.docTitile}}</span>
          </router-link>
        </div>
      </div>
      <!-- 答题比赛 -->
      <div class="xuexi_answer">
        <h5>答题比赛</h5>
        <div class="xuexi_answer_list">
          <router-link v-for="(answer,index) in answers" :to="{path:answer.answerPath, query:{title:answer.answerTitile}}" :key="index">
            <img :src="answer.answerImg" alt="封面">
            <span>{{answer.answerTitile}}</span>
          </router-link>
        </div>
      </div>
      <!-- 考试系统 -->
      <div class="xuexi_interview">
        <h5>考试系统</h5>
        <div class="xuexi_interview_list">
          <router-link v-for="(interview,index) in interviews" :to="{path:interview.interviewPath, query:{title:interview.interviewTitile}}" :key="index">
            <img :src="interview.interviewImg" alt="封面">
            <span>{{interview.interviewTitile}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import goBack from '../../../components/goBack.vue';
  export default{
    data(){
      return{
        homeTitle: '',
        dtName: '',
        docs: [{  //知识积累
          docPath: '/index/xuexi/zhishi',
          docImg: require('../../../../static/images/home/home_name.png'),
          docTitile: 'JavaScript'
        },{
          docPath: '/index/xuexi/zhishi',
          docImg: require('../../../../static/images/home/home-logo.png'),
          docTitile: 'Vue'
        },{
          docPath: '/index/xuexi/zhishi',
          docImg: require('../../../../static/images/home/home_name.png'),
          docTitile: 'jQuery'
        },{
          docPath: '/index/xuexi/zhishi',
          docImg: require('../../../../static/images/home/home-logo.png'),
          docTitile: 'ES6'
        },{
          docPath: '/index/xuexi/zhishi',
          docImg: require('../../../../static/images/home/home_name.png'),
          docTitile: 'React'
        },{
          docPath: '/index/xuexi/zhishi',
          docImg: require('../../../../static/images/home/home-logo.png'),
          docTitile: 'python'
        }],
        answers: [{  //答题比赛
          answerPath: '/index/xuexi/dati',
          answerImg: require('../../../../static/images/home/home_name.png'),
          answerTitile: 'JavaScript'
        },{
          answerPath: '/index/xuexi/dati',
          answerImg: require('../../../../static/images/home/home-logo.png'),
          answerTitile: 'Vue'
        },{
          answerPath: '/index/xuexi/dati',
          answerImg: require('../../../../static/images/home/home_name.png'),
          answerTitile: 'jQuery'
        },{
          answerPath: '/index/xuexi/dati',
          answerImg: require('../../../../static/images/home/home-logo.png'),
          answerTitile: 'ES6'
        },{
          answerPath: '/index/xuexi/dati',
          answerImg: require('../../../../static/images/home/home_name.png'),
          answerTitile: 'React'
        },{
          answerPath: '/index/xuexi/dati',
          answerImg: require('../../../../static/images/home/home-logo.png'),
          answerTitile: 'python'
        }],
        interviews: [{  //考试系统
          interviewPath: '/index/xuexi/kaoshi',
          interviewImg: require('../../../../static/images/home/home_name.png'),
          interviewTitile: 'JavaScript'
        },{
          interviewPath: '/index/xuexi/kaoshi',
          interviewImg: require('../../../../static/images/home/home-logo.png'),
          interviewTitile: 'Vue'
        },{
          interviewPath: '/index/xuexi/kaoshi',
          interviewImg: require('../../../../static/images/home/home_name.png'),
          interviewTitile: 'jQuery'
        },{
          interviewPath: '/index/xuexi/kaoshi',
          interviewImg: require('../../../../static/images/home/home-logo.png'),
          interviewTitile: 'ES6'
        },{
          interviewPath: '/index/xuexi/kaoshi',
          interviewImg: require('../../../../static/images/home/home_name.png'),
          interviewTitile: 'React'
        },{
          interviewPath: '/index/xuexi/kaoshi',
          interviewImg: require('../../../../static/images/home/home-logo.png'),
          interviewTitile: 'python'
        }],
      }
    },
    mounted() {
      this.homeTitle = this.$route.query.title;
      // 获取登录信息
      let info = JSON.parse(localStorage.getItem('account'));
      if (info == null || info == undefined || info == ' ') {
        this.dtName = '未登录';
      } else {
        this.dtName = info.phoneNumber;
      }
    },
    components:{
      goBack
    }
  }
</script>

<style>
.xuexi_main{
  padding: 1.2rem 4%;
}
/* 公共部分 */
.xuexi_doc, .xuexi_answer, .xuexi_interview{
  /* border: 1px solid red; */
}
.xuexi_doc_list, .xuexi_answer_list, .xuexi_interview_list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.xuexi_main a{
  width: 2rem;
  margin-top: 0.4rem;
  text-align: center;
  /* border: 1px solid red; */
}
.xuexi_main h5{
  width: 100%;
  font-size: 0.32rem;
  border-bottom: 0.02rem solid #e3e3e3;
}
.xuexi_main img{
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.2rem;
}
.xuexi_main span{
  display: block;
  width: 100%;
  font-size: 0.3rem;
  color: #333;
  margin-top: 0.1rem;
}
/* 榜单 */
.xuexi_top{
  border: 0.05rem solid #42B983;
  border-radius: 0.2rem;
  padding: 0.1rem;
  margin-bottom: 0.5rem;
}
.xuexi_top h3{
  font-size: 0.36rem;
  text-align: center;
}
.xuexi_top p{
  margin-top: 0.1rem;
  font-size: 0.28rem;
  text-align: justify;
}
.xuexi_top i{
  color: red;
}
/* 文档库 */
.xuexi_doc{

}
/* 答题比赛 */
.xuexi_answer{
  margin: 0.5rem 0;
}
/* 面试题库 */
.xuexi_interview{

}
</style>

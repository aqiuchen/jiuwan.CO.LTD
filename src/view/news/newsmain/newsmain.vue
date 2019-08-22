<template>
  <div class="newsmain">
    <!-- 顶部返回 -->
    <go-back :homeTitle="homeTitle"></go-back>
    <!-- 新闻标题 -->
    <div class="newsmain_title">
      <h5>{{newsContent.newsTitle}}</h5>
      <div class="newsmain_title_xinxi">
        <span>{{newsContent.newsSource}}</span>
        <p>作者: {{newsContent.newsName}}</p>
        <span>{{newsContent.newsTime}}</span>
      </div>
    </div>
    <!-- 新闻内容 -->
    <div class="newsmain_content">
      <img :src="newsContent.newsImg" alt="新闻图片">
      <!-- 此处对于新闻内容并没有通过数据绑定{{}}的方式，而是采用了v-html，原因为v-html才能识别json字符串中的标签 -->
      <div class="newsmain_content_p" v-html="newsContent.newsMain"></div>
    </div>
    <!-- 评论 -->
    <div class="newsmain_pinglun">
      <div class="newsmain_pinglun_list" v-for="(newsPl,index) in newsPls" :key="index">
        <!-- 评论顶部信息 -->
        <div class="pinglun_list_top">
          <!-- 头像和名字 -->
          <router-link :to="newsPl.newsplPath">
            <img :src="newsPl.newsplImg" alt="用户头像">
            <p>{{newsPl.newsplName}}</p>
          </router-link>
          <!-- 点赞 -->
          <div class="pinglun_list_dz">
            <img :src="newsPl.newsplDzimgq" alt="点赞" v-show="newsPl.isZzq" @click="newmainZz(index)">
            <img :src="newsPl.newsplDzimgh" alt="点赞" v-show="newsPl.isZzh" @click="newmainZz(index)">
            <span>{{newsPl.newsplDz}}</span>
          </div>
        </div>
        <!-- 评论内容 -->
        <p class="pinglun_list_main">{{newsPl.newsplMain}}</p>
        <!-- 底部信息回复 -->
        <div class="pinglun_list_down">
          <p>{{newsPl.newsplTime}} .</p>
          <span @click="newsHf">{{newsPl.newsplHf}}</span>
        </div>
      </div>
    </div>
    <!-- 底部评论输入框 -->
    <div class="newsmain_bottom">
      <input type="text" placeholder="写评论...">
      <div class="newsmain_bottom_pl" @click="newsmainPl">
        <span>{{newsContent.newsReview}}</span> <!-- 评论数 -->
        <img src="../../../../static/images/video/review.png" alt="评论图标">
      </div>
      <img src="../../../../static/images/news/news_sc.png" alt="收藏图标" v-show="isScq" @click="newsmainSc">
      <img src="../../../../static/images/music/music-star.png" alt="收藏图标" v-show="isSch" @click="newsmainSc">
      <img src="../../../../static/images/music/details-dz.png" alt="点赞图标" v-show="isDzq" @click="newsmainDz">
      <img src="../../../../static/images/music/details-dzh.png" alt="点赞图标" v-show="isDzh" @click="newsmainDz">
      <img src="../../../../static/images/news/news_fx.png" alt="分享图标" @click="newsmainFx">
    </div>
  </div>
</template>
<script>
  import goBack from '../../../components/goBack.vue';
  export default {
    data() {
      return {
        homeTitle: '新闻',
        newsContent: [],
        isZzq: true, //点赞评论前图标
        isZzh: false, //点赞评论后图标
        isScq: true, //收藏前图标
        isSch: false, //收藏后图标
        isDzq: true, //点赞文章前图标
        isDzh: false, //点赞文章后图标
        newsPls: [] //评论信息
      }
    },
    mounted() {
      const that = this;
      // that.axios.get('http://localhost:8081/static/aq.json')
      that.axios.get('https://mi.dyfeiyu.com/static/aq.json')
        .then(res => {
          // 获取通过路由传递的id
          let newsmainId = that.$route.query.Id;
          let dataArry = res.data.newsr;
          for (let i in dataArry) {
            // 如果当前路由id和json数据中的newsID相同则显示该新闻内容
            if (newsmainId == dataArry[i].newsId) {
              that.newsContent = dataArry[i];
              that.newsPls = dataArry[i].newsPl;
            }
          }
        })
        .catch(error => {
          console.log("请求失败！")
        })
    },
    methods: {
      // 对用户的评论点赞
      newmainZz(index) {
        let zzq = this.newsPls[index].isZzq;
        let zzh = this.newsPls[index].isZzh;
        let zz = this.newsPls[index].newsplDz;
        /* if(zz == '赞'){
          this.newsPls[index].newsplDz = 1;
          this.newsPls[index].isZzq = false;
          this.newsPls[index].isZzh = true;
        }else{
          this.newsPls[index].newsplDz = '赞';
          this.newsPls[index].isZzq = true;
          this.newsPls[index].isZzh = false;
        } */
        if ((zzq == true || zzh == false) && (zz != '赞')){
          this.newsPls[index].isZzq = false;
          this.newsPls[index].isZzh = true;
          zz++;
          this.newsPls[index].newsplDz = zz;
        }else if((zzq == false || zzh == true) && (zz != '赞')){
          this.newsPls[index].isZzq = true;
          this.newsPls[index].isZzh = false;
          zz--;
          this.newsPls[index].newsplDz = zz;
        }else if((zzq == false || zzh == true) && (zz == 1)){
          this.newsPls[index].isZzq = true;
          this.newsPls[index].isZzh = false;
          this.newsPls[index].newsplDz = '赞';
        }else if(zz == '赞'){
          this.newsPls[index].newsplDz = 1;
          this.newsPls[index].isZzq = false;
          this.newsPls[index].isZzh = true;
        }
      },
      // 用户评论的回复
      newsHf() {
        console.log("用户评论的回复");
      },
      // 底部评论点击滑动到指定位置
      newsmainPl() {
        // offsetTop元素的上边框与父元素的上边框的绝对距离
        let h = document.querySelector('.newsmain_pinglun').offsetTop;
        // scrollTop某个可滑动区块向下滚动的距离。
        document.body.scrollTop = h;
        document.documentElement.scrollTop = h;
        window.scrollBy(0, h); // 解决ios兼容问题
      },
      // 收藏
      newsmainSc() {
        console.log("底部收藏");
        // 点击收藏改变图标
        if (this.isScq == true || this.isSch == false) {
          this.isScq = false;
          this.isSch = true;
        } else {
          this.isScq = true;
          this.isSch = false;
        }
      },
      // 对文章点赞
      newsmainDz() {
        console.log("底部点赞");
        // 点击点赞改变图标
        if (this.isDzq == true || this.isDzh == false) {
          this.isDzq = false;
          this.isDzh = true;
        } else {
          this.isDzq = true;
          this.isDzh = false;
        }
      },
      // 分享
      newsmainFx() {
        console.log("底部分享");
      }
    },
    components: {
      goBack
    }
  }
</script>
<style>
  @import '../../../assets/css/news/newsmain.css';
</style>

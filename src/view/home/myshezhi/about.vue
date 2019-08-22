<template>
  <div class="about">
    <!-- 返回组件 -->
    <go-back :homeTitle="homeTitle"></go-back>
    <!-- 关于我们的详细内容 -->
    <div class="about_main">
      <img src="../../../../static/images/static/details-xqtp.png" alt="九湾科技官图">
      <p>九湾科技总部位于中华人民共和国下属的四川省南充市仪陇县日兴镇九湾村。是一家以高科技研发为基础的科创企业，属于全球NO.1企业。</p>
      <p>九湾科技涉及的行业包括：航空、航天、军工、机器人、金融、互联网、物联网、人工智能、大数据、智慧云、通信设备、软件等；覆盖范围广，综合实力非常强，全球分公司达100家(其中中国24家）、宇宙基地4处(近地太空基地、月球基地、火星基地、太阳基地)、全球员工超过10万人，属于大型超高科技企业。</p>
      <p>九湾科技的主要产品包含：空天号近地空间站、银河系列航空飞机、嫦娥号月球基地、后羿号太阳基地、火焰山号火星基地、阎王号冥王星基地、歼敌者系列战舰、未来战士系列产品(多用途穿戴设备、激光步枪)、超级狗战争机器人、空霸无人机、战神激光炮、星际云、家用全能机器人、量子通信系列手机等明星产品，还有数不清的其他产品被广大全球用户使用。由于产品超级强大，购买用户众多，资源已现不足，目前正在紧急开发月球和火星基地的矿物资源。</p>
      <p>九湾科技的使命：为地球用户创造更好更强的产品，帮助全人类进行外太空探索，全力助长人类文明的快速发展。</p>
      <p>联系地址：四川.仪陇.九湾村九湾科技大厦99楼。</p>
      <p>联系电话：999</p>
      <p>邮箱：jiuwanHQ@jiuwan.com</p>
    </div>
  </div>
</template>

<script>
  import goBack from '../../../components/goBack.vue';
  export default{
    data(){
      return{
        homeTitle: ''
      }
    },
    mounted() {
      this.homeTitle = this.$route.query.title;
    },
    components:{
      goBack,
    }
  }
</script>

<style>
  .about_main{
    width: 94%;
    padding: 1rem 3% 0.2rem;
    text-align: center;
  }
  .about_main img{
    width: 80%;
    margin: 0.2rem auto;
  }
  .about_main p{
    font-size: 0.32rem;
    text-align: justify;
    line-height: 0.5rem;
    margin-top: 0.2rem;
    /* text-indent: 2em; */
  }
</style>

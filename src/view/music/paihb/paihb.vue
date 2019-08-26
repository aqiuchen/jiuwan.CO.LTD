<template>
  <div class="paihb">
    <go-back :homeTitle="homeTitle"></go-back>
    <div class="paihb_main">
      <!-- 官方榜 -->
      <div class="paihb_main_gfb">
        <h5>官方榜</h5>
        {{phbError}}
        <router-link v-for="(gfb,index) in gfbs" :key="index" :to="gfb.gfbPath">
          <!-- 封面 -->
          <div class="paihb_main_gfb_left paihb_main_bb_top">
            <img :src="gfb.gfbImg" alt="封面">
            <span>{{gfb.gfbGx}}</span>
          </div>
          <!-- 前三歌曲展示 -->
          <div class="paihb_main_gfb_right">
            <p>1. {{gfb.gfbTop1}}</p>
            <p>2. {{gfb.gfbTop2}}</p>
            <p>3. {{gfb.gfbTop3}}</p>
          </div>
        </router-link>
      </div>
      <!-- 推荐榜 -->
      <div class="paihb_main_tjb paihb_main_bb">
        <h5>推荐榜</h5>
        {{phbError}}
        <div class="paihb_main_bb_main">
          <router-link v-for="(tjb,index) in tjbs" :key="index" :to="tjb.tjbPath">
            <div class="paihb_main_tjb_top paihb_main_bb_top">
              <img :src="tjb.tjbImg" alt="封面">
              <span>{{tjb.tjbGx}}</span>
            </div>
            <p>{{tjb.tjbTitle}}</p>
          </router-link>
        </div>
      </div>
      <!-- 全球榜 -->
      <div class="paihb_main_qqb paihb_main_bb">
        <h5>全球榜</h5>
        {{phbError}}
        <div class="paihb_main_bb_main">
          <router-link v-for="(qqb,index) in qqbs" :key="index" :to="qqb.qqbPath">
            <div class="paihb_main_qqb_top paihb_main_bb_top">
              <img :src="qqb.qqbImg" alt="封面">
              <span>{{qqb.qqbGx}}</span>
            </div>
            <p>{{qqb.qqbTitle}}</p>
          </router-link>
        </div>
      </div>
      <!-- 更多榜单 -->
      <div class="paihb_main_gdb paihb_main_bb">
        <h5>更多榜单</h5>
        {{phbError}}
        <div class="paihb_main_bb_main">
          <router-link v-for="(gdb,index) in gdbs" :key="index" :to="gdb.gdbPath">
            <div class="paihb_main_gdb_top paihb_main_bb_top">
              <img :src="gdb.gdbImg" alt="封面">
              <span>{{gdb.gdbGx}}</span>
            </div>
            <p>{{gdb.gdbTitle}}</p>
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
        phbError: '',
        gfbs: [],
        tjbs: [],
        qqbs: [],
        gdbs: [],
      }
    },
    mounted() {
      this.homeTitle = this.$route.query.title;
      // 请求json数据
      this.axios({
        // url: 'http://localhost:8081/static/aq.json',
        // url: 'http://172.20.10.3:8081/static/aq.json',
        url: 'https://mi.dyfeiyu.com/static/aq.json',
        method: 'GET'
      }).then(res => {
        this.gfbs = res.data.gfbs;
        this.tjbs = res.data.tjbs;
        this.qqbs = res.data.qqbs;
        this.gdbs = res.data.gdbs;
      }).catch(error => {
        this.phbError = "请求数据失败！";
      })
    },
    components:{
      goBack
    }
  }
</script>

<style>
  @import '../../../assets/css/music/paihb.css';
</style>

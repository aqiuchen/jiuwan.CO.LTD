<template>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
        <!-- 轮播图 -->
        <swiper-slide v-for="(swiper,index) in swipers" :key="index" class="swiper-slide">
            <img :src="swiper.imgUrl">
        </swiper-slide>

        <!-- 分页器 -->
        <div class="swiper-pagination" v-for="(swiper,index) in swipers" :key="index" slot="pagination"></div>
        <!-- <div class="number"> {{imgIndex}} / {{detailimages.length}} </div> -->
        <!-- 滚动条 -->
        <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
        <!-- 上一页 -->
        <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
        <!-- 下一页 -->
        <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
</template>
<script>
// 组件引入
require('swiper/dist/css/swiper.css');
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
    data() {
    	const that = this;
        return {
        	// imgIndex: 1,
            swiperOption: {//链接http://www.swiper.com.cn/api/
            	/*
	        	notNextTick是一个组件自有属性,当设置为true时,组件则不会通过NextTick来实例化swiper,
	        	也就意味着可以在第一时间获取到swiper对象,
	        	假如我需要刚加载便使用获取swiper对象来做什么事，那么属性一定要是true。
	        	*/
            	notNextTick: true,
                loop: true,	//循环播放
                initialSlide: 0,//设定初始化时slide的索引
                autoplay: {//自动播放
                	delay: 5000,
                	stopOnLastSlide: false,
                	disableOnInteraction: false//触摸滑动后是否继续轮播
                },
                speed: 1000,//图片滑动速度
                direction: 'horizontal',//滑动方向-水平
                grabCursor: true,//鼠标覆盖swiper时指针变成手掌形状
                /*on: {
                	//滑动之后回调函数
                	slidChangeTransitionStart: function(){
                		// realIndex为滚动到当前的slide索引值
                		that.imgIndex = this.realIndex - 1;
                	}
                },*/
                pagination: {//分页器
                	el: '.swiper-pagination',
                	clickable: true,//点击切换
                	paginationClickable: true,//点击分页器切换
                	type: 'bullets'//按钮颜色
                },
                setWrapperSize: true,
                autoHeight: true,//自动高度
                // scrollbar: '.swiper-scrollbar',//滚动条
                mousewheelControl: true,
                debugger: true,
                observer: true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents: true//修改swiper的父元素时，自动初始化swiper
            },
            swipers: [
                { imgUrl: require('../../static/images/banner/banner-app.png') },
                { imgUrl: require('../../static/images/banner/banner-applet.png') },
                { imgUrl: require('../../static/images/banner/banner-website.png') },
                { imgUrl: require('../../static/images/banner/wx_banner.png') },
            ]
        }
    },
    computed: {
    	swiper(){
    		// return this.$refs.mySwiper.swiper
    	}
    },
    mounted(){
    	// this.swiper.slideTo(3, 1000, false)
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style>
.swiper-container {
    width: 100%;
    border-radius: 0.2rem;
}

.swiper-container .swiper-slide {
    width: 100%;
    float: left;
}

.swiper-slide img {
    display: block;
    width: 100%;
    float: left;
}
</style>

<template>
	<div class="vueone_wallet">
        <!-- 中部内容 -->
        <div class="wallet_content">我的钱包</div>
        <router-link to="/index">跳转首页</router-link>
    </div>
</template>
<script>
export default{
	data(){
		return{

		}
	},
	// 生命周期钩子函数  （创建前）
	beforeCreate(){
    	// el 和data并未初始化  （el为渲染数据{{message}}）
    	//此处可添加loading事件
    },
    // 生命周期钩子函数 页面初始化使用（创建后）
    created(){
        //完成了data数据的初始化，el没有
        //结束loading
    },
    // 生命周期钩子函数 （载入前）
    beforeMount(){
        //完成了el和data初始化
    },
    // 生命周期钩子函数 （载入后）
    mounted(){
        //发起后端请求，拿回数据，配合路由钩子做一些事情
    },
    // 生命周期钩子函数 （更新前）
    beforeUpdate(){

    },
    // 生命周期钩子函数 （更新后）
    updated(){

    },
    // 生命周期钩子函数 （销毁前）
    beforeDestroy(){
        //你确认删除XX吗
    },
    // 生命周期钩子函数 （销毁后）
    destroyed(){
        //当前组件已被删除，清空相关内容
    },
    // 计算属性，所有涉及到复杂逻辑计算的都写在这里面，基于依赖缓存，只有相关依赖发生改变时才重新计算
    computed:{

    },
    // 组件引用
    components:{

    },
    // 事件，重新渲染时总会执行函数，而计算属性只要数据未改变都不会计算，直接获取缓存值
    methods:{

    },
    // 监听数据发生变化时操作
    watch:{

    }
}
</script>
<style>
	
</style>
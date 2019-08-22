<template>
    <div class="vueone_search">
        <!-- 语音输入图标 -->
        <div class="search_img">
            <img src="../../static/images/nav/voice.png" @click="voice" alt="">
        </div>
        <!-- 搜索框 -->
        <input type="text" placeholder="探索新世界" v-model.trim="shareValue" class="search_input"
        oninput="if(value.length>8)value=value.slice(0,8)" @focus="searchFocus()" @blur="searchBlur()">
        <!-- 搜索按钮 -->
        <button type="submit" value="" @click="search" class="search_button">搜索</button>
    </div>
</template>
<script>
export default{
	data(){
		return{
      shareValue: '', //搜索框值
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
        search(){
            alert("搜索中...")
        },
        voice(){
            alert("正在打开麦克风...")
        },
       // 输入框获取焦点事件
        searchFocus(){

        },
        // 输入框失去焦点事件
        searchBlur(){

        },

    },
    // 监听数据发生变化时操作
    watch:{

    }
}
</script>
<style>
.vueone_search{
    width: 92%;
    height: 0.8rem;
    padding: 0.2rem 4%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    background-color: white;
    z-index: 999;
    border-bottom: 0.01rem solid #dddddf;
}
.search_img img{
    width: 0.6rem;
    height: 0.6rem;
    margin: 0.1rem 0;
}
.search_input{
    width: 70%;
    height: 0.8rem;
    border-radius: 0.2rem;
    text-align: center;
    border: none;
    background-color: #ededed;
    font-size: 0.3rem;
}
.search_button{
    width: 1rem;
    height: 0.6rem;
    border: none;
    border-radius: 0.1rem;
    background-color: #17b3a3;
    color: white;
    font-size: 0.3rem;
    outline: none;
    margin: 0.1rem 0;
}
</style>

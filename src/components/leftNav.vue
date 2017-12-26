<template>
  <div>
    <el-menu 
    :default-active="urlIndex" class="leftnav" :router="true"
    background-color="#409EFF" text-color="#878D99" active-text-color="#fff">
    <el-menu-item index="/">
        <i class="iconfont icon-shouye1"></i>
        <span slot="title" >首页</span>
    </el-menu-item>
    <el-menu-item index="/table">
        <i class="iconfont icon-canzhuo1"></i>
        <span slot="title">餐桌</span>
    </el-menu-item>

    <el-menu-item index="/total">
        <i class="iconfont icon-tongji1"></i>
        <span slot="title">统计</span>
    </el-menu-item>

    </el-menu>

  </div>
</template>

<script>
  export default {
    data(){
        return{
            
        }
        
    },
    computed:{
        // 获取当前url的path值
        urlIndex(){
            return this.$route.path;
        },
    },
  }
</script>

<style>
.el-menu{
    border:none;
    height: 100%;
}
.el-menu-item:nth-child(1){
    margin-top:50px; 
}
.el-menu-item>i{
    font-size:35px;
    margin-right: 5px;
    text-shadow: 1px 1px 1px #888888;
}
.el-menu-item>span{
    font-size:18px;
    font-weight: bold;
    text-shadow: 1px 1px 1px #888888;
}
.badge {
  
}
</style>
<template>
  <div>
      <el-row>
          <el-col :span="3"><left-nav id="leftNav" class="hidden-sm-and-down"></left-nav></el-col>
          <el-col :span="21"><router-view></router-view></el-col>
      </el-row>
      
  </div>
</template>

<script>
import leftNav from '../components/leftNav'
import 'element-ui/lib/theme-chalk/display.css';
export default{
    mounted:function(){
        // 获取clientHeight
        var navHeight = document.body.clientHeight;
        // 将leftNav高度设为clientHeight
        document.getElementById('leftNav').style.height=navHeight+'px';
    },
    components:{
        leftNav
    }
}
</script>

<style>
    #leftNav{
        border-right: 1px solid #e6e6e6;

    }
</style>
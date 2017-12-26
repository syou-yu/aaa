<template>
<div>

<el-container>
  <el-header>
    
  </el-header>
  <el-main>
    <el-row :gutter="20" type="flex" justify="center">
    <el-col :span="10">
      <div class="bg-grey table_info">
        <p><span>{{getTable_using.length}}</span>张餐桌使用中</p>
        <p><span>{{getTable_empty.length}}</span>张餐桌空余中</p>
      </div>
    </el-col>
    <el-col :span="8">
      <router-link to="table">
        <el-button type="primary" class="table_btn">
          <i class="iconfont icon-canzhuo1"></i>
          <span>餐桌管理</span>
        </el-button>
      </router-link>
    </el-col>
  </el-row>
  </el-main>
</el-container>
    
</div>
</template>

<script>
export default{
  computed: {
    getTable_empty(){
      return this.$store.getters.getTable_all.filter(function(table){
        return table.status=="empty"
      });
    },
    getTable_using(){
      return this.$store.getters.getTable_all.filter(function(table){
        return table.status=="using"
      });
    },
  }
}
</script>

<style scoped>
  .el-col {
    border-radius: 4px;
  }
  .bg-blue {
    background: #409EFF;
  }
  .bg-grey {
    background: #909399;
  }
  .table_btn{
    width:100%;
    height:100px;
  }
  .table_btn span{
    font-size:35px;
    font-weight: bold;
    text-shadow: 1px 1px 1px #888888;
    font-family: "微软雅黑"
  }
  .table_btn i{
    font-size:35px;
    margin-right: 5px;
    text-shadow: 1px 1px 1px #888888;
  }
  .table_info{
    height: 100px;
    border-radius: 4px;
    font-size: 25px;
  }
  .table_info p{
    margin:0;
    padding:0;
    line-height: 50px;
    color: #ffffff
  }
  .table_info p span{
    font-size: 35px;
    color:#F56C6C;
    padding-right: 5px;
  }


</style>

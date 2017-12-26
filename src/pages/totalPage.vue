<template>
  <div>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <total-orders></total-orders>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import totalOrders from './totalPage/totalOrders'
export default{
    components:{
      totalOrders
    }
}
</script>

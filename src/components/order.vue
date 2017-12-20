<template>
  <div>
      <el-row type="flex" justify="space-around">
        
        <el-col :span="8">
        <!-- 点餐已选商品列表 -->
          <el-table :data="orderList" style="width: 100%" max-height="300">
            <el-table-column prop="goodsName" label="商品名称" align="center"></el-table-column>
            <el-table-column prop="count" label="数量" align="center"></el-table-column>
            <el-table-column prop="price" label="金额" align="center"></el-table-column>
            <el-table-column label="操作" fixed="right" align="center">
              <template slot-scope="scope">
                <el-button type="text" size="small"  @click="handleAdd(scope.$index, scope.row)">增加</el-button>
                <el-button type="text" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        <!-- 结束点餐已选商品列表 -->

        <!-- 操作按钮 -->
        <div class="order_control_btn">
          <el-button type="primary" @click="orderList_success">完成点餐</el-button>
          <el-button type="danger" @click="orderList_del">取消点餐</el-button>
        </div>
        <!-- 结束操作按钮 -->
        </el-col>
        


        <!-- 商品菜单 -->
        <el-col :span="16" >
          <el-tabs tab-position="right" style="height:390px">

            <el-tab-pane label="凉粉系列">
              <ul class="goods_list" v-for="(goods,index) in getGoods1" :key="index">
                <li>
                  <el-button @click="orderList_add(goods)">{{goods.goodsName}}<span>￥{{goods.price}}</span></el-button>
                </li>
              </ul>
            </el-tab-pane>

            <el-tab-pane label="雪山系列">
              <ul class="goods_list" v-for="(goods,index) in getGoods2" :key="index">
                <li>
                  <el-button @click="orderList_add(goods)">{{goods.goodsName}}<span>￥{{goods.price}}</span></el-button>
                </li>
              </ul> 
            </el-tab-pane>

            <el-tab-pane label="西米露系列">
              <ul class="goods_list" v-for="(goods,index) in getGoods3" :key="index">
                <li>
                  <el-button @click="orderList_add(goods)">{{goods.goodsName}}<span>￥{{goods.price}}</span></el-button>
                </li>
              </ul>
            </el-tab-pane>

            <el-tab-pane label="糕点系列">
              <ul class="goods_list" v-for="(goods,index) in getGoods4" :key="index">
                <li>
                  <el-button @click="orderList_add(goods)">{{goods.goodsName}}<span>￥{{goods.price}}</span></el-button>
                </li>
              </ul>
            </el-tab-pane>

          </el-tabs>
        </el-col>
        <!-- 结束商品菜单 -->
      </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {

  data(){
    return{
      orderList:[]
    }
  },
  methods:{
    // 菜单添加到订单操作
    orderList_add(goods){
      let orderList_hasGoods = this.orderList.filter(function(item){
        return (item.goodsName==goods.goodsName)
      });
      let active_goods = {
        goodsName:goods.goodsName,
        price:goods.price,
        count:1
      };
      if(orderList_hasGoods==''){
        this.orderList.push(active_goods);
      }else{
        this.orderList.forEach(function(item){
          if(item.goodsName==goods.goodsName){
            item.count++;
          }
        });
      };  
    },
    // 清空订单
    orderList_del(){
      this.orderList=[];
      //主动触发close_order方法,向tablePage提示关闭order_dialog
      this.$emit('order_close')
      this.$message({
          message: '点餐取消！',
          type: 'error'
      });
    },
    // 完成点餐
    orderList_success(){
      this.$emit('order_success',this.orderList);
      this.orderList=[];
      this.$emit('order_close')
      this.$message({
          message: '点餐成功！',
          type: 'success'
      });
    },
    // 当前餐品添加操作
    handleAdd(index, row) {
        row.count++;
    },
    // 当前餐品删除操作
    handleDel(index, row) {
      this.orderList.splice(index,1);
    },

  },
  computed: {
    ...mapGetters(["getGoods"]),
    getGoods1(){
        return this.$store.getters.getGoods.filter(function(goods){
            return goods.category=="凉粉系列"
        });
    },
    getGoods2(){
        return this.$store.getters.getGoods.filter(function(goods){
            return goods.category=="雪山系列"
        });
    },
    getGoods3(){
        return this.$store.getters.getGoods.filter(function(goods){
            return goods.category=="西米露系列"
        });
    },
    getGoods4(){
        return this.$store.getters.getGoods.filter(function(goods){
            return goods.category=="糕点系列"
        });
    },
  }
  
};
</script>

<style>
.order_control_btn{
  text-align: center;
  margin-top: 20px;
}
.goods_list li {
  float: left;
  list-style: none;
  margin:0 20px 20px 20px;
}
</style>


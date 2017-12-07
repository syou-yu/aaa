<template>
  <div>
      <el-row type="flex" justify="space-around">
        
        <el-col :span="8">
        <!-- 点餐已选商品列表 -->
          <el-table :data="tableData" style="width: 100%" max-height="350">
            <el-table-column prop="goodsName" label="商品名称" align="center"></el-table-column>
            <el-table-column prop="count" label="数量" align="center"></el-table-column>
            <el-table-column prop="price" label="金额" align="center"></el-table-column>
            <el-table-column label="操作" fixed="right" align="center">
              <template slot-scope="scope">
                <el-button type="text" size="small">增加</el-button>
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        <!-- 结束点餐已选商品列表 -->

        <!-- 操作按钮 -->
        <div class="order_control_btn">
          <el-button type="primary">完成点餐</el-button>
          <el-button type="danger">取消点餐</el-button>
        </div>
        <!-- 结束操作按钮 -->
        </el-col>
        


        <!-- 商品菜单 -->
        <el-col :span="16" >
          <el-tabs tab-position="right" style="height:390px">

            <el-tab-pane label="凉粉系列">
              <ul class="goods_list" v-for="(goods,index) in getGoods1" :key="index">
                <li>
                  <el-button>{{goods.goodsName}}<span>￥{{goods.price}}</span></el-button>
                </li>
              </ul>
            </el-tab-pane>

            <el-tab-pane label="雪山系列">
              <ul class="goods_list" v-for="(goods,index) in getGoods2" :key="index">
                <li>
                  <el-button>{{goods.goodsName}}<span>￥{{goods.price}}</span></el-button>
                </li>
              </ul> 
            </el-tab-pane>

            <el-tab-pane label="西米露系列">
              <ul class="goods_list" v-for="(goods,index) in getGoods3" :key="index">
                <li>
                  <el-button>{{goods.goodsName}}<span>￥{{goods.price}}</span></el-button>
                </li>
              </ul>
            </el-tab-pane>

            <el-tab-pane label="糕点系列">
              <ul class="goods_list" v-for="(goods,index) in getGoods4" :key="index">
                <li>
                  <el-button>{{goods.goodsName}}<span>￥{{goods.price}}</span></el-button>
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
      tableData: [{goodsName:1,count:1,price:1},{goodsName:1,count:1,price:1},{goodsName:1,count:1,price:1},{goodsName:1,count:1,price:1},{goodsName:1,count:1,price:1}]
    }
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


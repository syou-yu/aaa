<template>
  <div>
    <h1>餐桌管理</h1>
    <!-- 选项卡 -->
    <el-tabs v-model="activeName" type="card">

        <!-- 总览页面 -->
        <el-tab-pane label="总览" name="all">
            <el-row class="table_all">
            <!-- 渲染餐桌列表 -->
                <el-col :span="4" v-for="(table,index) in getTable_all" :key="index">
                    <li class="table-item" :class="table.status" @click="controlTable(table)">   
                        <span >{{ table.id}}</span>
                    </li>
                </el-col>
            <!-- 结束渲染餐桌列表 -->
            </el-row>
        </el-tab-pane>
        <!-- 结束总览页面 -->

        <!-- 用餐中页面 -->
        <el-tab-pane label="用餐中" name="second">
            <el-row class="table_using">
                
                    <el-col :span="4" v-for="(table,index) in getTable_using" :key="index">
                        
                            <li class="table-item" :class="table.status" @click="controlTable(table)">   
                                <span >{{ table.id}}</span>
                            </li>
                        
                    </el-col>

            </el-row>
        </el-tab-pane>
        <!-- 结束用餐中页面 -->

        <!-- 已预约页面 -->
        <el-tab-pane label="已预约" name="third">
            <el-row class="table_reserved">
                    <el-col :span="4" v-for="(table,index) in getTable_reserved" :key="index">
                        
                            <li class="table-item" :class="table.status" @click="controlTable(table)">   
                                <span >{{ table.id}}</span>
                            </li>
                        
                    </el-col>
            </el-row>
        </el-tab-pane>
        <!-- 结束已预约页面 -->

        <!-- 空余中页面 -->
        <el-tab-pane label="空余中" name="fourth">
            <el-row class="table_empty">
                <el-col :span="4" v-for="(table,index) in getTable_empty " :key="index">
                        
                    <li class="table-item" :class="table.status" @click="controlTable(table)">   
                        <span >{{ table.id}}</span>
                    </li>
                        
                </el-col>
            </el-row>
        </el-tab-pane>
        <!-- 结束空余中页面 -->

    </el-tabs>
    <!-- 结束选项卡 -->
    
    <!-- 餐桌操作对话框 -->
    <el-dialog
    :title="this.activeTableNumber+'号餐桌操作'"
    :visible.sync="showControl"
    width="30%"
    center class="tableControl_dialog">
        <slot>
            <p>
                当前状态:
                <span v-if="this.table_isUsing" class="using">用餐中</span>
                <span v-if="this.table_hasReserved" class="reserved">已预约</span>
                <span v-if="!this.table_isUsing&&!this.table_hasReserved" class="empty">空余中</span>
            </p>
            <!-- 已点菜品列表 -->
                <el-table :data="getOrder" max-height="250" 
                show-summary :summary-method="getSummaries"
                v-if="table_isUsing"
                style="margin-bottom:20px;">
                    <el-table-column prop="goodsName" label="商品名称" align="center"></el-table-column>
                    <el-table-column prop="count" label="数量" align="center"></el-table-column>
                    <el-table-column prop="price" label="金额（元）" align="center"></el-table-column>
                </el-table>
            <!-- 结束已点菜品列表 -->
            <div class="reserved_btn" v-if="!table_isUsing" @click="close_controlDialog">
                <el-button class="onReserved" @click="$store.commit('ON_Reserved',activeTableNumber)" v-if="!this.table_hasReserved">预约餐桌</el-button>
                <el-button @click="$store.commit('ON_Empty',activeTableNumber)" v-if="this.table_hasReserved">取消预约</el-button>
            </div>
            
            <el-button v-if="!this.table_isUsing" type="primary" @click="controlOrder">立即点餐</el-button>
            <el-button v-if="this.table_isUsing" type="primary" @click="showCheckout = true">结账</el-button>
            <el-button v-if="this.table_isUsing" @click="controlOrder">继续点餐</el-button>

        </slot>
    </el-dialog>
    <!-- 结束餐桌操作对话框 -->

    <!-- 点餐操作对话框 -->
    <el-dialog
    :visible.sync="showOrder"
    width="100%"
    top="10vh"
    center class="order_dialog"
    :show-close="false"
    :close-on-click-modal="false"
    :title="this.activeTableNumber+'号餐桌点餐中'">
        <slot>
            <order-page 
            @order_close="controlOrder" 
            @order_success="table_orderSuccess"
            :orderlist="getOrder"></order-page>
        </slot>
    </el-dialog>

    <!-- 结账操作对话框 -->
    <el-dialog
    :visible.sync="showCheckout"
    width="50%">
        <checkout @close_checkout="checkout" :totalPrice="this.totalPrice" :activeTableNumber="this.activeTableNumber"></checkout>
    </el-dialog>
    

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import orderPage from '../components/order'
import checkout from '../components/checkout'
export default {
    components:{
        'order-page':orderPage,
        'checkout':checkout
    },
  data() {
    return {
    // 是否显示餐桌操作对话框
      showControl: false,
    // 是否显示点餐操作对话框
      showOrder:false,
    // 是否显示结账操作对话框 
      showCheckout:false,
    // 当前操作的餐桌Number
      activeTableNumber: 0,
    // tablePage选项卡默认选项
      activeName: "all",
    // 当前餐桌状态
      table_status: "",
    // 当前餐桌是否已预约
      table_hasReserved:false,
    // 当前餐桌是否使用中
      table_isUsing:false,
    // 当前餐桌订单
      orderList:[],
    // 订单总额
      totalPrice:0,
    };
  },
  methods: {
    controlTable(table) {
    
    // 显示操作控制对话框
        this.showControl = true;
    // 获取当前选中的餐桌Number
        this.activeTableNumber = table.id;
    // 获取当前选中餐桌的状态
        this.table_status = table.status;
    // 控制是否显示预约按钮
        if(this.table_status == "using"){
            this.table_isUsing = true;
        }else{
            this.table_isUsing = false;
        }
    // 控制预约&取消预约按钮
        if(this.table_status=="reserved"){
            this.table_hasReserved = true;
        }else{
            this.table_hasReserved = false;
        }
    },
    // 完成点单
    table_orderSuccess(orderlist){
        this.orderList=orderlist;
        let payload=[this.activeTableNumber].concat(this.orderList);
        this.$store.commit('ON_Order',payload);
        this.$store.commit('ON_Using',this.activeTableNumber);
        this.showControl=false;

    },
    // 控制点菜页面
    controlOrder(){
        if(this.showOrder){
            this.showOrder = false;
        }else{
            this.showOrder = true;
        }  
    },
    // 关闭操作框
    close_controlDialog(){
        this.showControl = false;
    },
    //   已点菜单合计
    getSummaries(param){
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[2] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });
        this.totalPrice = sums[2];
        return sums;

    },
    // 控制结账页面
    checkout(){
        if(this.showCheckout){
            this.showCheckout=false;
            this.showControl = false;
            this.$store.commit('ON_Empty',this.activeTableNumber);
        }else{
            this.showCheckout=true;
        }
        
    }
  },

  computed: {
    ...mapGetters(["getTable_all"]),
    getTable_using(){
        return this.$store.getters.getTable_all.filter(function(table){
            return table.status=="using"
        });
    },
    getTable_reserved(){
        return this.$store.getters.getTable_all.filter(function(table){
            return table.status=="reserved"
        });
    },
    getTable_empty(){
        return this.$store.getters.getTable_all.filter(function(table){
            return table.status=="empty"
        });
    },
    getOrder(){
        let activeIndex=0;
        if(this.activeTableNumber==0){
            activeIndex=0;
        }else{
            activeIndex=this.activeTableNumber-1
        }
        return this.$store.getters.getOrderlist(activeIndex);
    },

  }
};
</script>

<style scoped>
/* 设置table-item样式 */
.table-item {
  text-align: center;
  list-style: none;
  width: 120px;
  height: 120px;
  background-color: #f6f6f6;
  margin: 15px auto;
  border-radius: 60px;
  cursor: pointer;
}
/* 居中table-item里面数字 */
.table-item > span {
  line-height: 120px;
  font-size: 30px;
}
.reserved_btn{
    display: inline;
}
/* empty、using、reserved状态样式 */
.empty {
  background-color: #f6f6f6 !important;
}
.using {
  background-color: #409eff !important;
}
.reserved {
  background-color: #EB9E05 !important;
}
</style>

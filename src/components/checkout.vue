<template>
<div>
    <p>本次消费：<span class="totalPrice">{{this.totalPrice}}</span></p>
    
    <p>请选择支付方式：</p>
    <el-row type="flex" justify="center">
        <el-col :span="8" >
                <el-card class="wechat" @click.native="wechat_pay">
                <i class="iconfont icon-weixinzhifu"></i>
                <img class="QRcode" src="../../static/wechat.jpg" alt="">
                
                <div class="bottom clearfix"></div>
            </el-card>
            
        </el-col>
            
    </el-row>
   



    


</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default{
    props:['totalPrice','activeTableNumber'],
    data(){
        return{
          
        }
    },
    computed:{
        
    },
    methods: {
        ...mapMutations([
            'ADD_orders',
        ]),
        wechat_pay(){
            let payload=this.activeTableNumber-1;
            this.ADD_orders(payload)
            this.$message({
                message: '支付成功',
                type: 'success'
            });
            this.$emit('close_checkout');
        }
    }
}
</script>

<style scoped>
.totalPrice{
    font-size: 30px;
    color:#F56C6C;
}
.wechat{
    cursor:pointer;
}
.QRcode {
    width: 100%;
    display: inline-block;
}
.iconfont{
    display: inline-block;
    margin:10px 0;
    font-size: 40px;
    color:green;
}

.clearfix:before,
.clearfix:after {
      display: table;
      content: "";
}
  
.clearfix:after {
      clear: both
}
</style>

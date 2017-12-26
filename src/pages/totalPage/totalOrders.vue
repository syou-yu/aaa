<template>
<div>
    <el-card v-for="(item,index) in getOrders" :key="index">
        <div slot="header">
            <span>第{{index+1}}单</span> <span>{{item.time}}</span>
        </div>
        <ul v-for="(goods,a) in item.order" :key="a">
            <li>{{goods.goodsName}}</li>
        </ul>
    </el-card>
    {{getOrders}}
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default{
    computed: {
    ...mapGetters(["getOrders"]),
    }
}
</script>

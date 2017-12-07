import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    goods: [{
            goodsName: "椰汁凉粉",
            category: "凉粉系列",
            price: 19
        },
        {
            goodsName: "西瓜凉粉",
            category: "凉粉系列",
            price: 19
        },
        {
            goodsName: "芒果凉粉",
            category: "凉粉系列",
            price: 28
        },
        {
            goodsName: "鲜杂果凉粉",
            category: "凉粉系列",
            price: 33
        },
        {
            goodsName: "雪山榴莲",
            category: "雪山系列",
            price: 39
        },
        {
            goodsName: "椰汁马豆糕",
            category: "糕点系列",
            price: 16
        }
    ]
};

const mutations = {

};

const getters = {
    getGoods1(state) {
        let goods1 = [];
        for (let i = 0; i < state.goods.length; i++) {
            if (state.goods[i].category == "凉粉系列") {
                goods1.push(state.goods[i]);
            }
        }
        return goods1;
    },

};

export default new Vuex.Order({
    state,
    getters,
    mutations
})
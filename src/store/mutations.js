import * as types from './mutation-types';

const mutations = {
    [types.ON_Reserved](state, index) {
        let active_table = state.table[index - 1];
        active_table.status = 'reserved';
    },
    [types.ON_Empty](state, index) {
        let active_table = state.table[index - 1];
        active_table.status = 'empty';
    },
    [types.ON_Using](state, index) {
        let active_table = state.table[index - 1];
        active_table.status = 'using';
    },
    [types.ON_Order](state, payload) {
        // console.log(payload);
        let active_table = state.table[payload[0] - 1];
        let order = payload.slice(1);
        let hasGoods = false;
        let repeatGoods = 0;
        // console.log(payload.slice(1));
        // console.log(active_table.orderlist.length)

        active_table.orderlist.forEach(item => {
            order.forEach(function(goods, index) {
                if (goods.goodsName == item.goodsName) {
                    hasGoods = true;
                    item.count += goods.count;
                    item.price += goods.price;
                    // 找出重复商品在数组中的序号
                    repeatGoods = index;
                }
            })
        });

        if (active_table.orderlist.length == 0) {
            active_table.orderlist = order;
        } else if (hasGoods) {
            // 在数组删除以重复的商品
            let noRepeatItem = order.splice(repeatGoods + 1, 1);
            active_table.orderlist = active_table.orderlist.concat(noRepeatItem);
        }


    },
}

export default mutations;
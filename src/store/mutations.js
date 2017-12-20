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
        // console.log(payload.slice(1));
        active_table.orderlist = payload.slice(1);

    },
}

export default mutations;
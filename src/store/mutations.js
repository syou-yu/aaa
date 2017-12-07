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
}

export default mutations;
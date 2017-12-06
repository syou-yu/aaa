import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    count: 1,
    table: [
        { id: 1, status: 'using' },
        { id: 2, status: 'empty' },
        { id: 3, status: 'reserved' },
        { id: 4, status: 'empty' },
        { id: 5, status: 'empty' },
        { id: 6, status: 'empty' },
        { id: 7, status: 'empty' },
        { id: 8, status: 'empty' },
        { id: 9, status: 'empty' },
        { id: 10, status: 'empty' }
    ]
};

const mutations = {
    onReserved(state, index) {
        let active_table = state.table[index - 1];
        active_table.status = 'reserved';
    },
    onEmpty(state, index) {
        let active_table = state.table[index - 1];
        active_table.status = 'empty';
    }
};

const getters = {
    getTable_all(state) {
        return state.table;
    },
    getTable_using(state) {
        let using = [];
        for (let i = 0; i < state.table.length; i++) {
            if (state.table[i].status == 'using') {
                using.push(state.table[i]);
            }
        }
        return using;
    },
    getTable_reserved(state) {
        let reserved = [];
        for (let i = 0; i < state.table.length; i++) {
            if (state.table[i].status == 'reserved') {
                reserved.push(state.table[i]);
            }
        }
        return reserved;
    }
};

export default new Vuex.Store({
    state,
    getters,
    mutations
})
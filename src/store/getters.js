export const getTable_all = (state) => {
    return state.table;
};

export const getGoods = (state) => {
    return state.goods;
};

// export const getTable = (state, getters) => (id) => {
//     return state.table[id - 1].orderlist;
// };
export const getTable = (state) => (index) => {
    return state.table[index].orderlist
}
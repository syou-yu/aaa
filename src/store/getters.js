export const getTable_all = (state) => {
    return state.table;
};

export const getGoods = (state) => {
    return state.goods;
};

export const getTable = (state) => (index) => {
    return state.table[index - 1];
};
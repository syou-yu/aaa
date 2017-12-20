const state = {
    table: [
        { id: 1, status: 'using', orderlist: [] },
        { id: 2, status: 'empty', orderlist: [] },
        { id: 3, status: 'reserved', orderlist: [] },
        { id: 4, status: 'empty', orderlist: [] },
        { id: 5, status: 'empty', orderlist: [] },
        { id: 6, status: 'empty', orderlist: [] },
        { id: 7, status: 'empty', orderlist: [] },
        { id: 8, status: 'empty', orderlist: [] },
        { id: 9, status: 'empty', orderlist: [] },
        { id: 10, status: 'empty', orderlist: [] }
    ],
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


export default state;
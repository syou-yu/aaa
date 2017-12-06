import Vue from 'vue'
import Router from 'vue-router'
import layout from '../pages/layout.vue'
import indexPage from '../pages/indexPage.vue'
import tablePage from '../pages/tablePage.vue'
import totalPage from '../pages/totalPage.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: layout,
        children: [
            { path: '/', name: 'Index', component: indexPage },
            { path: '/table', name: 'TableDetails', component: tablePage },
            { path: '/total', name: 'TotalDetails', component: totalPage }

        ]
    }, ]
})
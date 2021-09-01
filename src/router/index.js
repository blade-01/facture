import Vue from 'vue'
import VueRouter from 'vue-router'
import Invoice from '../views/Invoice.vue'
import Edit from '../views/editInvoice.vue'
import Add from '../views/addInvoice.vue'
import Single from '../views/singleInvoice.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Invoice',
    component: Invoice,
    children: [
      {
        path: 'add',
        name: 'add',
        component: Add,
      }
    ]
  },
  {
    path: '/invoice/:id',
    name: 'single',
    component: Single,
    props: true,
    children: [
      {
        path: 'edit',
        name: 'edit',
        component: Edit,
        props: true,
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

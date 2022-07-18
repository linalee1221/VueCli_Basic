import Vue from 'vue'
import VueRouter from 'vue-router'
// 대메뉴 홈페이지
import HomeView from '@/views/HomeView.vue'
import Login from '@/views/LoginView.vue'
import NotFound from '@/views/NotFound.vue'
// 중메뉴 홈페이지
import AdminView from '@/views/admin/AdminView.vue'
import ProductEdit from '@/views/admin/ProductEdit.vue'
import ProductInsert from '@/views/admin/ProductInsert.vue'
import ProductList from '@/views/admin/ProductList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // login 페이지
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // admin 페이지
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    children: [
      {
        path:"list",
        name: "productlist",
        component: ProductList
      },
      {
        path:"insert",
        name: "ProductInsert",
        component: ProductInsert
      },
      {
        path:"edit/:id",
        name: "ProductEdit",
        component: ProductEdit
      },
    ]
  },


  // 아래는 에러 페이지
  {
    path: '*',
    name: 'notfound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

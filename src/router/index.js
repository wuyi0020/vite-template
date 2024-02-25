import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FontView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'product',
        name: 'Product',
        component: () => import('../views/ProductView.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/CartView.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/LoginAdmin.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/AdminView.vue'),
    children: [
      {
        path: 'product',
        name: 'AdminProduct',
        component: () => import('../views/ProductAdmin.vue')
      },
      {
        path: 'order',
        name: 'AdminOrder',
        component: () => import('../views/OrderAdmin.vue')
      }
    ]

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router

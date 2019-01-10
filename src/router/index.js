import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      redirect: '/login'
    }, */
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index')
    },
    {
      path: '/product',
      component: Layout,
      redirect: '/product/index',
      children: [
        {
          path: 'index',
          name: 'Product',
          component: () => import('@/views/product/index'),
          children: [
            {
              path: 'add',
              name: 'AddProduct',
              component: () => import('@/views/product/add/index')
            }
          ]
        }
      ]
    },
    {
      path: '/prescription',
      component: Layout,
      redirect: '/prescription/index',
      children: [
        {
          path: 'index',
          name: 'Prescription',
          component: () => import('@/views/prescription/index'),
          children: [
            {
              path: 'details',
              name: 'PrescriptionDetails',
              component: () => import('@/views/prescription/details/index')
            }
          ]
        }
      ]
    },
    {
      path: '/statistics',
      component: Layout,
      redirect: '/statistics/index',
      children: [
        {
          path: 'index',
          name: 'Statistics',
          component: () => import('@/views/statistics/index')
        }
      ]
    }
  ]
})

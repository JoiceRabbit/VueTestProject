import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index.vue'

Vue.use(Router)   // 单页路由

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})

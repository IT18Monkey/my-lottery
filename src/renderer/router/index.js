import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/lottery/super',
      name: 'super-lotto',
      component: require('@/components/SuperLotto').default
    },
    {
      path: '/lottery/union',
      name: 'union-lotto',
      component: require('@/components/UnionLotto.vue').default
    },
    {
      path: '*',
      redirect: '/lottery/super'
    }
  ]
})

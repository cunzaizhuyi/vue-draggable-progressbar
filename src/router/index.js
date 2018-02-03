import Vue from 'vue'
import Router from 'vue-router'
import ProgressBar from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProgressBar',
      component: ProgressBar
    }
  ]
})

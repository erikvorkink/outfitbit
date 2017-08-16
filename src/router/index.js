import Vue from 'vue'
import VueFire from 'vuefire'
import VueMoment from 'vue-moment'

import Router from 'vue-router'
import OutfitRecorder from '@/views/OutfitRecorder'
import History from '@/views/History'

Vue.use(Router)
Vue.use(VueFire)
Vue.use(VueMoment)

export default new Router({
  routes: [
    {
      path: '/record',
      alias: '/',
      name: 'Record',
      component: OutfitRecorder
    },
    {
      path: '/history',
      name: 'History',
      component: History
    }
  ]
})

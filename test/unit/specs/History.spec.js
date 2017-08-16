import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

import History from '@/views/History'

describe('History.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(History)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h4').textContent)
      .to.equal('History')
  })
})

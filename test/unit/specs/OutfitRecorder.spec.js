import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

import OutfitRecorder from '@/views/OutfitRecorder'

describe('OutfitRecorder.vue', () => {
  it('should contain the correct article types', () => {
    const Constructor = Vue.extend(OutfitRecorder)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelectorAll('h5')[0].textContent).to.equal('Shirt')
    expect(vm.$el.querySelectorAll('h5')[1].textContent).to.equal('Pants')
    expect(vm.$el.querySelectorAll('h5')[2].textContent).to.equal('Shoes')
  })
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Field from '@/components/Field'
import FormText from '@/components/FormText'
import FormSelect from '@/components/FormSelect'

import '../scss/style.scss'
Vue.config.productionTip = false

const components = [
  Field,
  FormText,
  FormSelect
]

components.map(component => {
  Vue.component(component.name, component)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

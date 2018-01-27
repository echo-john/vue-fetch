import Vue from 'vue'
import Router from 'vue-router'
import MedicalForm from '@/components/MedicalForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MedicalForm',
      component: MedicalForm
    }
  ]
})

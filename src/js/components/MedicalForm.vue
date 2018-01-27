<template>
  <form>
    <!-- <pre>{{ formData }}</pre> -->
  <h1>{{ formData.formName }}</h1>
    <div v-for="(field, key) in formData.fields" :key="key">
      <h3>{{ field.name }}</h3>
      <div v-for="(subField, key) in field.subFields" :key="key">
        <h4>{{ subField.name }}</h4>        
        <component v-if="subField.condition === undefined || check(subField.condition)" :is="subField.component" :data="subField"  />
      </div>
    </div>
  </form>
</template>

<script>
import formData from '&/medicalHistory.json'
// var formData = require('json-loader!yaml-loader!&/medicalHistory.yaml')
export default {
  name: 'MedicalForm',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      test: '',
      duration: ''
    }
  },
  computed: {
    formData () {
      return formData
    }
  },
  created () {
    console.log(formData)
  },
  methods: {
    check: eval
  }
}
</script>

<style scoped lang="scss">

</style>

<template>
  <form>
    <pre>{{ form }}</pre>
    <h1>{{ formData.formName }}</h1>
    <div v-for="(field, key) in formData.fields" :key="key">
      <Field :data="field" v-model="form[field.name]" />
      <div v-for="(subField, key) in field.subFields" :key="key">
        <Field :data="subField" v-model="form[subField.name]" />
      </div>
    </div>
  </form>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
import formData from '&/medicalHistory.js'
// import formData from '&/medicalHistory.json'
// const formData = require('json-loader!yaml-loader!&/medicalHistory.yaml')
export default {
  name: 'MedicalForm',
  data () {
    return {
      form: {
        vomiting: undefined,
        duration: undefined,
        frequency: undefined,
        content: undefined,
        notes: undefined,
        dayOfWeek: undefined
      }
    }
  },
  computed: {
    formData () {
      return formData
    }
  }
}
</script>

<!--/////////////////////////////////////////////////////////////////////////-->

<style scoped lang="scss">

</style>

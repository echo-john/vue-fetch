<template>
  <select @change="emitChange" v-model="fieldValue">
    <option :value="option.value" v-for="(option, key) in data.options" :key="key">{{ option.label }}</option>
  </select>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
export default {
  name: 'FormSelect',
  props: {
    data: {
      type: Object
    },
    value: {
      type: [String, Boolean]
    }
  },
  data () {
    return {
      fieldValue: this.value
    }
  },
  methods: {
    emitChange () {
      this.$emit('input', this.fieldValue)
    }
  },
  created () {
    if (this.data.default !== undefined) {
      this.fieldValue = this.data.default
      this.emitChange()
    }
  }
}
</script>

<!--/////////////////////////////////////////////////////////////////////////-->

<style scoped lang="scss">

</style>

<template>
  <div v-if="isVisible">
    <h4>{{ data.name }}</h4>
    <component
      :is="data.component"
      :data="data"
      v-model="value"
      @input="emitChange"
      />
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
export default {
  name: 'Field',
  props: {
    data: {
      type: Object,
      fieldValue: null
    }
  },
  data () {
    return {
      value: this.fieldValue
    }
  },
  watch: {
    isVisible (val) {
      const output = val
        ? this.value
        : undefined
      this.$emit('input', output)
    }
  },
  computed: {
    isVisible () {
      return this.data.condition !== undefined
        ? this.data.condition.apply(this.$parent)
        : true
    }
  },
  methods: {
    emitChange () {
      this.$emit('input', this.value)
    }
  }
}
</script>

<!--/////////////////////////////////////////////////////////////////////////-->

<style scoped lang="scss">

</style>

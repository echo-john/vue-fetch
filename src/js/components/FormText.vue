<template>
  <input type="text" v-model="fieldValue" @change="emitChange" :placeholder="data.placeholder" :name="data.name" />
</template>

<script>
export default {
  name: 'FormText',
  props: {
    // name: {
    //   type: String
    // },
    // placeholder: {
    //   type: String
    // },
    value: {
      type: String
    },
    data: {
      type: Object
    }
  },
  data () {
    return {
      fieldValue : this.value
    }
  },
  methods: {
    emitChange () {
      this.$emit('input',this.fieldValue)
    }
  },
  computed: {
    
  },
  created () {

  }
}
</script>

<style scoped lang="scss">

</style>

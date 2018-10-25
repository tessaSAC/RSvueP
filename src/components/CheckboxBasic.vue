<template>
<div class="CheckboxBasic">
  <input type="checkbox"
    :id="makeId(label)"
    :name="makeId(label)"
    @change="this.$emit"
  />
  <LabelBasic :id="label" :label="label" />
</div>
</template>

<script>
import LabelBasic from './LabelBasic'

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },

  components: {
    LabelBasic,
  },

  methods: {
    makeId(id) {
      return id.split(' ').join('_')
    },
  },
}
</script>

<style lang="scss">
.CheckboxBasic {
  @extend %Input-Container;
}
</style>

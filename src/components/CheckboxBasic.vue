<template>
<div class="CheckboxBasic">
  <input type="checkbox"
    :id="newId"
    :name="newId"
    :checked="checked"
    :disabled="disabled"
    @change="handleCheck"
  />
  <LabelBasic :id="newId" :label="label" />
</div>
</template>

<script>
import CheckboxMixin from './CheckboxMixin'
import LabelBasic from './LabelBasic'

// TODO: bind attrs for all components
export default {
  components: {
    LabelBasic,
  },

  mixins: [ CheckboxMixin, ],

  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.CheckboxBasic {
  @extend %Input-Container;
}
</style>

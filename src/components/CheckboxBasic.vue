<template>
<div class="CheckboxBasic">
  <input type="checkbox"
    :id="newId"
    :name="newId"
    :disabled="disabled"
    @change="handleCheck"
  />
  <LabelBasic :id="newId" :label="label" />
</div>
</template>

<script>
import CheckboxMixin from './CheckboxMixin'
import LabelBasic from './LabelBasic'

export default {
  mixins: [ CheckboxMixin, ],

  components: {
    LabelBasic,
  },
}
</script>

<style lang="scss">
.CheckboxBasic {
  @extend %Input-Container;
}
</style>

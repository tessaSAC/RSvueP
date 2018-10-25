<template>
<label :for="id" :name="id" class="LabelBasic">{{ label }}</label>
</template>

<script>
export default {
  props: {
    labeling: {
      type: String,
      default: '',
    },

    label: {
      type: String,
      default: '',
    }
  },

  computed: {
    id() {
      return this.labeling.split(' ').join('_')
    }
  }
}
</script>

<style lang="scss">
.LabelBasic {
  display: inline-block;
  margin: 0 $Text-Size-S;
  font-size: $Text-Size-M;
  font-weight: 500;
}
</style>

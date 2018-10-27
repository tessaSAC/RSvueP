<template>
<label :for="id" :name="id" class="LabelBasic">{{ label }}</label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
  },

  computed: {
    id() {
      return this.label.split(' ').join('_')
    }
  }
}
</script>

<style lang="scss">
.LabelBasic {
  display: inline-block;
  margin: 0 $Text-Size-S;
  cursor: pointer;
  font-size: $Text-Size-M;
  font-weight: 500;
}
</style>

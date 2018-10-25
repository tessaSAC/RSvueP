<template>
<p class="LabelSublabel">{{ sublabel }}</p>
</template>

<script>
export default {
  props: {
    sublabel: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss">
.LabelSublabel {
  display: inline-block;
  margin: 0.3rem 0;
  font-size: $Text-Size-S;
  color: $Color-Text-70;
}
</style>

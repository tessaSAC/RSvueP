<template>
<button>
  {{ label }}
</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  }
}
</script>

<style>

</style>

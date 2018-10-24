<template>
<!-- <form action="/mycoolguestlist" method="post">
</form> -->
<div class="InputBasic">
  <label :for="id">{{ label }}</label>
  <input :id="id" :placeholder="placeholder" type="text" />
</div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
    },
  }
}
</script>

<style>

</style>

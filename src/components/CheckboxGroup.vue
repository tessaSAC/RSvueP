<template>

<fieldset class="CheckboxGroup">
  <legend>{{ legend }}</legend>
  <ol>
    <li v-for="choice in choices" :key="choice">
      <label :for="choice">{{ choice }}</label>
      <input type="checkbox" :id="makeId(choice)" :name="makeId(choice)" />
    </li>
  </ol>
</fieldset>
</template>

<script>
export default {
  props: {
    legend: {
      required: true,
      type: String,
    },
    choices: {
      required: true,
      type: Array,
    },
  },
  methods: {
    makeId(id) {
      return id.split(' ').join('_')
    }
  },
}
</script>

<style>

</style>

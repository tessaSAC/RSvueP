<template>
  <div id="app">
    <InputBasic
      id="name"
      label="Your name"
      optional
      @input-changed="updateValue($event, 'textInput')"
    />
    <CheckboxGroup :choices="choices" legend="choices" label="choices" />

    <!-- <form action="/mycoolguestlist" method="post">
    </form> -->
  </div>
</template>

<script>
import InputBasic from "./components/InputBasic.vue";
import CheckboxGroup from "./components/CheckboxGroup.vue";

export default {
  name: "app",

  components: {
    InputBasic,
    CheckboxGroup,
  },

  data: _ => ({
    textInput: '',
    choices: {
      fish: false,
      veggies: false,
    },
  }),

  methods: {
    updateValue(val, key) {
      this[key] = val
    },
  },
}
</script>

<style lang="scss">
#app {
}
</style>

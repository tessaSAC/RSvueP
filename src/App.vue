<template>
  <div id="app">
    <InputBasic
      id="name"
      label="Your name"
      optional
      @input="updateValue($event, 'textInput')"
    />
    <CheckboxGroup :choices="choices" legend="choices" label="choices" />
    <CheckboxToggle id="binary" label="a toggle" @change="handleToggle" />

    <!-- <form action="/mycoolguestlist" method="post">
    </form> -->
  </div>
</template>

<script>
import InputBasic from './components/InputBasic';
import CheckboxGroup from './components/CheckboxGroup';
import CheckboxToggle from './components/CheckboxToggle'

export default {
  name: "app",

  components: {
    InputBasic,
    CheckboxGroup,
    CheckboxToggle,
  },

  data: _ => ({
    textInput: '',
    choices: {
      fish: false,
      veggies: false,
    },
    toggle: false,
  }),

  methods: {
    handleToggle(e) {
      console.log('hi', e)
    },
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

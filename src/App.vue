<template>
  <div id="app">
    <h1>RSvueP</h1>
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
  h1 {
    margin: 4rem 2.8rem;
    font-size: $Text-Size-5XL;
  }
}
</style>

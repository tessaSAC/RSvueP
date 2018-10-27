<template>
  <div id="app">
    <form action="/exampleUse" method="post">
      <h1>RSvueP</h1>
      <InputBasic
        id="name"
        label="Name"
        @input="updateValue($event, 'name')"
      />

      <InputBasic
        id="relationship"
        label="Relationship"
        optional
        @input="updateValue($event, 'relationship')"
      />

      <CheckboxGroup :options="water" legend="water" label="Water" />
      <CheckboxToggle id="binary" label="Attending" @change="handleToggle" />

      <ButtonBasic label="RSVP!" />
    </form>
  </div>
</template>

<script>
import InputBasic from './components/InputBasic'
import CheckboxGroup from './components/CheckboxGroup'
import CheckboxToggle from './components/CheckboxToggle'
import ButtonBasic from './components/ButtonBasic'

export default {
  name: "app",

  components: {
    InputBasic,
    CheckboxGroup,
    CheckboxToggle,
    ButtonBasic,
  },

  data: _ => ({
    name: '',

    relationship: '',

    water: {
      flat: false,
      sparkling: false,
    },

    attending: false,
  }),

  methods: {
    updateValue(val, key) {
      this[key] = val
    },

    handleToggle(e) {
      this.attending = e
    },
  },
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  justify-content: center;

  form {
    width: 50vw;
    min-width: 600px;
    margin: 1rem;
    overflow: auto;
    padding: 1rem 2rem;
    border-radius: 0.2rem;
    border: 1px solid $Color-Theme-100;
  }

  h1 {
    margin: 2rem 2.8rem;
    font-size: $Text-Size-5XL;
  }

  .ButtonBasic {
    margin-bottom: 2rem;
  }
}
</style>

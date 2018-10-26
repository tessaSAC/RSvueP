<template>
<div class="CheckboxToggle">
  <LabelBasic :id="newId" :label="label" />
  <input type="checkbox"
    :id="newId"
    :name="newId"
    :disabled="disabled"
    @change="handleCheck"
  />
  <div class="toggle">
    <div class="nub" :class="{ checked }" />
  </div>
</div>
</template>

<script>
import CheckboxMixin from './CheckboxMixin'
import CheckboxBasic from './CheckboxBasic'
import LabelBasic from './LabelBasic'

export default {
  mixins: [ CheckboxMixin, ],

  components: {
    CheckboxBasic,
    LabelBasic,
  },

  data: _ => ({
    checked: false,
  }),

  methods: {
    handleCheck(e) {
      console.log('hi')
      // this.checked = e
      // this.$emit('change', e)
    }
  },
}
</script>

<style lang="scss">
.CheckboxToggle {
  display: flex;
  align-items: center;

  input {
    width: 0;
    height: 0;
    display: none;
    opacity: 0;
  }

  .toggle {
    width: 2rem;
    height: 1rem;
    border-radius: 50%/100%;
    background-color: $Color-Theme-100;
  }

  .nub {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: $Color-Theme-Enemy-100;
  }
}
</style>

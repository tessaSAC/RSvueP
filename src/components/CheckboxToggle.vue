<template>
<div class="CheckboxToggle">
  <LabelBasic :id="newId" :label="label" />
  <input type="checkbox"
    :id="newId"
    :name="newId"
    :checked="isChecked"
  />
  <div
    class="toggle"
    @click="toggleCheckbox"
  >
    <div class="nub"
    :class="{ isChecked }" />
  </div>
</div>
</template>

<script>
import CheckboxMixin from './CheckboxMixin'
import CheckboxBasic from './CheckboxBasic'
import LabelBasic from './LabelBasic'

export default {
  props: {
    checked: {
      type: Boolean,
      default: false,
    },

    // TODO: add capability
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  mixins: [ CheckboxMixin, ],

  components: {
    CheckboxBasic,
    LabelBasic,
  },

  data: _ => ({
    isChecked: false,
  }),

  watch: {
    checked() {
      this.isChecked = this.checked
    },
  },

  created() {
    this.isChecked = this.checked
  },

  methods: {
    toggleCheckbox() {
      this.isChecked = !this.isChecked
      this.$emit('change', this.checked)
    }
  },
}
</script>

<style lang="scss">
$nubSize: 1rem;

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
    position: relative;
    width: $nubSize * 2;
    height: $nubSize;
    border-radius: 50%/100%;
    background-color: $Color-Theme-100;
  }

  .nub {
    position: relative;
    left: 0;
    transition: 100ms ease-in;
    width: $nubSize;
    height: $nubSize;
    border-radius: 50%;
    background-color: $Color-Theme-Enemy-100;

    &.isChecked {
      left: $nubSize;
    }
  }
}
</style>

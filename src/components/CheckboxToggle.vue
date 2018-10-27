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
    :class="{ isChecked }"
    @click="toggleCheckbox"
  >
    <div class="nub" />
  </div>
</div>
</template>

<script>
import CheckboxMixin from './CheckboxMixin'
import CheckboxBasic from './CheckboxBasic'
import LabelBasic from './LabelBasic'

export default {
  components: {
    CheckboxBasic,
    LabelBasic,
  },

  mixins: [ CheckboxMixin, ],

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
  @extend %Input-Container;
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
    transition: 100ms ease-in;

    &.isChecked {
      background-color: $Color-Focus-100;

      .nub {
        left: $nubSize;
      }
    }
  }

  .nub {
    position: relative;
    left: 0;
    transition: 100ms ease-in;
    width: $nubSize;
    height: $nubSize;
    border-radius: 50%;
    background-color: $Color-Theme-Contrast-100;
  }
}
</style>

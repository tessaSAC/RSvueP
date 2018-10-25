<template>
<div class="CheckboxToggle">
  <LabelBasic :id="newId" :label="label" />
  <input type="checkbox"
    :id="newId"
    :name="newId"
    :disabled="disabled"
    @change="handleCheck"
  />
  <span class="toggle" />
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

  methods: {
    handleCheck() {
      this.$emitm('change', )
    }
  }
}
</script>

<style lang="scss">
.CheckboxToggle {
  position: relative;

  input {
    width: 0;
    height: 0;
    display: none;
    opacity: 0;
  }

  .LabelBasic {
    &:after {
        content: "";
        top: 4px;
        right: 10px;
        width: 30px;
        height: 12px;
        // use absolute for better positioning
        position: absolute;
        border-radius: 30px;
    }
    &+ .toggle {
        top: 0;
        width: 20px;
        height: 20px;
        border-radius: 30px;
        display: inline-block;
        position: absolute;
        cursor: pointer;
        pointer-events: none;
        box-shadow: 1px 1px 1px $Color-Theme-100;
        // add some CSS3-animations
        -webkit-transition: right .1s ease-in, background-color .1s ease-in;
        -moz-transition: right .1s ease-in, background-color .1s ease-in;
        -o-transition: right .1s ease-in, background-color .1s ease-in;
        -ms-transition: right .1s ease-in, background-color .1s ease-in;
    }
  }

  [type="checkbox"]:checked,
    &:checked + label:after {
        background-color: $Color-Focus;
    }
    &:not(:checked) + label:after {
        background-color: $Color-Theme-100;
    }

    &:checked + label + .toggle {
        right:5px;
        background-color: $Color-Focus;
    }
    &:not(:checked) + label + .toggle {
        right: 25px;
        background-color: $Color-Theme-100;

    &:focus + label:after,
    &:focus + label + .toggle {
        box-shadow: 0 0 6px 0 $Color-Focus;
    }
    &[disabled] {
      & + label,
      & + label:after,
      & + label + .toggle {
          cursor: not-allowed;
          opacity: 0.4;
      }
    }
  }
}
</style>

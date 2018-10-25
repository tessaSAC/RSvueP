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
      // this.$emit('change', )
    }
  }
}
</script>

<style lang="scss">
.CheckboxToggle {
  position: relative;

  // input {
  //   width: 0;
  //   height: 0;
  //   display: none;
  //   opacity: 0;
  // }

  [type="checkbox"] {
      width: 0;
      height: 0;
      display: none;
      opacity: 0;
    & + label {
      cursor: pointer;
      display: inline-block;
      margin-right: 10px;
      margin-top: 10px;
      margin-bottom: 10px;
      // apply padding so the switch fits inside the label
      padding-right: 60px;
    }

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
      & + .toggle {
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
        -webkit-transition: right .1s ease-in, $Color-Theme-30d .1s ease-in;
        -moz-transition: right .1s ease-in, $Color-Theme-30d .1s ease-in;
        -o-transition: right .1s ease-in, $Color-Theme-30d .1s ease-in;
        -ms-transition: right .1s ease-in, $Color-Theme-30d .1s ease-in;
      }
    // }
    &:focus + label:after,
    &:focus + label + .toggle {
      box-shadow: 0 0 6px 0 Color-Focus;
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
  & > [type="checkbox"]:checked + label:after {
      background-color: $Color-Theme-70;
  }
  & > [type="checkbox"]:not(:checked) + label:after {
      background-color: $Color-Theme-100;
  }
  & > [type="checkbox"]:checked + label + .toggle {
      right:5px;
      background-color: $Color-Focus;
  }
  & > [type="checkbox"]:not(:checked) + label + .toggle {
      right: 25px;
      background-color: $Color-Theme-100;
  }
}
</style>

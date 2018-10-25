<template>
<div class="CheckboxGroup">
  <LabelBasic :label="label" />
  <fieldset :disabled="disabled">
    <legend>{{ legend }}</legend>
    <ul>
      <li v-for="(value, key) in choices" :key="key">
        <CheckboxBasic :label="key" @change="choices[key] = $event" />
      </li>
    </ul>
  </fieldset>
</div>
</template>

<script>
import LabelBasic from './LabelBasic'
import CheckboxBasic from './CheckboxBasic'

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },

    legend: {
      required: true,
      type: String,
    },

    label: {
      type: String,
      default: '',
    },

    choices: {
      required: true,
      type: Object,
    },
  },

  components: {
    LabelBasic,
    CheckboxBasic,
  },

  methods: {
    makeId(id) {
      return id.split(' ').join('_')
    },
  },
}
</script>

<style lang="scss">
.CheckboxGroup {
  @extend %Input-Container;
  display: flex;

  ul {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;

    LabelBasic {
      margin-left: $Text-Size-XS;
    }

    .CheckboxBasic {
      margin: 0;
    }

    + li {
      padding-top: $Text-Size-2XS;
    }
  }
}
</style>

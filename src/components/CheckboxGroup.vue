<template>
<div class="CheckboxGroup">
  <LabelBasic :label="label" />
  <fieldset>
    <legend>{{ legend }}</legend>
    <ul>
      <li v-for="(value, key) in choices" :key="key">
        <input type="checkbox"
          :id="makeId(key)"
          :name="makeId(key)"
          @change="toggleCheck($event, key)"
        />
        <LabelBasic :id="key" :label="key" />
      </li>
    </ul>
  </fieldset>
</div>
</template>

<script>
import LabelBasic from './LabelBasic'

export default {
  props: {
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
  },

  methods: {
    makeId(id) {
      return id.split(' ').join('_')
    },

    toggleCheck(e, key) {
      this.choices[key] = e.target.checked
    }
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

    + li {
      padding-top: $Text-Size-2XS;
    }
  }
}
</style>

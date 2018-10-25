<template>
<div class="InputBasic">
  <LabelBasic labeling="an id" label="Your name" />
  <div class="inputContainer">
    <input
      :ref="id"
      :id="id"
      :placeholder="placeholder"
      type="text"
      @input="updateInput"
    />
    <LabelSublabel :sublabel="optional ? 'optional' : sublabel" />
  </div>

</div>
</template>

<script>
import LabelBasic from './LabelBasic'
import LabelSublabel from './LabelSublabel'

export default {
  components: {
    LabelBasic,
    LabelSublabel,
  },

  props: {
    id: {
      type: String,
      required: false,
    },

    label: {
      type: String,
      default: '',
    },

    sublabel: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
      required: false,
    },

    optional: {
      type: Boolean,
      default: false,
    }
  },

  data: _ => ({
    inputText: '',
  }),

  watch: {
    inputText(newInput) {
      this.$emit('input-changed', newInput)
    }
  },

  methods: {
    updateInput(e) {
      this.inputText = e.target.value
    }
  }
}
</script>

<style lang="scss">
.InputBasic {
  @extend %Input-Container;
  display: flex;
  align-items: flex-start;
  font-size: $Text-Size-M;

  .inputContainer {
    display: flex;
    flex-direction: column;
  }

  input {
    border: none;
    border-bottom: 1px solid $Color-Text-100;

    &:focus {
      outline: none;
      border-bottom: 1px solid $Color-Focus;
    }
  }
}
</style>

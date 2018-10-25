export default {
  props: {
    id: {
      type: String,
      default: '',
    },

    label: {
      type: String,
      required: true,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    newId() { return (this.id || this.label).split(' ').join('_') }
  },

  methods: {
    handleCheck(e) { this.$emit('change', e.target.checked) },
  },
}

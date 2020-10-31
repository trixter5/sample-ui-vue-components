export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      required: false,
      default: "auto"
    }
  },
  computed: {
    styleWidth() {
      return `width: ${this.width}px`;
    }
  }
};

export default {
  data() {
    return {
      open: this.isOpen,
      height: ""
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      required: false
    }
  },
  computed: {
    offsetTop() {
      return `${this.height + 4}px`;
    },
    triggerWidth() {
      return `${this.width}px`;
    },
    isOpenDropdown() {
      return this.isOpen;
    }
  },
  methods: {
    toggle() {
      this.open = !this.open;
      this.triggerClass();
    },
    triggerClass() {
      if (this.isOpen) {
        this.$refs.trigger.childNodes[0].classList.add("button-label--active");
      } else {
        this.$refs.trigger.childNodes[0].classList.remove(
          "button-label--active"
        );
      }
    }
  },
  mounted() {
    this.height = this.$refs.trigger.offsetHeight;
  }
};

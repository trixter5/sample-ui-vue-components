import ButtonIcon from "./../../ui-library/Buttons/Button-icon/index.vue";
import GroupButtons from "./../Buttons/Group-buttons/index.vue";
export default {
  components: {
    ButtonIcon,
    GroupButtons
  },
  data() {
    return {
      currentValue: this.value,
      decrementDisabled: false,
      incrementDisabled: false,
      inputDisabled: this.disabled
    };
  },
  props: {
    disabled: Boolean,
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {
      required: true
    },
    step: {
      type: Number,
      default: 0.1
    },
    small: {
      type: Boolean
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    placeholderValue: {
      type: String
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    disabled(val) {
      val ? this.incrementDisabled = true : this.incrementDisabled = false;
      val ? this.decrementDisabled = true : this.decrementDisabled = false;
    }
  },
  methods: {
    increment() {
      if (this.disabled || this.incrementDisabled) {
        return;
      }

      let newVal = this.currentValue + (1 * this.step);
      this.decrementDisabled = false;

      this._updateValue(newVal);
    },
    decrement() {
      if (this.disabled || this.decrementDisabled) {
        return;
      }

      let newVal = this.currentValue + (-1 * this.step);
      this.incrementDisabled = false;

      this._updateValue(newVal);
    },
    _updateValue(newVal) {
      const oldVal = this.currentValue;

      if (oldVal === newVal || typeof this.value !== "number") {
        return;
      }

      if (newVal <= this.min) {
        newVal = this.min;
        this.decrementDisabled = true;
      }

      if (newVal >= this.max) {
        newVal = this.max;
        this.incrementDisabled = true;
      }
      this.currentValue = newVal;
      this.$emit("input", this.currentValue);
    }
  },
  mounted() {
    if (this.value === this.min) {
      this.decrementDisabled = true;
    }
  }
};

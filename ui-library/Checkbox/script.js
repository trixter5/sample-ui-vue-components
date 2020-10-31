import SvgIcon from "./../../svgIcon/index.vue";
export default {
  components: {
    SvgIcon
  },
  data() {
    return {
      iconName: "Checkbox-off",
      checkboxClass: null,
      check: this.cheked
    };
  },
  model: {
    prop: "modelValue",
    event: "change"
  },
  props: {
    name: {
      type: String,
      default: null,
    },
    value: {
      default: null
    },
    modelValue: {
      default: undefined
    },
    checked: {
      type: Boolean,
      default: false
    },
    model: {}
  },
  computed: {
    state() {
      if (this.modelValue === undefined) {
        return this.checked;
      }
      if (this.modelValue instanceof Array) {
        return this.modelValue.indexOf(this.value) > -1;
      }
      return !!this.modelValue;
    }
  },
  methods: {
    onChange() {
      this.toggle();
    },
    upDate() {
      if (this.checked && !this.state) {
        this.toggle();
      }
    },
    toggle() {
      let value;
      if (this.modelValue instanceof Array) {
        value = this.modelValue.slice(0);
        if (this.state) {
          value.splice(value.indexOf(this.value), 1);
        } else {
          value.push(this.value);
        }
      } else {
        value = !this.state;
      }
      this.$emit("change", value);
    }
  },
  watch: {
    checked(newValue) {
      if (newValue !== this.state) {
        this.toggle();
      }
    }
  },
  mounted() {
    if (this.checked && !this.state) {
      this.toggle();
    }
  },
};
